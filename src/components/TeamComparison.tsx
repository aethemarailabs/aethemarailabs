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
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-center w-full mt-4">
      {/* Traditional Structure */}
      <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-center relative overflow-hidden border-t-red-500/20 group">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-50"></div>
        <h3 className="font-title-md text-xl text-on-surface/80 mb-8 z-10 text-center">{traditional.title}</h3>

        {/* Structure */}
        <div className="flex flex-col items-center gap-4 z-10 w-full max-w-sm flex-1">
          <div className="w-full bg-surface-variant/50 border border-on-surface/10 rounded-lg p-4 text-center text-on-surface">
            {traditional.director}
          </div>
          <div className="w-px h-6 bg-red-500/30"></div>
          <div className="w-full bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center text-red-200 font-medium">
            {traditional.leader}
          </div>
          <div className="w-px h-6 bg-red-500/30"></div>
          <div className="w-full grid grid-cols-1 gap-2">
            {traditional.members.map((member, i) => (
              <div key={i} className="bg-surface-variant/30 border border-on-surface/5 rounded-lg p-3 text-center text-sm text-on-surface-variant">
                {member}
              </div>
            ))}
          </div>
        </div>

        {/* Pain points tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 z-10 w-full">
          {traditional.pain_points.map((point, i) => (
            <span key={i} className="text-xs font-body-sm px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300">
              {point}
            </span>
          ))}
        </div>
      </div>

      {/* VS Divider for desktop */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant font-title-md z-10 glow-box">
          VS
        </div>
      </div>

      {/* Aethemar Structure */}
      <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-center relative overflow-hidden border-t-primary/50 glow-box group">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h3 className="font-title-md text-xl text-primary mb-8 z-10 glow-text text-center">{aethemar.title}</h3>

        {/* Structure */}
        <div className="flex flex-col items-center gap-4 z-10 w-full max-w-sm flex-1">
          <div className="w-full bg-surface-variant/50 border border-on-surface/10 rounded-lg p-4 text-center text-on-surface">
            {aethemar.director}
          </div>
          <div className="w-px h-6 bg-primary/50"></div>
          <div className="w-full bg-primary/20 border border-primary/40 rounded-lg p-4 text-center text-primary font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {aethemar.leader}
          </div>
          <div className="w-px h-6 bg-primary/50"></div>
          <div className="w-full grid grid-cols-1 gap-2">
            {aethemar.members.map((member, i) => (
              <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center text-sm text-primary/90 font-medium">
                <span className="material-symbols-outlined text-[14px] align-middle mr-1">smart_toy</span>
                {member}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 z-10 w-full">
          {aethemar.benefits.map((benefit, i) => (
            <span key={i} className="text-xs font-body-sm px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary glow-text">
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
