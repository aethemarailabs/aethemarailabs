import React from 'react';

type PlatformBadgeProps = {
  id: string;
  name: string;
};

export default function PlatformBadge({ id, name }: PlatformBadgeProps) {
  const getIcon = () => {
    switch (id) {
      case 'reels':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center p-2 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
             <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', opacity: 0.15 }}></div>
             <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 relative z-10" fill="url(#ig-grad-reels)">
               <defs>
                 <linearGradient id="ig-grad-reels" x1="20%" y1="100%" x2="80%" y2="0%">
                   <stop offset="0%" stopColor="#f09433"/>
                   <stop offset="25%" stopColor="#e6683c"/>
                   <stop offset="50%" stopColor="#dc2743"/>
                   <stop offset="75%" stopColor="#cc2366"/>
                   <stop offset="100%" stopColor="#bc1888"/>
                 </linearGradient>
               </defs>
               <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 14.5v-9l8 4.5-8 4.5z"/>
             </svg>
          </div>
        );
      case 'instagram':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center p-2 group-hover:-translate-y-1 transition-transform">
             <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
               <defs>
                 <linearGradient id="ig-grad-badge" x1="20%" y1="100%" x2="80%" y2="0%">
                   <stop offset="0%" stopColor="#f09433"/>
                   <stop offset="25%" stopColor="#e6683c"/>
                   <stop offset="50%" stopColor="#dc2743"/>
                   <stop offset="75%" stopColor="#cc2366"/>
                   <stop offset="100%" stopColor="#bc1888"/>
                 </linearGradient>
               </defs>
               <path fill="url(#ig-grad-badge)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
             </svg>
          </div>
        );
      case 'youtube':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center p-2 group-hover:-translate-y-1 transition-transform">
             <svg viewBox="0 0 24 24" className="w-9 h-9 md:w-11 md:h-11">
               <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
               <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
             </svg>
          </div>
        );
      case 'naver-place':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center p-2 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
             <span className="material-symbols-outlined text-[#03C75A] text-[36px] md:text-[42px]" style={{ fontVariationSettings: "'FILL' 1" }}>where_to_vote</span>
          </div>
        );
      case 'daangn':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FF7E36] shadow-[0_4px_15px_rgba(255,126,54,0.3)] flex items-center justify-center p-2 group-hover:-translate-y-1 transition-transform">
             <span className="material-symbols-outlined text-white text-[32px] md:text-[38px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_mall</span>
          </div>
        );
      case 'naver-blog':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#03C75A] shadow-[0_4px_15px_rgba(3,199,90,0.3)] flex items-center justify-center p-2 group-hover:-translate-y-1 transition-transform">
             <span className="text-white font-black text-xl md:text-2xl tracking-tighter">blog</span>
          </div>
        );
      case 'ai':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#74AA9C] shadow-[0_4px_15px_rgba(116,170,156,0.3)] flex items-center justify-center p-2 group-hover:-translate-y-1 transition-transform">
             <span className="material-symbols-outlined text-white text-[32px] md:text-[38px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
        );
      case 'threads':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center p-2 group-hover:-translate-y-1 transition-transform">
             <img src="https://static.cdninstagram.com/rsrc.php/y4/r/pctUncuduBn.svg" alt="Threads" className="w-8 h-8 md:w-10 md:h-10" />
          </div>
        );
      case 'naver-ads':
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#03C75A] shadow-[0_4px_15px_rgba(3,199,90,0.3)] flex items-center justify-center p-2 group-hover:-translate-y-1 transition-transform">
             <span className="text-white font-black text-3xl md:text-4xl">N</span>
          </div>
        );
      default:
        return (
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface-container flex items-center justify-center group-hover:-translate-y-1 transition-transform"></div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 md:gap-3 group w-full">
      {getIcon()}
      <span className="text-[11px] md:text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors text-center leading-tight whitespace-pre-wrap max-w-[80px]">
        {name.includes(' ') ? name.replace(' ', '\n') : name.includes('/') ? name.replace('/', '\n') : name}
      </span>
    </div>
  );
}
