export default function ServicesPage() {
  return (
    <section id="services" className="py-24 px-margin-mobile md:px-margin-desktop min-h-[70vh] flex items-center">
      <div className="max-w-container-max mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">제공하는 서비스</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">정교한 엔지니어링과 무한한 크리에이티브의 결합. 압도적인 디지털 생태계를 설계합니다.</p>
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
                초고도화된 전환을 위한 데이터 기반 마케팅 아키텍처. 우리는 단순한 캠페인이 아닌, 자생력 있는 브랜드 권위의 생태계를 구축합니다.
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> AI 최적화 마케팅 전략</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> 하이엔드 타겟 리드 창출</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> 프리미엄 브랜드 포지셔닝</li>
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
                비즈니스 확장에 최적화된 맞춤형 웹 및 앱 개발. 기업의 기술적 중추 역할을 할 완벽한 디지털 프로덕트를 엔지니어링합니다.
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> 네이티브 앱 아키텍처</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> 전사적 웹 플랫폼 및 포털 구축</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> AI 통합 및 비즈니스 자동화</li>
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
              <h3 className="font-title-md text-title-md mb-4 text-on-surface">AI Commercials</h3>
              <p className="font-body-sm text-on-surface-variant mb-8 line-clamp-3">
                최첨단 생성형 AI 모델을 활용하여 물리적 한계를 초월한 하이엔드 브랜드 커머셜 영상을 제작합니다.
              </p>
              <ul className="space-y-3 font-body-sm text-sm text-on-surface/80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> AI 기반 영상 생성</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> 시각 특수효과 및 컴포지팅</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span> 시네마틱 스토리텔링</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
