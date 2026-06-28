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
        
        <div className="flex flex-col gap-12 w-full">
          {/* Main Featured Service (Marketing) */}
          {dict.services.teams.slice(0, 1).map((team: any, idx: number) => (
            <FadeIn key={`main-${idx}`} direction="up" delay={0.2} className="w-full">
              <Link href={`/${lang}/services/${team.id}`} className="block w-full outline-none">
                <div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center relative overflow-hidden border-t border-t-primary/50 glow-box group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-500 cursor-pointer gap-8 md:gap-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Background Icon */}
                  <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <span className="material-symbols-outlined text-[200px] text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>{team.icon}</span>
                  </div>

                  {/* Left Col (Header + Capabilities) */}
                  <div className="relative z-10 w-full md:w-1/2 flex flex-col h-full text-center md:text-left">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/30 flex items-center justify-center mx-auto md:mx-0 mb-6 bg-surface-container shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-shadow">
                      <span className="material-symbols-outlined text-primary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-label-caps tracking-widest bg-primary/5 mb-3">MAIN SERVICE</span>
                    </div>
                    <h3 className="font-display-lg text-3xl md:text-4xl text-on-surface mb-4 glow-text">{team.title}</h3>
                    <p className="font-body-lg text-on-surface-variant mb-8 text-lg">
                      {team.desc}
                    </p>
                    
                    <div className="mt-auto border-t border-on-surface/10 pt-6">
                      <div className="text-[10px] font-label-caps text-on-surface-variant mb-4 tracking-widest text-center md:text-left">CORE CAPABILITIES</div>
                      <ul className="space-y-3 font-body-sm text-base text-on-surface/80">
                        {team.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-center justify-center md:justify-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)] flex-shrink-0"></span> 
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Col (Team Structure) */}
                  <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center h-full border-t md:border-t-0 md:border-l border-on-surface/10 pt-8 md:pt-0 pl-0 md:pl-12">
                    {/* Control Tower */}
                    <div className="w-full max-w-sm bg-primary/10 border border-primary/30 rounded-xl p-5 text-center text-primary font-bold shadow-[0_0_15px_rgba(212,175,55,0.1)] mb-1 group-hover:bg-primary/20 transition-colors">
                      <div className="text-xs font-label-caps opacity-80 mb-2 tracking-widest">CONTROL TOWER</div>
                      <div className="text-xl">{team.director}</div>
                    </div>
                    
                    <div className="w-px h-10 bg-primary/40 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary glow-box"></div>
                    </div>
                    
                    {/* AI Agents */}
                    <div className="w-full max-w-sm bg-surface-variant/30 border border-on-surface/10 rounded-xl p-6 text-center">
                      <div className="text-xs font-label-caps text-on-surface-variant mb-5 tracking-widest">AI AGENTS</div>
                      <div className="flex flex-col gap-3">
                        {team.members.map((member: string, i: number) => (
                          <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center text-base text-primary/90 font-medium flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}

          {/* Sub Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {dict.services.teams.slice(1).map((team: any, idx: number) => (
              <FadeIn key={`sub-${idx}`} direction="up" delay={0.4 + idx * 0.1} className="h-full">
                <Link href={`/${lang}/services/${team.id}`} className="block h-full outline-none">
                  <div className="glass-panel rounded-3xl p-8 flex flex-col items-center relative overflow-hidden border-t border-t-primary/50 glow-box group h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Background Icon */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>{team.icon}</span>
                  </div>

                  <div className="relative z-10 w-full flex flex-col h-full">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6 bg-surface-container shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-shadow">
                        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
                      </div>
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
                    <div className="mt-auto border-t border-on-surface/10 pt-6">
                      <div className="text-[10px] font-label-caps text-on-surface-variant mb-4 tracking-widest">CORE CAPABILITIES</div>
                      <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                        {team.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)] flex-shrink-0"></span> 
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
