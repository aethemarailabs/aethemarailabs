import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

export default async function ServicesPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="services" className="py-24 px-margin-mobile md:px-margin-desktop min-h-[70vh] flex items-center pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary glow-text uppercase tracking-wider">{dict.services.title}</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">{dict.services.subtitle}</p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {dict.services.teams.map((team: any, idx: number) => (
            <FadeIn key={idx} direction="up" delay={0.2 + idx * 0.1} className="h-full">
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
    </section>
  );
}
