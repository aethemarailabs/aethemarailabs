type TeamSide = {
  title: string;
  director: string;
  leader: string;
  members: string[];
};

type TeamComparisonProps = {
  traditional: TeamSide & { pain_points: string[] };
  aethemar: TeamSide & { benefits: string[] };
};

/**
 * "기존 구조 VS Aethemar 구조" 비교 다이어그램.
 * Why Aethemar(브랜드 전체)와 Services > Marketing(인하우스 비교)에서 공통으로 사용합니다.
 */
export default function TeamComparison({ traditional, aethemar }: TeamComparisonProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-stretch justify-center w-full mt-2 md:mt-4">
      {/* Traditional Structure */}
      <div className="flex-1 glass-panel rounded-2xl p-5 md:p-8 flex flex-col items-center relative overflow-hidden border-t-red-500/20 group">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-50"></div>
        <h3 className="font-title-md text-base md:text-xl text-on-surface/80 mb-5 md:mb-8 z-10 text-center break-keep">{traditional.title}</h3>

        {/* Structure */}
        <div className="flex flex-col items-center gap-2.5 md:gap-4 z-10 w-full max-w-sm flex-1">
          <div className="w-full bg-surface-variant/50 border border-on-surface/10 rounded-lg p-3 md:p-4 text-center text-xs md:text-sm text-on-surface">
            {traditional.director}
          </div>
          <div className="w-px h-4 md:h-6 bg-red-500/30"></div>
          <div className="w-full bg-red-500/10 border border-red-500/20 rounded-lg p-3 md:p-4 text-center text-xs md:text-sm text-red-200 font-medium">
            {traditional.leader}
          </div>
          <div className="w-px h-4 md:h-6 bg-red-500/30"></div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-2">
            {traditional.members.map((member, i) => (
              <div key={i} className="bg-surface-variant/30 border border-on-surface/5 rounded-lg p-2.5 md:p-3 text-center text-xs md:text-sm text-on-surface-variant">
                {member}
              </div>
            ))}
          </div>
        </div>

        {/* Pain points tags */}
        <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-1.5 md:gap-2 z-10 w-full">
          {traditional.pain_points.map((point, i) => (
            <span key={i} className="text-[11px] md:text-xs font-body-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300">
              {point}
            </span>
          ))}
        </div>
      </div>

      {/* VS Divider */}
      <div className="flex items-center justify-center -my-1 lg:my-0">
        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant font-title-md text-xs md:text-base z-10 glow-box">
          VS
        </div>
      </div>

      {/* Aethemar Structure */}
      <div className="flex-1 glass-panel rounded-2xl p-5 md:p-8 flex flex-col items-center relative overflow-hidden border-t-primary/50 glow-box group">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h3 className="font-title-md text-base md:text-xl text-primary mb-5 md:mb-8 z-10 glow-text text-center break-keep">{aethemar.title}</h3>

        {/* Structure */}
        <div className="flex flex-col items-center gap-2.5 md:gap-4 z-10 w-full max-w-sm flex-1">
          <div className="w-full bg-surface-variant/50 border border-on-surface/10 rounded-lg p-3 md:p-4 text-center text-xs md:text-sm text-on-surface">
            {aethemar.director}
          </div>
          <div className="w-px h-4 md:h-6 bg-primary/50"></div>
          <div className="w-full bg-primary/20 border border-primary/40 rounded-lg p-3 md:p-4 text-center text-xs md:text-sm text-primary font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {aethemar.leader}
          </div>
          <div className="w-px h-4 md:h-6 bg-primary/50"></div>
          <div className="w-full grid grid-cols-1 gap-2">
            {aethemar.members.map((member, i) => (
              <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-2.5 md:p-3 text-center text-xs md:text-sm text-primary/90 font-medium">
                <span className="material-symbols-outlined text-[13px] md:text-[14px] align-middle mr-1">smart_toy</span>
                {member}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits tags */}
        <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-1.5 md:gap-2 z-10 w-full">
          {aethemar.benefits.map((benefit, i) => (
            <span key={i} className="text-[11px] md:text-xs font-body-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary glow-text">
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
