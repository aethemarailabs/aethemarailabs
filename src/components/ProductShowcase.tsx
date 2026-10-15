"use client";

import { useState } from 'react';
import Link from 'next/link';

export type ProductItem = {
  id: string;
  category: 'software' | 'webpage' | 'ai_contents';
  categoryLabel: string;
  title: string;
  subtitle?: string;
  desc: string;
  tags: string[];
  highlight: string;
  icon: string;
  type: 'software' | 'webpage' | 'video' | 'external';
  videoType?: 'youtube' | 'instagram' | 'threads';
  videoId?: string;
  thumbnail?: string;
  url?: string;
  details?: string[];
};

type ProductShowcaseProps = {
  dict: any;
};

export default function ProductShowcase({ dict }: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'webpage' | 'ai_contents'>('all');
  const [activeModalItem, setActiveModalItem] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', name: dict.categories.all, icon: 'grid_view' },
    { id: 'software', name: dict.categories.software, icon: 'terminal' },
    { id: 'webpage', name: dict.categories.webpage, icon: 'language' },
    { id: 'ai_contents', name: dict.categories.ai_contents, icon: 'movie' },
  ] as const;

  const filteredItems: ProductItem[] = activeTab === 'all'
    ? (dict.items || [])
    : (dict.items || []).filter((item: ProductItem) => item.category === activeTab);

  const getCount = (catId: 'all' | 'software' | 'webpage' | 'ai_contents') => {
    if (!dict.items) return 0;
    if (catId === 'all') return dict.items.length;
    return dict.items.filter((item: any) => item.category === catId).length;
  };

  const handleCardClick = (item: ProductItem) => {
    if (item.type === 'external' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveModalItem(item);
  };

  const closeModal = () => {
    setActiveModalItem(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto w-full px-2">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          const count = getCount(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-label-caps tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-primary text-background font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                  : 'glass-panel text-on-surface-variant hover:text-primary hover:border-primary/40'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {cat.icon}
              </span>
              <span>{cat.name}</span>
              <span
                className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-background/20 text-background font-bold' : 'bg-surface-variant/50 text-on-surface-variant'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
        {filteredItems.map((item: ProductItem) => {
          const isVideo = item.type === 'video';
          const isSoftware = item.category === 'software';
          const isWeb = item.category === 'webpage';

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col glow-box group hover:-translate-y-2 transition-all duration-300 border border-primary/15 hover:border-primary/50 cursor-pointer"
            >
              {/* Media / Visual Header */}
              <div className="relative aspect-video w-full bg-surface-variant/40 overflow-hidden border-b border-primary/10 flex items-center justify-center">
                {isVideo && item.thumbnail ? (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/90 text-background flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          play_arrow
                        </span>
                      </div>
                    </div>
                  </>
                ) : isVideo && item.videoType === 'instagram' ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#bc1888]/20 via-surface to-[#f09433]/20 flex flex-col items-center justify-center gap-2 p-4 text-center">
                    <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                      video_library
                    </span>
                    <span className="text-xs font-label-caps text-on-surface-variant tracking-wider">Instagram Reels Asset</span>
                  </div>
                ) : (
                  /* S/W or Web Mockup Preview */
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-surface-variant/30 to-surface flex flex-col p-4 justify-between">
                    {/* Browser / Terminal Bar */}
                    <div className="flex items-center justify-between pb-2 border-b border-on-surface/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-label-caps text-on-surface-variant/70 tracking-widest bg-surface/60 px-3 py-0.5 rounded-full border border-on-surface/5">
                        <span className="material-symbols-outlined text-[13px]">lock</span>
                        <span>{isSoftware ? 'aethemar.app' : 'client.portal'}</span>
                      </div>
                      <div className="w-8"></div>
                    </div>

                    {/* Center Icon Graphic */}
                    <div className="flex flex-col items-center justify-center my-auto py-3">
                      <div className="w-14 h-14 rounded-2xl bg-surface border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:border-primary/60 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all">
                        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {item.icon}
                        </span>
                      </div>
                      <span className="mt-2 text-xs font-label-caps text-primary/80 tracking-wider">
                        {isSoftware ? 'ENTERPRISE S/W' : 'RESPONSIVE WEB'}
                      </span>
                    </div>

                    {/* Live Status indicator */}
                    <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span className="font-label-caps tracking-widest text-[10px]">PRODUCTION READY</span>
                      </span>
                      <span className="material-symbols-outlined text-sm text-primary/70 group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                )}

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-label-caps tracking-widest bg-surface/90 backdrop-blur-md border border-primary/30 text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[12px]">{item.icon}</span>
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <h3 className="font-title-md text-lg text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-base">
                      {item.type === 'video' ? 'play_circle' : item.type === 'external' ? 'open_in_new' : 'arrow_outward'}
                    </span>
                  </h3>
                  {item.subtitle && (
                    <p className="font-body-sm text-xs text-primary/90 mt-1 font-medium">{item.subtitle}</p>
                  )}
                </div>

                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed line-clamp-3 flex-1">
                  {item.desc}
                </p>

                {/* Key Highlight Box */}
                <div className="bg-primary/5 rounded-xl p-3 border border-primary/15 flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0 mt-0.5">
                    verified
                  </span>
                  <div className="flex-1">
                    <span className="text-[10px] font-label-caps text-primary/80 tracking-widest block uppercase mb-0.5">
                      {dict.labels.key_highlight}
                    </span>
                    <p className="font-body-sm text-xs text-on-surface font-medium leading-snug">
                      {item.highlight}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-[11px] font-label-caps px-2.5 py-1 rounded-md bg-surface-variant/40 border border-on-surface/5 text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-lg border border-primary/30 text-primary text-xs font-label-caps tracking-widest uppercase hover:bg-primary hover:text-background transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <span>
                      {item.type === 'video'
                        ? dict.labels.watch_video
                        : item.type === 'webpage'
                        ? dict.labels.visit_site
                        : dict.labels.view_demo}
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      {item.type === 'video' ? 'play_arrow' : 'arrow_forward'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Social Channels Strip */}
      <div className="w-full max-w-5xl mx-auto mt-24 glass-panel rounded-3xl p-8 md:p-12 border border-primary/20 glow-box relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-40 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-label-caps tracking-widest bg-primary/5">
              {dict.social_channels.badge}
            </span>
            <h3 className="font-display-lg text-2xl md:text-3xl text-on-surface">
              {dict.social_channels.title}
            </h3>
            <p className="font-body-sm text-on-surface-variant text-sm">
              {dict.social_channels.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* YouTube */}
            <Link
              href="https://www.youtube.com/@AethemarAILabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface/80 border border-primary/20 hover:border-primary/50 text-on-surface hover:text-primary transition-all group"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-label-caps">YouTube</div>
                <div className="text-[10px] text-on-surface-variant">{dict.social_channels.youtube_sub}</div>
              </div>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/aethemarailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface/80 border border-primary/20 hover:border-primary/50 text-on-surface hover:text-primary transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <defs>
                  <linearGradient id="ig-grad-showcase" x1="20%" y1="100%" x2="80%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="25%" stopColor="#e6683c"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="75%" stopColor="#cc2366"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <path fill="url(#ig-grad-showcase)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-label-caps">Instagram</div>
                <div className="text-[10px] text-on-surface-variant">{dict.social_channels.insta_sub}</div>
              </div>
            </Link>

            {/* Threads */}
            <Link
              href="https://www.threads.net/@aethemarailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface/80 border border-primary/20 hover:border-primary/50 text-on-surface hover:text-primary transition-all group"
            >
              <img src="https://static.cdninstagram.com/rsrc.php/y4/r/pctUncuduBn.svg" alt="Threads" className="w-5 h-5 invert" />
              <div className="text-left">
                <div className="text-xs font-label-caps">Threads</div>
                <div className="text-[10px] text-on-surface-variant">{dict.social_channels.threads_sub}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="glass-panel rounded-3xl max-w-4xl w-full border border-primary/30 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-on-surface/10 bg-surface-container/60">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">{activeModalItem.icon}</span>
                <div>
                  <span className="text-[10px] font-label-caps text-primary/80 tracking-widest block uppercase">
                    {activeModalItem.categoryLabel}
                  </span>
                  <h3 className="font-title-md text-xl text-on-surface">{activeModalItem.title}</h3>
                </div>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              {activeModalItem.type === 'video' && activeModalItem.videoId ? (
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
                  {activeModalItem.videoType === 'youtube' ? (
                    <iframe
                      className="w-full h-full border-0"
                      src={`https://www.youtube.com/embed/${activeModalItem.videoId}?autoplay=1`}
                      title={activeModalItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe
                      className="w-full h-full border-0"
                      src={`https://www.instagram.com/p/${activeModalItem.videoId}/embed/`}
                      title={activeModalItem.title}
                      scrolling="no"
                    ></iframe>
                  )}
                </div>
              ) : null}

              {/* Description & Specifications */}
              <div className="space-y-4">
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {activeModalItem.desc}
                </p>

                {activeModalItem.details && (
                  <div className="bg-surface/50 rounded-2xl p-5 border border-on-surface/5 space-y-3">
                    <span className="text-xs font-label-caps text-primary tracking-widest block uppercase">
                      핵심 설계 & 특장점 (Key Features)
                    </span>
                    <ul className="space-y-2">
                      {activeModalItem.details.map((detail: string, idx: number) => (
                        <li key={idx} className="font-body-sm text-sm text-on-surface/80 flex items-start gap-2.5">
                          <span className="text-primary mt-1 text-xs">◆</span>
                          <span className="flex-1 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Highlight */}
                <div className="bg-primary/10 rounded-2xl p-4 border border-primary/30 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">
                    award_star
                  </span>
                  <div>
                    <span className="text-[10px] font-label-caps text-primary tracking-widest block uppercase">
                      {dict.labels.key_highlight}
                    </span>
                    <p className="font-title-md text-sm md:text-base text-on-surface font-bold">
                      {activeModalItem.highlight}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <span className="text-xs font-label-caps text-on-surface-variant tracking-widest block uppercase mb-2">
                    {dict.labels.tech_stack}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs font-label-caps px-3 py-1.5 rounded-lg bg-surface-variant/40 border border-primary/20 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* External Link CTA if available */}
              {activeModalItem.url && (
                <div className="pt-4 flex justify-end">
                  <a
                    href={activeModalItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full text-xs font-label-caps font-bold tracking-widest uppercase hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  >
                    <span>{dict.labels.visit_site}</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
