import FadeIn from '@/components/animations/FadeIn';

export default function ContactPage() {
  return (
    <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop min-h-[70vh] flex items-center">
      <FadeIn direction="up" delay={0.1} className="w-full">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-2xl glow-box relative overflow-hidden w-full">
          <div className="relative z-10 flex flex-col items-center text-center space-y-12 py-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="font-headline-lg text-4xl md:text-5xl text-primary glow-text uppercase tracking-wider">Contact Us</h2>
              <p className="font-body-lg text-on-surface-variant">Ready to elevate your operational reality? Reach out to our secure channel.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {/* Email Block */}
              <div className="flex flex-col items-center gap-6 bg-surface/30 p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors duration-300 group">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-primary/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-shadow duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div className="space-y-2 text-center">
                  <p className="font-label-caps text-on-surface-variant text-sm tracking-widest">Email</p>
                  <a href="mailto:aethemarcmo@gmail.com" className="font-title-md text-lg sm:text-xl text-on-surface group-hover:text-primary transition-colors inline-block break-all">
                    aethemarcmo@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram Block */}
              <div className="flex flex-col items-center gap-6 bg-surface/30 p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors duration-300 group">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-primary/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-shadow duration-300">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity">
                    <defs>
                      <linearGradient id="ig-contact-grad" x1="20%" y1="100%" x2="80%" y2="0%">
                        <stop offset="0%" stopColor="#f09433"/>
                        <stop offset="25%" stopColor="#e6683c"/>
                        <stop offset="50%" stopColor="#dc2743"/>
                        <stop offset="75%" stopColor="#cc2366"/>
                        <stop offset="100%" stopColor="#bc1888"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#ig-contact-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div className="space-y-2 text-center">
                  <p className="font-label-caps text-on-surface-variant text-sm tracking-widest">Instagram DM</p>
                  <a href="https://www.instagram.com/hkee26" target="_blank" rel="noopener noreferrer" className="font-title-md text-lg sm:text-xl text-on-surface group-hover:text-primary transition-colors inline-block">
                    @hkee26
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
