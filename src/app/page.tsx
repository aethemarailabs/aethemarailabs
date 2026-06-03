import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Global Background Texture */}
      <div className="fixed inset-0 z-[-1] pointer-events-none stardust-bg">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')` }}
        />
      </div>

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-primary/15 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        <div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="flex items-center gap-3">
            <div className="font-display-lg text-title-md tracking-tighter text-primary flex items-center gap-2">
              <Image 
                src="/logo/119409.png"
                alt="Aethemar Logo" 
                width={40} 
                height={40} 
                className="h-8 w-auto object-contain" 
                unoptimized
              />
              <span className="" style={{ opacity: 0 }}>aethemar ai labs</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center font-label-caps text-label-caps uppercase tracking-widest">
            <Link href="#philosophy" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Philosophy</Link>
            <Link href="#ceo" className="text-on-surface-variant hover:text-primary transition-colors duration-300">CEO</Link>
            <Link href="#services" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Services</Link>
            <Link href="#portfolio" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Portfolio</Link>
            <Link href="#contact" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Contact</Link>
          </div>
          <Link href="#contact" className="hidden md:inline-flex bg-primary text-on-primary font-label-caps px-6 py-3 rounded-DEFAULT hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all active:scale-95 duration-200 uppercase tracking-widest">
            Get Started
          </Link>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section id="philosophy" className="relative min-h-[90vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Abstract constellation network in dark space" 
              className="w-full h-full object-cover opacity-30 mix-blend-screen" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe3FXqISdAopzi3kKDnYtsLWSNltjJapDaQ4k9KbD_odDmK7wlRF1OiuQurArV_06YwCtlkKOCeGkS_5p-XMruput0T0K5D0UfTykDQ1fHTxOWgA5KzMX-Or-33DTdSobDyb7nlx5RUAxxLnp8Z7ckLnhm72hysMVS5GW8ZwYuJdwmAMiqxGcv9IdTZJi_dg9DfbZMN2HTZe1vgxJTBx6QLUkG6UyNLb4lYA_1kY39n60kc426ffPucLqQiixmqfsejQABqVdRXIE"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-12">
            <Image 
              src="/logo/119406.png"
              alt="Aethemar Logo Glowing" 
              width={256} 
              height={256} 
              className="w-48 md:w-64 mix-blend-screen opacity-90"
              unoptimized 
            />
            <div className="space-y-6">
              <h1 className="font-display-lg text-display-lg text-primary glow-text uppercase tracking-wider">
                Imagine Anything.<br />
                <span className="text-on-background">Create Everything.</span>
              </h1>
              <div className="glass-panel inline-block px-8 py-4 rounded-full glow-box">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  <span className="text-primary font-medium">Aether</span> (The fifth element, boundless space) + <span className="text-primary font-medium">Marketing</span> = <span className="text-on-background font-bold tracking-widest uppercase ml-2">Aethemar</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section id="ceo" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
          <div className="grid md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel glow-box p-2">
                <div className="w-full h-full rounded-lg bg-surface-container-high relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 mix-blend-luminosity"></div>
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

        {/* Services Section */}
        <section id="services" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low/50 border-y border-primary/5">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Our Capabilities</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Precision engineering meets limitless creativity. We architect digital dominance.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div className="glass-panel rounded-xl p-8 md:p-12 glow-box group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden">
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
              <div className="glass-panel rounded-xl p-8 md:p-12 glow-box group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden">
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

        {/* Connect / Social Portfolio Section */}
        <section id="portfolio" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
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

        {/* Contact Section */}
        <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-primary/5">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-2xl glow-box relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhlWA0eNvNYRJN9TE06znfqoqzVCA-mqgtRqE812AuUL-gLQx7r82uTTOzDqdF39KVK8CVTvnvCD-W036I9Zo9xBwwFQRCsy3VjCnUOJWnJAAO4D3TbN_u-PQgvu6-gcahxeM8jQazP9I9Aj9LQUncGDqQuStaRAb-dmo-A64uIiDT7IM0tYOr696WkFHWDahFzMMiQxcvHySj7WwOI1LTCaWMry2TYov5GZeJw-ERfLzFnnASQ1F5U5JE39FPLtHeRYbldhZ8am0')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-primary">Initiate Contact</h2>
                  <p className="font-body-sm text-on-surface-variant">Ready to elevate your operational reality? Reach out to our secure channel.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-primary/10">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    </div>
                    <div>
                      <p className="font-label-caps text-on-surface-variant mb-1">Phone</p>
                      <p className="font-body-sm text-on-surface">82-10-9932-9829</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-primary/10">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    </div>
                    <div>
                      <p className="font-label-caps text-on-surface-variant mb-1">Email</p>
                      <p className="font-body-sm text-on-surface">aethemarcmo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="font-label-caps text-sm text-on-surface-variant mb-2 block">Identity Code (Name)</label>
                  <input type="text" placeholder="Enter your name" className="w-full bg-surface/50 border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-3 text-on-surface font-body-sm transition-colors" />
                </div>
                <div>
                  <label className="font-label-caps text-sm text-on-surface-variant mb-2 block">Transmission Vector (Email)</label>
                  <input type="email" placeholder="Enter your email" className="w-full bg-surface/50 border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-3 text-on-surface font-body-sm transition-colors" />
                </div>
                <div>
                  <label className="font-label-caps text-sm text-on-surface-variant mb-2 block">Directive (Message)</label>
                  <textarea rows={4} placeholder="State your objective..." className="w-full bg-surface/50 border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-3 text-on-surface font-body-sm transition-colors resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-on-primary font-label-caps uppercase tracking-widest py-4 rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  Transmit <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>send</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-surface-container-lowest border-t border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop max-w-container-max mx-auto">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="font-display-lg text-title-md tracking-tighter text-primary flex items-center gap-2">
              <Image 
                src="/logo/119409.png"
                alt="Aethemar Logo" 
                width={40} 
                height={40} 
                className="h-8 w-auto mix-blend-screen opacity-90 object-contain" 
                unoptimized
              />
              <span className="tracking-tighter" style={{ opacity: 0 }}>aethemar ai labs</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80 mt-4">
              © 2026 AETHEMAR AI LABS. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap justify-end gap-6 md:gap-8 font-body-sm text-body-sm text-on-surface-variant">
            <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Terms of Service</Link>
            <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Cookie Settings</Link>
            <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">LinkedIn</Link>
            <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Global Offices</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
