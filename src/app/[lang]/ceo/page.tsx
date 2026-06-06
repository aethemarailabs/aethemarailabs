import { getDictionary } from '@/dictionaries';

export default async function CeoPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="ceo" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative min-h-[70vh] flex items-center">
      <div className="grid md:grid-cols-12 gap-gutter items-center w-full">
        <div className="md:col-span-5 relative">
          <div className="rounded-xl overflow-hidden glass-panel glow-box p-2">
            <div className="w-full rounded-lg bg-surface-container-high relative overflow-hidden group">
              <img 
                src="/ceo_profile.png" 
                alt="CEO Lee Heekyung" 
                className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity block" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
        </div>
        <div className="md:col-span-7 space-y-8 md:pl-12">
          <div>
            <div className="font-label-caps text-primary tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> {dict.ceo.leadership}
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">{dict.ceo.name}</h2>
            <p className="font-body-lg text-primary opacity-80">{dict.ceo.role}</p>
          </div>
          <div className="space-y-6 font-body-sm text-on-surface-variant text-lg">
            <p>{dict.ceo.desc}</p>
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
        </div>
      </div>

      {/* Resume Section */}
      <div className="w-full mt-32">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="font-title-md text-2xl text-primary mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
              {dict.ceo.experience_title}
            </h3>
            <div className="border-l border-primary/20 pl-8 space-y-12 ml-2">
              {dict.ceo.experience.map((item: any, idx: number) => (
                <div key={idx} className="relative group">
                  <div className="absolute w-3 h-3 bg-surface border-2 border-primary rounded-full -left-[38px] top-1.5 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(212,175,55,0)] group-hover:shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                  <p className="font-label-caps text-sm text-primary/80 mb-2 tracking-widest uppercase">{item.period}</p>
                  <h4 className="font-title-md text-xl text-on-surface mb-1 flex flex-wrap items-baseline gap-x-3">
                    {item.company}
                    <span className="text-on-surface-variant font-body-sm text-sm whitespace-nowrap">| {item.role}</span>
                  </h4>
                  <p className="font-body-sm text-base text-on-surface-variant leading-relaxed mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities List */}
          <div>
            <h3 className="font-title-md text-2xl text-primary mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              {dict.ceo.activities_title}
            </h3>
            <div className="space-y-6">
              {dict.ceo.activities.map((item: any, idx: number) => (
                <div key={idx} className="glass-panel glow-box p-6 rounded-xl border border-primary/5 hover:border-primary/20 transition-all duration-300">
                  <h4 className="font-title-md text-lg text-on-surface mb-2">{item.title}</h4>
                  <p className="font-body-sm text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
