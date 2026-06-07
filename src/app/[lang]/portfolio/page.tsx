import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import InsightImageCard from '@/components/InsightImageCard';
import FadeIn from '@/components/animations/FadeIn';

export default async function PortfolioPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="portfolio" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-12 w-full">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{dict.portfolio.title}</h2>
            <p className="font-body-lg text-on-surface-variant">{dict.portfolio.subtitle}</p>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2}>
          <div className="flex overflow-x-auto snap-x snap-mandatory md:flex-wrap md:justify-center gap-6 md:gap-12 w-full pb-8 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 scrollbar-hide">
            <Link href="https://www.youtube.com/@AethemarAILabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="font-label-caps text-on-surface text-lg">YouTube</p>
                <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethemarailabs</p>
              </div>
            </Link>
            
            <Link href="https://www.instagram.com/aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
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
              <div className="text-center">
                <p className="font-label-caps text-on-surface text-lg">Instagram</p>
                <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethernarailabs</p>
              </div>
            </Link>
            
            <Link href="https://www.threads.com/@aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="white">
                  <path d="M11.996 1c-3.158 0-5.83.673-7.564 1.83C2.88 3.86 2.052 5.378 2.052 7.3c0 2.185.95 3.818 2.457 4.966 1.492 1.135 3.633 1.688 6.002 1.688 1.558 0 3.036-.214 4.343-.604-.426.685-1.026 1.242-1.785 1.6-1.027.483-2.316.64-3.805.517v2.247c1.884.225 3.634.053 5.093-.633 1.272-.596 2.248-1.573 2.853-2.825.405-.838.644-1.84.72-2.97.106-1.554-.153-2.906-.653-4.004-.84-1.843-2.614-3.21-4.832-3.815-1.428-.39-3.076-.46-4.63-.122-1.28.277-2.336.814-3.064 1.553-.61.62-.977 1.378-1.077 2.25h2.176c.07-.376.257-.714.542-.99.418-.403 1.05-.722 1.88-.952 1.107-.306 2.47-.302 3.738.003 1.343.324 2.378 1.037 2.923 2.062.298.56.46 1.23.46 1.954-.002.396-.06.772-.162 1.127-.145.5-.398.92-.72 1.247-.417.42-1.012.723-1.764.912a8.318 8.318 0 0 1-2.186.29c-1.846 0-3.52-.435-4.67-1.308-1.082-.824-1.706-2.022-1.706-3.662 0-1.45.626-2.58 1.77-3.324C7.034 4.54 9.176 4.02 11.996 4.02c2.56 0 4.887.498 6.55 1.488C20.254 6.52 21.01 7.82 21.01 9.4c0 1.916-.78 3.528-2.063 4.67-1.283 1.144-3.056 1.778-5.06 1.88v2.248c2.614-.158 4.95-1.013 6.647-2.528C22.256 14.135 23 11.936 23 9.4c0-2.226-.957-4.103-2.73-5.545C18.497 2.41 15.657 1 11.996 1z"/>
                  <path d="M12.015 11.398c-1.125 0-2.008.23-2.61.642-.516.353-.8.854-.8 1.458 0 .614.288 1.122.81 1.472.586.39 1.417.6 2.41.6 1.4 0 2.53-.33 3.32-.932.617-.468.995-1.122 1.096-1.84-.108-.506-.388-.937-.803-1.237-.58-.42-1.457-.657-2.623-.657-1.365 0-2.457.248-3.097.683-.418.285-.646.685-.646 1.17 0 .475.215.867.618 1.155.51.365 1.25.565 2.128.565s1.614-.2 2.12-.562c.386-.277.606-.653.606-1.137-.01-.41-.21-.758-.553-1.006-.44-.32-1.098-.497-1.87-.497zm-.105.776c1.033 0 1.696.223 2.054.502.264.204.417.48.423.77-.02.484-.282.875-.76 1.134-.582.316-1.474.49-2.585.49-.968 0-1.748-.15-2.253-.408-.415-.213-.65-.544-.65-.927 0-.34.206-.637.585-.85.474-.265 1.205-.412 2.13-.412z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="font-label-caps text-on-surface text-lg">Threads</p>
                <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethernarailabs</p>
              </div>
            </Link>
          </div>
        </FadeIn>

        {/* Embedded Videos Section */}
        <div className="w-full mt-16 space-y-16">
          {/* YouTube Embeds */}
          <FadeIn direction="up" delay={0.2}>
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
                    src="https://www.youtube.com/embed/umBeoLNsuAY" 
                    title="YouTube video player 5" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Instagram Embeds */}
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-title-md text-2xl text-primary">Instagram Reels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
                    src="https://www.instagram.com/p/DXt1L7uCYWm/embed/" 
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
                {/* Insight Image replacing the 5th Instagram post */}
                <InsightImageCard imageSrc="/insight2.jpg" altText="Instagram Post Insights Statistics" />
                <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                  <iframe
                    className="w-full h-[600px] border-0"
                    src="https://www.instagram.com/p/DX5T0G1kiM8/embed/" 
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
                    src="https://www.threads.net/@aethemarailabs/post/DX5xWqECmMm/embed"
                    scrolling="no"
                  ></iframe>
                </div>
                
                {/* Insight Image replacing the 2nd thread */}
                <InsightImageCard imageSrc="/insight1.jpg" altText="Post Insights Statistics" />

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
