export default function CeoPage() {
  return (
    <section id="ceo" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative min-h-[70vh] flex items-center">
      <div className="grid md:grid-cols-12 gap-gutter items-center w-full">
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel glow-box p-2">
            <div className="w-full h-full rounded-lg bg-surface-container-high relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/ceo_profile.jpg')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
        </div>
        <div className="md:col-span-7 space-y-8 md:pl-12">
          <div>
            <div className="font-label-caps text-primary tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> Leadership
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Lee Heekyung</h2>
            <p className="font-body-lg text-primary opacity-80">CEO &amp; CMO, Aethemar AI Labs</p>
          </div>
          <div className="space-y-6 font-body-sm text-on-surface-variant text-lg">
            <p>Bridging the analytical rigor of artificial intelligence with the creative intuition of high-end marketing. With a distinguished career as an in-house marketing director for leading hospitals and premier law firms, Lee Heekyung brings unparalleled expertise in navigating complex, trust-based industries.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-primary/5">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>domain</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-1 font-title-md text-title-md">Corporate Mastery</h4>
                  <p className="text-sm">Strategic growth for medical and legal sectors.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>mic</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-1 font-title-md text-title-md">Media Presence</h4>
                  <p className="text-sm">Recognized authority with multiple broadcast appearances.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
