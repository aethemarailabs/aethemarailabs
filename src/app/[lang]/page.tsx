import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';

export default async function WhyAethemarPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="why-aethemar" className="relative min-h-[90vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-24 overflow-hidden pt-32">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-16 w-full">
        {/* Pitch Text */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-label-caps tracking-widest bg-primary/5 mb-6">
              {dict.why_aethemar.badge}
            </span>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight">
              {dict.why_aethemar.title1} <br />
              <span className="text-primary glow-text font-medium">{dict.why_aethemar.title2}</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mt-4">
              {dict.why_aethemar.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Detailed Pitch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-8">
          {dict.why_aethemar.details.map((detail: any, idx: number) => (
            <FadeIn key={idx} direction="up" delay={0.3 + idx * 0.1} className="h-full">
              <div className="glass-panel rounded-2xl p-6 md:p-8 h-full flex flex-col glow-box group transition-all duration-300 hover:-translate-y-1 hover:border-t-primary/50 border-t border-t-primary/10">
                <h3 className="font-title-md text-on-surface text-xl mb-6 flex items-start gap-3">
                  <span className="text-primary font-bold opacity-80 mt-1">{`0${idx + 1}`}</span>
                  {detail.title.replace(/^\d+\.\s*/, '')}
                </h3>
                
                <div className="flex flex-col gap-4 flex-1">
                  {/* Before / Reality Box */}
                  <div className="bg-surface/50 rounded-xl p-5 border border-on-surface/5 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-[16px]">warning</span>
                      <span className="text-xs font-label-caps text-on-surface-variant tracking-widest">{detail.label1}</span>
                    </div>
                    <p className="font-body-sm text-on-surface/70 leading-relaxed text-[14px] whitespace-pre-line">
                      {detail.desc1}
                    </p>
                  </div>
                  
                  {/* After / Solution Box */}
                  <div className="bg-primary/5 rounded-xl p-5 border border-primary/20 flex-1 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span className="text-xs font-label-caps text-primary tracking-widest glow-text">{detail.label2}</span>
                    </div>
                    <p className="font-body-sm text-on-surface leading-relaxed text-[15px] font-medium whitespace-pre-line">
                      {detail.desc2}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Comparison Diagram */}
        <FadeIn direction="up" delay={0.6}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-center w-full mt-4">
            
            {/* Traditional In-house Team */}
            <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-center relative overflow-hidden border-t-red-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-50"></div>
              <h3 className="font-title-md text-xl text-on-surface/80 mb-8 z-10">{dict.why_aethemar.traditional_team.title}</h3>
              
              {/* Structure */}
              <div className="flex flex-col items-center gap-4 z-10 w-full max-w-sm flex-1">
                <div className="w-full bg-surface-variant/50 border border-on-surface/10 rounded-lg p-4 text-center text-on-surface">
                  {dict.why_aethemar.traditional_team.director}
                </div>
                <div className="w-px h-6 bg-red-500/30"></div>
                <div className="w-full bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center text-red-200 font-medium">
                  {dict.why_aethemar.traditional_team.leader}
                </div>
                <div className="w-px h-6 bg-red-500/30"></div>
                <div className="w-full grid grid-cols-1 gap-2">
                  {dict.why_aethemar.traditional_team.members.map((member: string, i: number) => (
                    <div key={i} className="bg-surface-variant/30 border border-on-surface/5 rounded-lg p-3 text-center text-sm text-on-surface-variant">
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pain points tags */}
              <div className="mt-10 flex flex-wrap justify-center gap-2 z-10 w-full">
                {dict.why_aethemar.traditional_team.pain_points.map((point: string, i: number) => (
                  <span key={i} className="text-xs font-body-sm px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300">
                    {point}
                  </span>
                ))}
              </div>
            </div>

            {/* VS Divider for desktop */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant font-title-md z-10 glow-box">
                VS
              </div>
            </div>

            {/* Aethemar AI Agent Team */}
            <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-center relative overflow-hidden border-t-primary/50 glow-box group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="font-title-md text-xl text-primary mb-8 z-10 glow-text">{dict.why_aethemar.aethemar_team.title}</h3>
              
              {/* Structure */}
              <div className="flex flex-col items-center gap-4 z-10 w-full max-w-sm flex-1">
                <div className="w-full bg-surface-variant/50 border border-on-surface/10 rounded-lg p-4 text-center text-on-surface">
                  {dict.why_aethemar.aethemar_team.director}
                </div>
                <div className="w-px h-6 bg-primary/50"></div>
                <div className="w-full bg-primary/20 border border-primary/40 rounded-lg p-4 text-center text-primary font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  {dict.why_aethemar.aethemar_team.leader}
                </div>
                <div className="w-px h-6 bg-primary/50"></div>
                <div className="w-full grid grid-cols-1 gap-2">
                  {dict.why_aethemar.aethemar_team.members.map((member: string, i: number) => (
                    <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center text-sm text-primary/90 font-medium">
                      <span className="material-symbols-outlined text-[14px] align-middle mr-1">smart_toy</span>
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits tags */}
              <div className="mt-10 flex flex-wrap justify-center gap-2 z-10 w-full">
                {dict.why_aethemar.aethemar_team.benefits.map((benefit: string, i: number) => (
                  <span key={i} className="text-xs font-body-sm px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary glow-text">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>

        {/* Deep Dive Section */}
        {dict.why_aethemar.deep_dive && (
          <FadeIn direction="up" delay={0.4}>
            <div className="w-full mt-24 flex flex-col gap-12 mb-12">
              <div className="text-center space-y-4">
                <span className="inline-block px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-label-caps tracking-widest bg-primary/5">
                  {dict.why_aethemar.deep_dive.badge}
                </span>
                <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface">
                  {dict.why_aethemar.deep_dive.title}
                </h2>
                <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                  {dict.why_aethemar.deep_dive.subtitle}
                </p>
              </div>

              {/* In-house Structures (2-column) */}
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(dict.why_aethemar.deep_dive.structures).map(([key, structure]: [string, any], idx: number) => (
                  <div key={key} className="glass-panel p-6 md:p-8 rounded-2xl border border-on-surface/5 flex flex-col gap-6 relative overflow-hidden group hover:border-primary/20 transition-colors duration-500">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                      <span className="material-symbols-outlined text-8xl">{key === 'hospital' ? 'local_hospital' : 'gavel'}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="font-title-md text-xl text-on-surface mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">{key === 'hospital' ? 'health_and_safety' : 'balance'}</span>
                        {structure.title}
                      </h3>
                      <p className="font-body-sm text-on-surface-variant text-sm leading-relaxed">{structure.desc}</p>
                    </div>
                    
                    <div className="flex flex-col gap-4 relative z-10">
                      {structure.roles.map((role: any, rIdx: number) => (
                        <div key={rIdx} className="bg-surface/50 border border-on-surface/5 rounded-xl p-5 hover:bg-surface transition-colors">
                          <div className="font-title-md text-sm text-on-surface mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                            {role.name}
                          </div>
                          <ul className="space-y-2">
                            {role.tasks.map((task: string, tIdx: number) => (
                              <li key={tIdx} className="font-body-sm text-[13px] text-on-surface/70 flex items-start gap-2">
                                <span className="text-primary/50 mt-0.5 text-xs">└</span>
                                <span className="flex-1 leading-relaxed">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Mapping Strategy */}
              <div className="glass-panel p-8 md:p-12 rounded-3xl border border-primary/20 relative overflow-hidden glow-box mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                
                <div className="relative z-10 text-center mb-12">
                  <h3 className="font-display-lg text-2xl md:text-3xl text-primary glow-text mb-4">
                    {dict.why_aethemar.deep_dive.mapping.title}
                  </h3>
                  <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    {dict.why_aethemar.deep_dive.mapping.subtitle}
                  </p>
                </div>

                <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {dict.why_aethemar.deep_dive.mapping.agents.map((agent: any, idx: number) => (
                    <div key={idx} className="bg-surface/80 border border-primary/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 shadow-lg">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                        <span className="material-symbols-outlined text-primary text-[28px]">
                          {idx === 0 ? 'psychology' : idx === 1 ? 'edit_document' : idx === 2 ? 'trending_up' : 'movie'}
                        </span>
                      </div>
                      <div>
                        <div className="font-label-caps text-[11px] text-primary/70 tracking-wider mb-1.5">{agent.name}</div>
                        <div className="font-title-md text-[17px] text-on-surface glow-text">{agent.ai}</div>
                      </div>
                      <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                        {agent.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(212,175,55,0.15)] max-w-4xl mx-auto">
                  <p className="font-title-md text-on-surface text-base md:text-lg leading-relaxed">
                    {dict.why_aethemar.deep_dive.mapping.conclusion}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
