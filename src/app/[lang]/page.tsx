import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';
import TeamComparison from '@/components/TeamComparison';

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
          <TeamComparison
            traditional={dict.why_aethemar.traditional_team}
            aethemar={dict.why_aethemar.aethemar_team}
          />
        </FadeIn>

        {/* Three Teams Overview */}
        <FadeIn direction="up" delay={0.4}>
          <div className="w-full mt-24 flex flex-col gap-12">
            <div className="text-center space-y-4">
              <span className="inline-block px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-label-caps tracking-widest bg-primary/5">
                {dict.why_aethemar.teams_section.badge}
              </span>
              <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface">
                {dict.why_aethemar.teams_section.title}
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                {dict.why_aethemar.teams_section.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {dict.services.teams.map((team: any) => (
                <Link key={team.id} href={`/${lang}/services/${team.id}`} className="block h-full outline-none">
                  <div className="glass-panel rounded-2xl p-6 md:p-8 h-full flex flex-col gap-5 border-t border-t-primary/30 glow-box group hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container shadow-[0_0_15px_rgba(212,175,55,0.15)] flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-title-md text-lg text-on-surface">{team.title}</h3>
                        <div className="text-[11px] font-label-caps text-primary/80 tracking-widest mt-1">{team.director}</div>
                      </div>
                    </div>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed flex-1">{team.desc}</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      {dict.why_aethemar.teams_section.cta}
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Industry Focus */}
        <FadeIn direction="up" delay={0.4}>
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-primary/20 relative overflow-hidden glow-box mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1 space-y-4">
                <span className="inline-block px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-label-caps tracking-widest bg-primary/5">
                  {dict.why_aethemar.industry.badge}
                </span>
                <h2 className="font-display-lg text-2xl md:text-3xl text-on-surface">
                  {dict.why_aethemar.industry.title}
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {dict.why_aethemar.industry.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {dict.why_aethemar.industry.tags.map((tag: string, i: number) => (
                    <span key={i} className="text-xs font-body-sm px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/${lang}/services/marketing`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-sm font-label-caps tracking-widest text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex-shrink-0"
              >
                {dict.why_aethemar.industry.cta}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
