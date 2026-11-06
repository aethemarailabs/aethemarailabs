import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PlatformBadge from '@/components/PlatformBadge';
import TeamComparison from '@/components/TeamComparison';
import MarketingDeepDive from '@/components/MarketingDeepDive';

export async function generateStaticParams() {
  const ids = ['marketing', 'development', 'production'];
  const langs = ['en', 'ko'];
  
  const params = [];
  for (const lang of langs) {
    for (const id of ids) {
      params.push({ lang, id });
    }
  }
  return params;
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ lang: 'en' | 'ko', id: string }> }) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang);
  
  const team = dict.services.teams.find((t: any) => t.id === id);
  if (!team) {
    notFound();
  }

  return (
    <div className="pt-8 pb-16 md:pt-24 md:pb-24 px-margin-mobile md:px-margin-desktop min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-16 md:p-32 opacity-5 blur-2xl md:blur-3xl mix-blend-screen pointer-events-none overflow-hidden">
        <span className="material-symbols-outlined text-[150px] md:text-[300px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn direction="up" delay={0.1}>
          <Link href={`/${lang}/services`} className="inline-flex items-center gap-1.5 md:gap-2 text-on-surface-variant hover:text-primary transition-colors mb-6 md:mb-12 font-label-caps tracking-widest text-xs md:text-sm">
            <span className="material-symbols-outlined text-xs md:text-sm">arrow_back</span>
            {lang === 'ko' ? '서비스 목록으로' : 'Back to Services'}
          </Link>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container shadow-[0_0_30px_rgba(212,175,55,0.15)] flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-2xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
            </div>
            <div>
              {id === 'development' && (
                <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-primary/50 text-primary text-[9px] md:text-[10px] font-label-caps tracking-widest bg-primary/20 shadow-[0_0_10px_rgba(212,175,55,0.2)] mb-1.5 md:mb-2">
                  MAIN SERVICE
                </span>
              )}
              <h1 className="font-display-lg text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary glow-text tracking-wider leading-tight">{team.title}</h1>
            </div>
          </div>
          <p className="font-body-lg text-xs sm:text-sm md:text-xl text-on-surface-variant max-w-3xl leading-relaxed break-keep">
            {team.desc}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
          {/* Team Structure */}
          <FadeIn direction="right" delay={0.3}>
            <div className="mb-4 md:mb-6 border-b border-primary/20 pb-3 md:pb-4">
              <h2 className="font-title-lg text-lg md:text-2xl text-on-surface mb-1 md:mb-2">Team Architecture</h2>
              <p className="font-body-sm text-on-surface-variant/80 text-xs md:text-sm break-keep">
                {lang === 'ko'
                  ? '전문가 컨트롤 타워 1인과 분야별 특화 AI 에이전트의 유기적 결합'
                  : 'Seamless synergy of a dedicated expert Control Tower and specialized AI Agents'}
              </p>
            </div>
            <div className="glass-panel p-5 md:p-8 rounded-2xl glow-box flex flex-col gap-4 md:gap-6">
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 md:p-6 text-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <div className="text-[9px] md:text-[10px] font-label-caps text-primary/80 mb-1 md:mb-2 tracking-widest">CONTROL TOWER</div>
                <div className="font-title-md text-sm sm:text-base md:text-xl text-primary">{team.director}</div>
              </div>
              
              <div className="flex justify-center -my-2 md:-my-3 relative z-10">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <span className="material-symbols-outlined text-primary text-base md:text-lg">sync_alt</span>
                </div>
              </div>

              <div className="bg-surface-variant/30 border border-on-surface/10 rounded-xl p-4 md:p-6">
                <div className="text-[9px] md:text-[10px] font-label-caps text-on-surface-variant mb-3 md:mb-4 tracking-widest text-center">AI AGENTS</div>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:gap-3">
                  {team.members.map((member: string, i: number) => (
                    <div key={i} className="bg-surface-container border border-primary/20 rounded-lg p-2.5 md:p-4 text-center text-xs md:text-base text-on-surface font-medium flex items-center justify-center gap-1.5 md:gap-3">
                      <span className="material-symbols-outlined text-primary/80 text-[15px] md:text-[18px]">smart_toy</span>
                      <span className="truncate">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Core Capabilities */}
          <FadeIn direction="left" delay={0.4}>
            <h2 className="font-title-lg text-lg md:text-2xl text-on-surface mb-4 md:mb-6 border-b border-primary/20 pb-3 md:pb-4">Core Capabilities</h2>
            <div className="glass-panel p-5 md:p-8 rounded-2xl h-full">
              <ul className="space-y-4 md:space-y-6">
                {team.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-sm sm:text-base md:text-lg text-on-surface break-keep">{item}</h4>
                      <p className="font-body-sm text-on-surface-variant/70 mt-1 md:mt-2 text-xs md:text-sm leading-relaxed break-keep">
                        {team.itemDescs?.[i] || (lang === 'ko'
                          ? '분야별 특화 AI 에이전트와 전문가 검수를 통해 빠르고 완성도 높은 결과물을 구현합니다.'
                          : 'Specialized AI Agents combined with expert review deliver fast, production-grade results.')}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Platforms (Conditional) */}
        {team.platforms && (
          <FadeIn direction="up" delay={0.45}>
            <div className="mb-10 md:mb-16">
              <h2 className="font-title-lg text-lg md:text-2xl text-on-surface mb-5 md:mb-8 text-center">Target Platforms</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-6 justify-center max-w-4xl mx-auto">
                {team.platforms.map((platform: any, idx: number) => (
                  <PlatformBadge key={idx} id={platform.id} name={platform.name} />
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Solutions / Trends (Conditional) */}
        {team.trends && (
          <FadeIn direction="up" delay={0.5}>
            <div className="mb-12 md:mb-24">
              <div className="text-center mb-6 md:mb-12">
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/30 text-primary text-[11px] md:text-sm font-label-caps tracking-widest bg-primary/5 mb-2.5 md:mb-4">
                  {team.trendsBadge || '2026 INSIGHTS'}
                </span>
                <h2 className="font-headline-lg text-xl sm:text-2xl md:text-4xl text-on-surface mb-2 md:mb-4 break-keep">
                  {team.trendsTitle || '2026 Marketing Trends & Strategies'}
                </h2>
                <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed break-keep">
                  {team.trendsSubtitle || '변화하는 생태계에서 비즈니스 성장을 이끄는 핵심 전략 라인업입니다.'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {team.trends.map((trend: any, idx: number) => (
                  <div key={idx} className="glass-panel p-4 sm:p-5 md:p-6 rounded-2xl border-t border-t-primary/30 glow-box group hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center gap-3 md:gap-4 mb-2.5 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-container border border-primary/20 flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.1)] group-hover:bg-primary/5 transition-colors flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{trend.icon}</span>
                      </div>
                      <h3 className="font-title-md text-sm sm:text-base md:text-lg text-on-surface flex-1 break-keep">{trend.title}</h3>
                    </div>
                    <p className="font-body-sm text-on-surface-variant text-xs md:text-sm leading-relaxed break-keep">
                      {trend.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Traditional Dev vs Aethemar (Development only) */}
        {id === 'development' && dict.development_inhouse && (
          <FadeIn direction="up" delay={0.5}>
            <div className="mb-12 md:mb-24 flex flex-col gap-6 md:gap-10">
              <div className="text-center space-y-2.5 md:space-y-4">
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/30 text-primary text-[11px] md:text-sm font-label-caps tracking-widest bg-primary/5">
                  {dict.development_inhouse.badge}
                </span>
                <h2 className="font-headline-lg text-xl sm:text-2xl md:text-4xl text-on-surface break-keep">{dict.development_inhouse.title}</h2>
                <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed break-keep">{dict.development_inhouse.subtitle}</p>
              </div>
              <TeamComparison
                traditional={dict.development_inhouse.traditional_team}
                aethemar={dict.development_inhouse.aethemar_team}
              />
            </div>
          </FadeIn>
        )}

        {/* In-house vs Aethemar + Deep Dive (Marketing only) */}
        {id === 'marketing' && dict.marketing_inhouse && (
          <>
            <FadeIn direction="up" delay={0.5}>
              <div className="mb-10 md:mb-16 flex flex-col gap-6 md:gap-10">
                <div className="text-center space-y-2.5 md:space-y-4">
                  <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/30 text-primary text-[11px] md:text-sm font-label-caps tracking-widest bg-primary/5">
                    {dict.marketing_inhouse.badge}
                  </span>
                  <h2 className="font-headline-lg text-xl sm:text-2xl md:text-4xl text-on-surface break-keep">{dict.marketing_inhouse.title}</h2>
                  <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed break-keep">{dict.marketing_inhouse.subtitle}</p>
                </div>
                <TeamComparison
                  traditional={dict.marketing_inhouse.traditional_team}
                  aethemar={dict.marketing_inhouse.aethemar_team}
                />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <div className="mb-12 md:mb-24">
                <MarketingDeepDive deepDive={dict.marketing_inhouse.deep_dive} />
              </div>
            </FadeIn>
          </>
        )}
        
        {/* Contact CTA */}
        <FadeIn direction="up" delay={0.6}>
          <div className="glass-panel rounded-2xl p-6 md:p-16 text-center glow-box relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
            <div className="relative z-10 space-y-4 md:space-y-6">
              <div className="inline-flex items-center justify-center p-3 md:p-4 rounded-full bg-surface-container border border-primary/20 mb-1 md:mb-2">
                <span className="material-symbols-outlined text-primary text-2xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl md:text-4xl text-on-surface">Ready to Transform Your Business?</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto text-xs sm:text-sm md:text-lg leading-relaxed break-keep">
                {lang === 'ko' ? (
                  <>수천만 원에 달하는 채용·외주 시행착오와 <span className="text-primary glow-text">막대한 고정비 부담</span>을 줄이고,<br className="hidden md:block"/>오직 비즈니스 성장과 결과에만 집중하는 전담 AI 팀을 만나보세요.</>
                ) : (
                  <>Eliminate costly hiring overhead and <span className="text-primary glow-text">fixed payroll risks</span>—<br className="hidden md:block"/>partner with a dedicated AI team focused purely on your business growth.</>
                )}
              </p>
              <div className="pt-2 md:pt-4">
                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 md:gap-3 bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-sm font-label-caps tracking-widest text-xs md:text-sm uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {lang === 'ko' ? '문의하기 (Contact)' : 'Initiate Contact'} <span className="material-symbols-outlined text-xs md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
