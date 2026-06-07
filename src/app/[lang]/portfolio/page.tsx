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
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-on-surface group-hover:text-[#FF0000] transition-colors">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="font-label-caps text-on-surface text-lg">YouTube</p>
                <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethemarailabs</p>
              </div>
            </Link>
            
            <Link href="https://www.instagram.com/aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-on-surface group-hover:text-[#E1306C] transition-colors">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162C18.162 8.598 15.405 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="font-label-caps text-on-surface text-lg">Instagram</p>
                <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethernarailabs</p>
              </div>
            </Link>
            
            <Link href="https://www.threads.com/@aethemarailabs" target="_blank" rel="noopener noreferrer" className="flex-none w-[60vw] md:w-auto snap-center flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-on-surface group-hover:text-primary transition-colors">
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12v-1.112c0-3.111-2.022-5.756-5.011-6.425-1.157-.26-2.368-.26-3.526 0-2.127.478-3.791 2.142-4.269 4.269-.26 1.158-.26 2.369 0 3.527.478 2.127 2.142 3.791 4.269 4.269 1.158.26 2.369.26 3.526 0 .432-.097.842-.249 1.229-.448-.135 1.547-1.127 2.887-2.585 3.42-1.466.536-3.125.432-4.502-.284-1.428-.742-2.39-2.176-2.457-3.784h-1.921c.075 2.452 1.472 4.613 3.606 5.679 1.942.968 4.288 1.05 6.31.223 2.19-.894 3.702-2.984 3.868-5.361V12c0-5.522-4.477-10-10-10S2 6.478 2 12s4.478 10 10 10 10-4.478 10-10C22 6.477 17.523 2 12 2zm1.611 14.153c-.702.158-1.436.158-2.138 0-1.289-.29-2.298-1.299-2.588-2.588-.158-.702-.158-1.436 0-2.138.29-1.289 1.299-2.298 2.588-2.588.702-.158 1.436-.158 2.138 0 1.289.29 2.298 1.299 2.588 2.588.158.702.158 1.436 0 2.138-.29 1.289-1.299 2.298-2.588 2.588zM12 14c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/>
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
