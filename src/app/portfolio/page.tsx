import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <section id="portfolio" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">The Aether Network</h2>
          <p className="font-body-lg text-on-surface-variant">Connect with our constellation of insights.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <Link href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="material-symbols-outlined text-3xl text-on-surface group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>smart_display</span>
            </div>
            <div className="text-center">
              <p className="font-label-caps text-on-surface">YouTube</p>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethemarailabs</p>
            </div>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="material-symbols-outlined text-3xl text-on-surface group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
            </div>
            <div className="text-center">
              <p className="font-label-caps text-on-surface">Instagram</p>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethernarailabs</p>
            </div>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="material-symbols-outlined text-3xl text-on-surface group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>forum</span>
            </div>
            <div className="text-center">
              <p className="font-label-caps text-on-surface">Threads</p>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">@aethernarailabs</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
