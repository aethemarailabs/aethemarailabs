export default function ContactPage() {
  return (
    <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-2xl glow-box relative overflow-hidden w-full">
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
  );
}
