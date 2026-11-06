import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

export default async function ServicesPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="services" className="py-10 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-6 md:space-y-12 w-full">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2.5 md:space-y-4">
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-5xl text-primary glow-text uppercase tracking-wider">{dict.services.title}</h2>
            <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed break-keep">{dict.services.subtitle}</p>
          </div>
        </FadeIn>
        
        {/* Philosophy Banner */}
        <FadeIn direction="up" delay={0.15} className="w-full">
          <div className="w-full bg-gradient-to-r from-primary/20 via-surface-container to-primary/20 border border-primary/30 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 glow-box shadow-[0_0_20px_rgba(212,175,55,0.15)] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[90px] md:text-[120px] text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
            </div>
            
            <div className="text-center md:text-left relative z-10 flex-1">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-primary/30 text-primary text-[10px] md:text-xs font-label-caps tracking-widest bg-primary/10 mb-2 md:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                AETHEMAR'S PHILOSOPHY
              </div>
              <h3 className="font-title-lg text-base sm:text-lg md:text-2xl text-on-surface mb-1.5 md:mb-2 break-keep">
                {lang === 'ko' ? (
                  <>비용은 절반으로, <span className="text-primary glow-text">개발과 성장의 속도는 10배로.</span></>
                ) : (
                  <>Half the Cost, <span className="text-primary glow-text">10x Faster Delivery & Growth.</span></>
                )}
              </h3>
              <p className="font-body-sm md:font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant max-w-3xl leading-relaxed break-keep">
                {lang === 'ko' ? (
                  <>기존 외주 개발과 인하우스 팀 운영의 높은 고정비, 소통 비용, 관리 리스크를 해결합니다.<br className="hidden md:block"/>숙련된 전문가 컨트롤 타워와 분야별 특화 AI 에이전트들이 프로덕트 개발부터 마케팅까지 책임지고 수행합니다.</>
                ) : (
                  <>Eliminate the high fixed overhead, communication delays, and management risks of traditional agencies and in-house teams.<br className="hidden md:block"/>Seasoned expert Control Towers and specialized AI Agents handle everything from SW development to marketing.</>
                )}
              </p>
            </div>
            
            <div className="hidden lg:flex items-center gap-4 relative z-10 opacity-80 border-l border-primary/20 pl-8">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-1">group_off</span>
                <span className="text-[10px] font-label-caps tracking-widest">NO HR RISK</span>
              </div>
              <div className="w-px h-10 bg-primary/20 mx-2"></div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-1">trending_up</span>
                <span className="text-[10px] font-label-caps tracking-widest">10X ROI</span>
              </div>
            </div>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 w-full mt-2 md:mt-4">
          {[...dict.services.teams].sort((a: any, b: any) => {
            const order = ['development', 'marketing', 'production'];
            return order.indexOf(a.id) - order.indexOf(b.id);
          }).map((team: any, idx: number) => {
            const isMain = team.id === 'development';
            
            let orderClass = '';
            if (team.id === 'development') orderClass = 'order-first lg:order-none';
            
            return (
            <FadeIn key={idx} direction="up" delay={0.2 + idx * 0.1} className={`h-full ${orderClass}`}>
              <Link href={`/${lang}/services/${team.id}`} className="block h-full outline-none">
                <div className={`glass-panel rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col items-center relative overflow-hidden glow-box group h-full hover:-translate-y-2 transition-all duration-500 cursor-pointer ${isMain ? 'bg-gradient-to-b from-primary/20 to-surface-container/50 border border-primary/50 shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]' : 'border-t border-t-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]'}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-6xl md:text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>{team.icon}</span>
                </div>

                <div className="relative z-10 w-full flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-5 md:mb-8">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3.5 md:mb-6 bg-surface-container transition-shadow ${isMain ? 'shadow-[0_0_25px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]' : 'shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]'}`}>
                      <span className="material-symbols-outlined text-primary text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
                    </div>
                    {isMain && (
                      <div className="mb-1.5 md:mb-2 flex justify-center">
                        <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-primary/50 text-primary text-[9px] md:text-[10px] font-label-caps tracking-widest bg-primary/20 shadow-[0_0_10px_rgba(212,175,55,0.2)]">MAIN SERVICE</span>
                      </div>
                    )}
                    <h3 className="font-title-lg text-lg sm:text-xl md:text-2xl text-on-surface mb-2 md:mb-3">{team.title}</h3>
                    <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed break-keep">
                      {team.desc}
                    </p>
                  </div>

                  {/* Team Structure Diagram */}
                  <div className="flex flex-col items-center w-full flex-1 mb-5 md:mb-8">
                    {/* Control Tower */}
                    <div className="w-full bg-primary/10 border border-primary/30 rounded-xl p-3 md:p-4 text-center text-xs md:text-sm text-primary font-bold shadow-[0_0_15px_rgba(212,175,55,0.1)] mb-1 group-hover:bg-primary/20 transition-colors">
                      <div className="text-[9px] md:text-[10px] font-label-caps opacity-80 mb-0.5 md:mb-1 tracking-widest">CONTROL TOWER</div>
                      {team.director}
                    </div>
                    
                    <div className="w-px h-5 md:h-8 bg-primary/40 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary glow-box"></div>
                    </div>
                    
                    {/* AI Agents */}
                    <div className="w-full bg-surface-variant/30 border border-on-surface/10 rounded-xl p-3.5 md:p-5 text-center">
                      <div className="text-[9px] md:text-[10px] font-label-caps text-on-surface-variant mb-2.5 md:mb-4 tracking-widest">AI AGENTS</div>
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 md:gap-2">
                        {team.members.map((member: string, i: number) => (
                          <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-2 md:p-2.5 text-center text-[11px] md:text-sm text-primary/90 font-medium flex items-center justify-center gap-1.5 md:gap-2">
                            <span className="material-symbols-outlined text-[14px] md:text-[16px]">smart_toy</span>
                            <span className="truncate">{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mt-auto border-t border-on-surface/10 pt-4 md:pt-6 w-full flex flex-col flex-1">
                    <div className="text-[9px] md:text-[10px] font-label-caps text-on-surface-variant mb-2.5 md:mb-4 tracking-widest">CORE CAPABILITIES</div>
                    <ul className="space-y-2 md:space-y-3 font-body-sm text-xs md:text-sm text-on-surface/80 flex-1 text-left">
                      {team.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2.5 md:gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)] flex-shrink-0"></span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* View Details Button */}
                    <div className={`mt-5 md:mt-8 flex items-center justify-center gap-2 font-bold text-xs md:text-sm py-2.5 md:py-3 px-5 md:px-6 rounded-full transition-all duration-300 w-full ${isMain ? 'bg-primary text-background group-hover:bg-primary-hover shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-primary bg-primary/10 group-hover:bg-primary group-hover:text-background'}`}>
                      <span className="material-symbols-outlined text-base md:text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>touch_app</span>
                      <span>{lang === 'ko' ? '자세히 보기' : 'Click Here'}</span>
                    </div>
                  </div>
                </div>

                </div>
              </Link>
            </FadeIn>
          )})}
        </div>
      </div>
    </section>
  );
}
