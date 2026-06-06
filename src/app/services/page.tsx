export default function ServicesPage() {
  return (
    <section id="services" className="py-24 px-margin-mobile md:px-margin-desktop min-h-[70vh] flex items-center">
      <div className="max-w-container-max mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Our Capabilities</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Precision engineering meets limitless creativity. We architect digital dominance.</p>
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
              <h3 className="font-title-md text-title-md mb-4 text-on-surface">Marketing Agency</h3>
              <p className="font-body-sm text-on-surface-variant mb-8 line-clamp-3">
                Data-driven marketing architectures designed for elite conversion. We don't just run campaigns; we build self-sustaining ecosystems of brand authority.
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> AI-Optimized Strategy</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> High-Ticket Lead Generation</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> Brand Positioning</li>
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
              <h3 className="font-title-md text-title-md mb-4 text-on-surface">SW Development</h3>
              <p className="font-body-sm text-on-surface-variant mb-8 line-clamp-3">
                Bespoke application and web development tailored for scale. We engineer digital products that serve as the technological backbone of your enterprise.
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> Native App Architecture</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> Web Platforms &amp; Portals</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> AI Integration &amp; Automation</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
