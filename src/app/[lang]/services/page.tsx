import { getDictionary } from '@/dictionaries';

export default async function ServicesPage({ params }: { params: { lang: 'en' | 'ko' } }) {
  const dict = await getDictionary(params.lang);

  return (
    <section id="services" className="py-24 px-margin-mobile md:px-margin-desktop min-h-[70vh] flex items-center">
      <div className="max-w-container-max mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{dict.services.title}</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">{dict.services.subtitle}</p>
        </div>
        
        {/* Horizontal scroll wrapper for mobile, Grid for desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 scrollbar-hide">
          
          {/* Service Card 1 */}
          <div className="flex-none w-[85vw] md:w-auto snap-center glass-panel rounded-xl p-8 md:p-12 glow-box group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>campaign</span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-8 bg-surface-container shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
              </div>
              <h3 className="font-title-md text-title-md mb-4 text-on-surface">{dict.services.card1_title}</h3>
              <p className="font-body-sm text-on-surface-variant mb-8 line-clamp-3">
                {dict.services.card1_desc}
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                {dict.services.card1_items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="flex-none w-[85vw] md:w-auto snap-center glass-panel rounded-xl p-8 md:p-12 glow-box group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>terminal</span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-8 bg-surface-container shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
              </div>
              <h3 className="font-title-md text-title-md mb-4 text-on-surface">{dict.services.card2_title}</h3>
              <p className="font-body-sm text-on-surface-variant mb-8 line-clamp-3">
                {dict.services.card2_desc}
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                {dict.services.card2_items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="flex-none w-[85vw] md:w-auto snap-center glass-panel rounded-xl p-8 md:p-12 glow-box group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>movie</span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-8 bg-surface-container shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>video_camera_front</span>
              </div>
              <h3 className="font-title-md text-title-md mb-4 text-on-surface">{dict.services.card3_title}</h3>
              <p className="font-body-sm text-on-surface-variant mb-8 line-clamp-3">
                {dict.services.card3_desc}
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                {dict.services.card3_items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
