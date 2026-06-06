export default function CeoPage() {
  return (
    <section id="ceo" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative min-h-[70vh] flex items-center">
      <div className="grid md:grid-cols-12 gap-gutter items-center w-full">
        <div className="md:col-span-5 relative">
          <div className="rounded-xl overflow-hidden glass-panel glow-box p-2">
            <div className="w-full rounded-lg bg-surface-container-high relative overflow-hidden group">
              <img 
                src="/ceo_profile.png" 
                alt="CEO Lee Heekyung" 
                className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity block" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
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
            <p>인공지능의 분석적 정교함과 하이엔드 마케팅의 크리에이티브한 직관을 연결합니다. 대형 병원 및 로펌의 인하우스 마케팅 총괄(CMO)로서 쌓아온 독보적인 커리어를 바탕으로, 고도의 신뢰가 요구되는 전문 산업 분야에서 타의 추종을 불허하는 전문성을 제공합니다.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-primary/5">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>domain</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-1 font-title-md text-title-md">전문 산업 특화</h4>
                  <p className="text-sm">의료 및 법률 등 고관여 산업군의 전략적 성장 리드.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>mic</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-1 font-title-md text-title-md">미디어 권위</h4>
                  <p className="text-sm">다수의 방송 출연을 통해 입증된 대중적 신뢰와 전문성.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
