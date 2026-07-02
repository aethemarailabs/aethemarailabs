import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

export default async function ServicesPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="services" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-12 w-full">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-4">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary glow-text uppercase tracking-wider">{dict.services.title}</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">{dict.services.subtitle}</p>
          </div>
        </FadeIn>
        
        {/* Philosophy Banner */}
        <FadeIn direction="up" delay={0.15} className="w-full">
          <div className="w-full bg-gradient-to-r from-primary/20 via-surface-container to-primary/20 border border-primary/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 glow-box shadow-[0_0_20px_rgba(212,175,55,0.15)] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[120px] text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
            </div>
            
            <div className="text-center md:text-left relative z-10 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-label-caps tracking-widest bg-primary/10 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                AETHEMAR'S PHILOSOPHY
              </div>
              <h3 className="font-title-lg text-xl md:text-2xl text-on-surface mb-2">
                비용은 절반으로, <span className="text-primary glow-text">퍼포먼스는 10배로.</span>
              </h3>
              <p className="font-body-sm md:font-body-md text-on-surface-variant max-w-3xl">
                기존 인하우스 팀의 막대한 고정비와 관리 리스크를 완벽하게 해결합니다.<br className="hidden md:block"/>단 1명의 완벽한 컨트롤 타워와 각 분야 최고 수준의 AI 에이전트들이 귀하의 비즈니스를 전담합니다.
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-4">
          {[...dict.services.teams].sort((a: any, b: any) => {
            const order = ['development', 'marketing', 'production'];
            return order.indexOf(a.id) - order.indexOf(b.id);
          }).map((team: any, idx: number) => {
            const isMain = team.id === 'marketing';
            
            let orderClass = '';
            if (team.id === 'marketing') orderClass = 'order-first lg:order-none';
            
            return (
            <FadeIn key={idx} direction="up" delay={0.2 + idx * 0.1} className={`h-full ${orderClass}`}>
              <Link href={`/${lang}/services/${team.id}`} className="block h-full outline-none">
                <div className={`glass-panel rounded-3xl p-8 flex flex-col items-center relative overflow-hidden glow-box group h-full hover:-translate-y-2 transition-all duration-500 cursor-pointer ${isMain ? 'bg-gradient-to-b from-primary/20 to-surface-container/50 border border-primary/50 shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]' : 'border-t border-t-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]'}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>{team.icon}</span>
                </div>

                <div className="relative z-10 w-full flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6 bg-surface-container transition-shadow ${isMain ? 'shadow-[0_0_25px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]' : 'shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]'}`}>
                      <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
                    </div>
                    {isMain && (
                      <div className="mb-2 flex justify-center">
                        <span className="inline-block px-3 py-1 rounded-full border border-primary/50 text-primary text-[10px] font-label-caps tracking-widest bg-primary/20 shadow-[0_0_10px_rgba(212,175,55,0.2)]">MAIN SERVICE</span>
                      </div>
                    )}
                    <h3 className="font-title-lg text-2xl text-on-surface mb-3">{team.title}</h3>
                    <p className="font-body-sm text-on-surface-variant">
                      {team.desc}
                    </p>
                  </div>

                  {/* Team Structure Diagram */}
                  <div className="flex flex-col items-center w-full flex-1 mb-8">
                    {/* Control Tower */}
                    <div className="w-full bg-primary/10 border border-primary/30 rounded-xl p-4 text-center text-primary font-bold shadow-[0_0_15px_rgba(212,175,55,0.1)] mb-1 group-hover:bg-primary/20 transition-colors">
                      <div className="text-[10px] font-label-caps opacity-80 mb-1 tracking-widest">CONTROL TOWER</div>
                      {team.director}
                    </div>
                    
                    <div className="w-px h-8 bg-primary/40 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary glow-box"></div>
                    </div>
                    
                    {/* AI Agents */}
                    <div className="w-full bg-surface-variant/30 border border-on-surface/10 rounded-xl p-5 text-center">
                      <div className="text-[10px] font-label-caps text-on-surface-variant mb-4 tracking-widest">AI AGENTS</div>
                      <div className="flex flex-col gap-2">
                        {team.members.map((member: string, i: number) => (
                          <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-2.5 text-center text-sm text-primary/90 font-medium flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mt-auto border-t border-on-surface/10 pt-6 w-full flex flex-col flex-1">
                    <div className="text-[10px] font-label-caps text-on-surface-variant mb-4 tracking-widest">CORE CAPABILITIES</div>
                    <ul className="space-y-3 font-body-sm text-sm text-on-surface/80 flex-1">
                      {team.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)] flex-shrink-0"></span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* View Details Button */}
                    <div className={`mt-8 flex items-center justify-center gap-2 font-bold text-sm py-3 px-6 rounded-full transition-all duration-300 w-full ${isMain ? 'bg-primary text-background group-hover:bg-primary-hover shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-primary bg-primary/10 group-hover:bg-primary group-hover:text-background'}`}>
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>touch_app</span>
                      <span>Click Here</span>
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
