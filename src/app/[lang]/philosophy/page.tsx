import Image from 'next/image';
import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import FloatAnimation from '@/components/animations/FloatAnimation';

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="philosophy" className="relative min-h-[70vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-8 md:py-16 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-4 md:gap-6">
        <FloatAnimation duration={6} yOffset={10}>
          <Image 
            src="/logo_outline.png"
            alt="Aethemar Logo Glowing" 
            width={400} 
            height={130} 
            className="h-12 sm:h-20 md:h-28 w-auto mix-blend-screen opacity-90 object-contain"
            unoptimized 
            priority
          />
        </FloatAnimation>
        
        <div className="space-y-4 w-full">
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <h1 className="font-display-lg text-2xl sm:text-3xl md:text-5xl text-primary glow-text uppercase tracking-wider leading-tight">
              {dict.philosophy.title1}<br />
              <span className="text-on-background">{dict.philosophy.title2}</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4} duration={0.8}>
            <div className="glass-panel w-full max-w-3xl mx-auto text-left px-5 py-5 md:px-10 md:py-8 rounded-2xl glow-box space-y-3.5 md:space-y-4 relative overflow-hidden mt-2 md:mt-4 transition-transform hover:-translate-y-1 duration-500">
              <div className="absolute -top-10 -right-10 text-primary/5 text-7xl md:text-9xl font-display-lg pointer-events-none" aria-hidden="true">A</div>
              <div className="relative z-10 border-b border-primary/20 pb-4 md:pb-6">
                <h2 className="font-title-md text-base md:text-2xl text-primary mb-1.5 md:mb-2 tracking-widest uppercase">{dict.philosophy.subtitle}</h2>
                <p className="font-body-lg text-xs sm:text-sm md:text-lg text-on-surface-variant leading-relaxed break-keep">
                  <span className="text-primary font-medium">Aether</span> {lang === 'ko' ? '(연결과 확장의 매질)' : ''} + <span className="text-primary font-medium">AI Engineering & Market</span> = <span className="text-on-background font-bold tracking-widest uppercase ml-1 md:ml-2">Aethemar</span>
                </p>
              </div>
              <div className="relative z-10 space-y-3 md:space-y-4 font-body-sm text-on-surface/80 text-xs sm:text-sm md:text-base leading-relaxed break-keep">
                <p dangerouslySetInnerHTML={{ __html: dict.philosophy.desc1 }} />
                <p dangerouslySetInnerHTML={{ __html: dict.philosophy.desc2 }} />
                <p dangerouslySetInnerHTML={{ __html: dict.philosophy.desc3 }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
