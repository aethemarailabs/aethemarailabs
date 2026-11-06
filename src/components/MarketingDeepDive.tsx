/**
 * 병의원·로펌 인하우스 마케팅 팀 구조 + AI 매핑 전략 (Deep Dive).
 * 기존 Why Aethemar 페이지에서 Services > Marketing 상세 페이지로 이동된 섹션입니다.
 */
export default function MarketingDeepDive({ deepDive }: { deepDive: any }) {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12">
      <div className="text-center space-y-2.5 md:space-y-4">
        <span className="inline-block px-3 py-1 md:py-1.5 rounded-full border border-primary/30 text-primary text-[11px] md:text-xs font-label-caps tracking-widest bg-primary/5">
          {deepDive.badge}
        </span>
        <h2 className="font-display-lg text-xl sm:text-2xl md:text-4xl text-on-surface break-keep">
          {deepDive.title}
        </h2>
        <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed break-keep">
          {deepDive.subtitle}
        </p>
      </div>

      {/* In-house Structures (2-column) */}
      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        {Object.entries(deepDive.structures).map(([key, structure]: [string, any]) => (
          <div key={key} className="glass-panel p-5 md:p-8 rounded-2xl border border-on-surface/5 flex flex-col gap-4 md:gap-6 relative overflow-hidden group hover:border-primary/20 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
              <span className="material-symbols-outlined text-6xl md:text-8xl">{key === 'hospital' ? 'local_hospital' : 'gavel'}</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-title-md text-base md:text-xl text-on-surface mb-1.5 md:mb-2 flex items-center gap-2 break-keep">
                <span className="material-symbols-outlined text-primary text-lg md:text-2xl">{key === 'hospital' ? 'health_and_safety' : 'balance'}</span>
                {structure.title}
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs md:text-sm leading-relaxed break-keep">{structure.desc}</p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 relative z-10">
              {structure.roles.map((role: any, rIdx: number) => (
                <div key={rIdx} className="bg-surface/50 border border-on-surface/5 rounded-xl p-3.5 md:p-5 hover:bg-surface transition-colors">
                  <div className="font-title-md text-xs md:text-sm text-on-surface mb-2 md:mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    {role.name}
                  </div>
                  <ul className="space-y-1.5 md:space-y-2">
                    {role.tasks.map((task: string, tIdx: number) => (
                      <li key={tIdx} className="font-body-sm text-xs md:text-[13px] text-on-surface/70 flex items-start gap-2 break-keep">
                        <span className="text-primary/50 mt-0.5 text-xs">└</span>
                        <span className="flex-1 leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI Mapping Strategy */}
      <div className="glass-panel p-5 sm:p-6 md:p-12 rounded-2xl md:rounded-3xl border border-primary/20 relative overflow-hidden glow-box mt-4 md:mt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>

        <div className="relative z-10 text-center mb-6 md:mb-12">
          <h3 className="font-display-lg text-lg sm:text-xl md:text-3xl text-primary glow-text mb-2 md:mb-4 break-keep">
            {deepDive.mapping.title}
          </h3>
          <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed break-keep">
            {deepDive.mapping.subtitle}
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-12">
          {deepDive.mapping.agents.map((agent: any, idx: number) => (
            <div key={idx} className="bg-surface/80 border border-primary/10 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 shadow-lg">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <span className="material-symbols-outlined text-primary text-xl md:text-[28px]">
                  {idx === 0 ? 'psychology' : idx === 1 ? 'edit_document' : idx === 2 ? 'trending_up' : 'movie'}
                </span>
              </div>
              <div>
                <div className="font-label-caps text-[10px] md:text-[11px] text-primary/70 tracking-wider mb-1">{agent.name}</div>
                <div className="font-title-md text-sm sm:text-base md:text-[17px] text-on-surface glow-text">{agent.ai}</div>
              </div>
              <p className="font-body-sm text-xs md:text-[13px] text-on-surface-variant leading-relaxed break-keep">
                {agent.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="relative z-10 bg-primary/10 border border-primary/30 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-8 text-center shadow-[0_0_30px_rgba(212,175,55,0.15)] max-w-4xl mx-auto">
          <p className="font-title-md text-on-surface text-xs sm:text-sm md:text-lg leading-relaxed break-keep">
            {deepDive.mapping.conclusion}
          </p>
        </div>
      </div>
    </div>
  );
}
