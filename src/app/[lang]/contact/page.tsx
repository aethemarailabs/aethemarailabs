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
            
            <div className="flex flex-col items-center gap-6 bg-surface/30 p-8 rounded-xl border border-primary/20 w-full max-w-md hover:border-primary/50 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-primary/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-shadow duration-300">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div className="space-y-2">
                <p className="font-label-caps text-on-surface-variant text-sm tracking-widest">Email</p>
                <a href="mailto:aethemarcmo@gmail.com" className="font-title-md text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors inline-block">
                  aethemarcmo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
