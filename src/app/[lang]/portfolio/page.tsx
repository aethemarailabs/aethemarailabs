import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';

export default async function PortfolioPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="portfolio" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-12 w-full">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-4">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary glow-text uppercase tracking-wider">{dict.portfolio.title}</h2>
            <p className="font-body-lg text-on-surface-variant">{dict.portfolio.subtitle}</p>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-row justify-center items-start gap-3 sm:gap-6 md:gap-12 w-full pb-8">
            <Link href="https://www.threads.com/@aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-[100px] md:max-w-none flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <img src="https://static.cdninstagram.com/rsrc.php/y4/r/pctUncuduBn.svg" alt="Threads" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
              <div className="text-center w-full">
                <p className="font-label-caps text-on-surface text-xs sm:text-sm md:text-lg">Threads</p>
                <p className="font-body-sm text-[10px] sm:text-[11px] md:text-sm text-on-surface-variant mt-1 md:truncate">@aethemarailabs</p>
              </div>
            </Link>
            
            <Link href="https://www.instagram.com/aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-[100px] md:max-w-none flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                  <defs>
                    <linearGradient id="ig-grad" x1="20%" y1="100%" x2="80%" y2="0%">
                      <stop offset="0%" stopColor="#f09433"/>
                      <stop offset="25%" stopColor="#e6683c"/>
                      <stop offset="50%" stopColor="#dc2743"/>
                      <stop offset="75%" stopColor="#cc2366"/>
                      <stop offset="100%" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div className="text-center w-full">
                <p className="font-label-caps text-on-surface text-xs sm:text-sm md:text-lg">Instagram</p>
                <p className="font-body-sm text-[10px] sm:text-[11px] md:text-sm text-on-surface-variant mt-1 md:truncate">@aethemarailabs</p>
              </div>
            </Link>
            
            {/* <Link href="https://www.youtube.com/@AethemarAILabs" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-[100px] md:max-w-none flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                  <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="text-center w-full">
                <p className="font-label-caps text-on-surface text-xs sm:text-sm md:text-lg">YouTube</p>
                <p className="font-body-sm text-[10px] sm:text-[11px] md:text-sm text-on-surface-variant mt-1 md:truncate">@aethemarailabs</p>
              </div>
            </Link> */}
          </div>
        </FadeIn>

        {/* Embedded Videos Section */}
        <div className="w-full mt-16 space-y-16">
          {/* YouTube Embeds */}
          {/* <FadeIn direction="up" delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-title-md text-2xl text-primary">YouTube Showcases</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-video w-full rounded-xl overflow-hidden glass-panel glow-box">
                  <iframe 
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/xnuxzPBhaN0" 
                    title="YouTube video player 1" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden glass-panel glow-box">
                  <iframe 
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/nQIjpvkqSsY" 
                    title="YouTube video player 2" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden glass-panel glow-box">
                  <iframe 
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/4SWPBTTnHD0" 
                    title="YouTube video player 3" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden glass-panel glow-box">
                  <iframe 
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/ty8gYccpp-w" 
                    title="YouTube video player 4" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden glass-panel glow-box">
                  <iframe 
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/CR-QJeDDwu0" 
                    title="YouTube video player 5" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden glass-panel glow-box">
                  <iframe 
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/JKmM0hvnfVE" 
                    title="YouTube video player 6" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn> */}

          {/* Instagram Embeds */}
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-title-md text-2xl text-primary">Instagram Reels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.instagram.com/p/DZplSkypVpP/embed/" 
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.instagram.com/p/DZplNp7pOlM/embed/" 
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.instagram.com/p/DX15Nm5iSiu/embed/" 
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.instagram.com/p/DZMoKBARQZ5/embed/" 
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.instagram.com/p/DY2SYh7iSNq/embed/" 
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.instagram.com/p/DXq-NHVEVxJ/embed/" 
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Threads Embeds */}
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-6 pb-12">
              <h3 className="font-title-md text-2xl text-primary">Threads Showcases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.threads.net/@aethemarailabs/post/DXtzzSFCRY8/embed"
                    scrolling="no"
                  ></iframe>
                </div>
                
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.threads.net/@aethemarailabs/post/DX5xWqECmMm/embed"
                    scrolling="no"
                  ></iframe>
                </div>
                
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.threads.net/@aethemarailabs/post/DXt0-CACXbt/embed"
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
