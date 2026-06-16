import { getDictionary } from '@/dictionaries';
import CeoResumeClient from '@/components/CeoResumeClient';
import FadeIn from '@/components/animations/FadeIn';

export default async function CeoPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <section id="ceo" className="pt-24 pb-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center w-full">
        <div className="md:col-span-5 relative max-w-sm mx-auto md:max-w-none">
          <FadeIn direction="right" delay={0.1}>
            <div className="rounded-xl overflow-hidden glass-panel glow-box p-2">
              <div className="w-full rounded-lg bg-surface-container-high relative overflow-hidden group">
                <img 
                  src="/ceo_profile_silhouette.png" 
                  alt="CEO Lee Heekyung" 
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity block" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
          </FadeIn>
        </div>
        <div className="md:col-span-7 space-y-8 md:pl-12">
          <FadeIn direction="left" delay={0.2}>
            <div>
              <div className="font-label-caps text-primary tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span> {dict.ceo.leadership}
              </div>
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl mb-2 leading-tight tracking-tight">{dict.ceo.name}</h2>
              <p className="font-body-lg text-primary opacity-80">{dict.ceo.role}</p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.3}>
            <div className="space-y-6 font-body-sm text-on-surface-variant text-base md:text-lg">
              <p className="font-body-lg text-primary/90">{dict.ceo.desc}</p>
              
              {dict.ceo.short_intro && (
                <ul className="space-y-3 font-body-sm text-on-surface-variant text-sm md:text-base mt-4">
                  {dict.ceo.short_intro.map((intro: string, idx: number) => (
                    <li key={idx} className="flex gap-3">
                      <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check</span>
                      <span className="leading-relaxed">{intro}</span>
                    </li>
                  ))}
                </ul>
              )}

              {dict.ceo.skills && (
                <div className="pt-6">
                  <h4 className="font-label-caps text-primary tracking-widest uppercase mb-4 text-sm font-semibold">My Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {dict.ceo.skills.map((skill: string, idx: number) => (
                      <span key={idx} className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-on-surface hover:border-primary/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-primary/5">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>domain</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 font-title-md text-title-md">{dict.ceo.mastery_title}</h4>
                    <p className="text-sm">{dict.ceo.mastery_desc}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>mic</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 font-title-md text-title-md">{dict.ceo.media_title}</h4>
                    <p className="text-sm">{dict.ceo.media_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      </section>

      <section id="resume" className="pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <FadeIn direction="up" delay={0.4}>
          <CeoResumeClient dict={dict.ceo} />
        </FadeIn>
      </section>
    </>
  );
}
