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
      </div>
    </section>
  );
}
