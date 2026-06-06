import Image from 'next/image';

export default function Home() {
  return (
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
          <div className="glass-panel w-full max-w-3xl text-left px-8 py-10 md:px-12 md:py-12 rounded-2xl glow-box space-y-6 relative overflow-hidden mt-8 transition-transform hover:-translate-y-1 duration-500">
            <div className="absolute -top-10 -right-10 text-primary/5 text-9xl font-display-lg pointer-events-none" aria-hidden="true">A</div>
            <div className="relative z-10 border-b border-primary/20 pb-6">
              <h2 className="font-title-md text-xl md:text-2xl text-primary mb-2 tracking-widest uppercase">The Fifth Element</h2>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                <span className="text-primary font-medium">Aether</span> (빛을 전달하는 매질) + <span className="text-primary font-medium">Marketing</span> = <span className="text-on-background font-bold tracking-widest uppercase ml-2">Aethemar</span>
              </p>
            </div>
            <div className="relative z-10 space-y-4 font-body-sm text-on-surface/80 text-base leading-relaxed">
              <p>
                고대 철학에서 <strong>에테르(Aether)</strong>는 우주 공간을 채우고 빛을 전달하는 절대적인 매개체이자 제5의 원소로 여겨졌습니다. 현대 과학이 우주의 질서와 중력을 설명하기 위해 눈에 보이지 않는 에너지를 상정하듯, 에테르란 만물을 연결하고 에너지를 전달하는 필수적인 매질입니다.
              </p>
              <p>
                <strong>Aethemar(에테마르)</strong>는 이 거대한 개념에서 출발합니다. 우리는 단순한 에이전시를 넘어, 당신의 브랜드가 가진 고유한 빛과 잠재력이 세상 모든 곳으로 뻗어나갈 수 있도록 돕는 <strong>'보이지 않는 가장 강력한 매질'</strong>이 되고자 합니다. AI 기술이라는 현대의 에테르를 통해 한계 없는 연결과 성장을 창조합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
