import Link from 'next/link';
import { getDictionary } from '@/dictionaries';

export default async function PortfolioPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="portfolio" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-12 w-full">
        <div className="space-y-4">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{dict.portfolio.title}</h2>
          <p className="font-body-lg text-on-surface-variant">{dict.portfolio.subtitle}</p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory md:flex-wrap md:justify-center gap-6 md:gap-12 w-full pb-8 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 scrollbar-hide">
          <Link href="https://www.youtube.com/@AethemarAILabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>smart_display</span>
            </div>
            <div className="text-center">
              <p className="font-label-caps text-on-surface text-lg">YouTube</p>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethemarailabs</p>
            </div>
          </Link>
          
          <Link href="https://www.instagram.com/aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
            </div>
            <div className="text-center">
              <p className="font-label-caps text-on-surface text-lg">Instagram</p>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethernarailabs</p>
            </div>
          </Link>
          
          <Link href="https://www.threads.com/@aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>forum</span>
            </div>
            <div className="text-center">
              <p className="font-label-caps text-on-surface text-lg">Threads</p>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethernarailabs</p>
            </div>
          </Link>
        </div>

        {/* Embedded Videos Section */}
        <div className="w-full mt-16 space-y-16">
          {/* YouTube Embeds */}
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

          {/* Instagram Embeds */}
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
                  src="https://www.instagram.com/reel/DX9uaVuJzBe/embed/" 
                  scrolling="no"
                ></iframe>
              </div>
              <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                <iframe
                  className="w-full h-[600px] border-0"
                  src="https://www.instagram.com/p/DX5T0G1kiM8/embed/" 
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Threads Embeds */}
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
              <div className="w-full max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white">
                <iframe
                  className="w-full h-[600px] border-0"
                  src="https://www.threads.net/@aethemarailabs/post/DYFD5p2E7qN/embed"
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
        </div>
      </div>
    </section>
  );
}
