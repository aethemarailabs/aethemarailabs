import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-16 md:p-32 opacity-5 blur-2xl md:blur-3xl mix-blend-screen pointer-events-none overflow-hidden">
        <span className="material-symbols-outlined text-[200px] md:text-[300px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn direction="up" delay={0.1}>
          <Link href={`/${lang}/#services`} className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 font-label-caps tracking-widest text-sm">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Services
          </Link>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container shadow-[0_0_30px_rgba(212,175,55,0.15)] flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{team.icon}</span>
            </div>
            <h1 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-primary glow-text tracking-wider">{team.title}</h1>
          </div>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            {team.desc}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Team Structure */}
          <FadeIn direction="right" delay={0.3}>
            <h2 className="font-title-lg text-2xl text-on-surface mb-6 border-b border-primary/20 pb-4">Team Architecture</h2>
            <div className="glass-panel p-6 md:p-8 rounded-2xl glow-box flex flex-col gap-6">
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <div className="text-[10px] font-label-caps text-primary/80 mb-2 tracking-widest">CONTROL TOWER</div>
                <div className="font-title-md text-lg md:text-xl text-primary">{team.director}</div>
              </div>
              
              <div className="flex justify-center -my-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-surface-container border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <span className="material-symbols-outlined text-primary text-lg">sync_alt</span>
                </div>
              </div>

              <div className="bg-surface-variant/30 border border-on-surface/10 rounded-xl p-6">
                <div className="text-[10px] font-label-caps text-on-surface-variant mb-4 tracking-widest text-center">AI AGENTS</div>
                <div className="grid gap-3">
                  {team.members.map((member: string, i: number) => (
                    <div key={i} className="bg-surface-container border border-primary/20 rounded-lg p-4 text-center text-on-surface font-medium flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined text-primary/80 text-[18px]">smart_toy</span>
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Core Capabilities */}
          <FadeIn direction="left" delay={0.4}>
            <h2 className="font-title-lg text-2xl text-on-surface mb-6 border-b border-primary/20 pb-4">Core Capabilities</h2>
            <div className="glass-panel p-6 md:p-8 rounded-2xl h-full">
              <ul className="space-y-6">
                {team.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-lg text-on-surface">{item}</h4>
                      <p className="font-body-sm text-on-surface-variant/70 mt-2 text-sm leading-relaxed">
                        최고의 전문성을 가진 AI 에이전트들이 해당 역량을 바탕으로 압도적인 결과물을 생성합니다.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
        
        {/* Contact CTA */}
        <FadeIn direction="up" delay={0.5}>
          <div className="glass-panel rounded-2xl p-8 md:p-16 text-center glow-box relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-on-surface leading-snug">
                Ready to collaborate with <br className="md:hidden" />
                <span className="text-primary glow-text">{team.title}</span>?
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">
                이 강력한 AI 팀을 프로젝트에 투입할 준비가 되셨나요?<br className="hidden md:block"/>지금 바로 연락 주시면 비즈니스 성장을 위한 구체적인 전략을 제안해 드립니다.
              </p>
              <div className="pt-4">
                <Link href={`/${lang}/#contact`} className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-label-caps tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  Initiate Contact <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
