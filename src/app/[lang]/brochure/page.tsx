import { getDictionary } from '@/dictionaries';
import Image from 'next/image';

type WhyDetail = {
  title: string;
  label1: string;
  desc1: string;
  label2: string;
  desc2: string;
};

type TeamBlock = {
  title: string;
  director: string;
  leader: string;
  members: string[];
  pain_points?: string[];
  benefits?: string[];
};

type WhyAethemar = {
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  details: WhyDetail[];
  traditional_team: TeamBlock;
  aethemar_team: TeamBlock;
};

const stripLeadingNumber = (value: string) => value.replace(/^\d+\.\s*/, '');
const firstParagraph = (value: string) => value.split('\n\n')[0];
const lastParagraph = (value: string) => value.split('\n\n').at(-1) ?? value;

export default async function BrochurePage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const data = dict.why_aethemar as WhyAethemar;
  const services = dict.services;
  const ceo = dict.ceo as any;
  const marketingTeam = (services as any).teams.find((t: any) => t.id === 'marketing');
  const contactUrl = lang === 'en' ? 'aethemar.com/en' : 'aethemar.com/ko';

  return (
    <div className="min-h-screen bg-background text-on-background print:bg-background">
      <style dangerouslySetInnerHTML={{ __html: `
        body > nav,
        body > footer,
        body > div[style*="translateZ"],
        #mobile-bottom-nav,
        #top-nav-bar {
          display: none !important;
        }
        html, body, main {
          margin: 0 !important;
          padding: 0 !important;
          background: #161311 !important;
        }
        main { padding-top: 0 !important; }
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        @page { size: A4 portrait; margin: 0; }
        .leaflet-shell {
          min-height: 100vh;
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }
        .a4-leaflet {
          width: 210mm;
          height: 297mm;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at 18% 8%, rgba(242, 202, 80, 0.20), transparent 24%),
            radial-gradient(circle at 92% 38%, rgba(242, 202, 80, 0.12), transparent 26%),
            linear-gradient(145deg, #110d0c 0%, #161311 42%, #231f1d 100%);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.55);
        }
        .a4-leaflet::before {
          content: "";
          position: absolute;
          inset: 8mm;
          border: 1px solid rgba(242, 202, 80, 0.22);
          pointer-events: none;
          z-index: 2;
        }
        .a4-leaflet::after {
          content: "A";
          position: absolute;
          right: -9mm;
          bottom: -32mm;
          font-size: 118mm;
          line-height: 1;
          font-weight: 700;
          color: rgba(242, 202, 80, 0.035);
          letter-spacing: 0;
          z-index: 0;
        }
        .print-panel {
          background: rgba(36, 30, 28, 0.58);
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 0 30px rgba(212, 175, 55, 0.045), 0 8px 32px rgba(0, 0, 0, 0.26);
        }
        .gold-text {
          color: #f2ca50;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.30);
        }
        .hairline {
          background: linear-gradient(90deg, transparent, rgba(242, 202, 80, 0.72), transparent);
        }
        @media print {
          .leaflet-shell {
            min-height: 0;
            padding: 0;
            display: block;
            gap: 0;
          }
          .a4-leaflet {
            width: 210mm;
            height: 297mm;
            box-shadow: none;
            margin-bottom: 0;
            page-break-after: always;
            page-break-inside: avoid;
          }
          .a4-leaflet:last-child {
            page-break-after: auto;
          }
        }
      ` }} />

      <div className="leaflet-shell">
        <article className="a4-leaflet px-[12mm] py-[11mm] font-body-sm">
          <div className="relative z-10 flex h-full flex-col">
            <header className="flex items-start justify-between gap-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo_outline.png"
                  alt="Aethemar AI Labs"
                  width={400}
                  height={130}
                  unoptimized
                  priority
                  className="h-[18mm] w-auto object-contain mix-blend-screen drop-shadow-[0_0_12px_rgba(242,202,80,0.35)]"
                />
                <div className="h-[15mm] w-px bg-primary/35" />
                <div>
                  <p className="font-label-caps text-[8px] uppercase tracking-[0.32em] text-primary/80">Aethemar AI Labs</p>
                  <p className="mt-1 text-[10px] leading-tight text-on-surface-variant">AI Agent Marketing Outsourcing</p>
                </div>
              </div>
              <div className="rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-primary">
                {data.badge}
              </div>
            </header>

            <section className="mt-[6mm] grid grid-cols-[1.1fr_0.9fr] gap-[8mm]">
              <div>
                <p className="font-label-caps text-[9px] uppercase tracking-[0.32em] text-primary/80">
                  Premium AI Marketing Control Tower
                </p>
                <h1 className="mt-4 text-[30px] font-light leading-[1.12] tracking-normal text-on-surface">
                  {data.title1}
                  <br />
                  <span className="gold-text whitespace-nowrap font-medium">{data.title2}</span>
                </h1>
                <div className="mt-6 max-w-[130mm] rounded-xl border border-primary/25 bg-primary/10 p-[4mm] shadow-[0_0_24px_rgba(242,202,80,0.08)]">
                  <p className="gold-text text-[13px] font-semibold leading-snug">
                    대표님은 여러 대행사를 만날 필요도, 직원을 관리할 필요도 없습니다.
                  </p>
                  <p className="mt-2 text-[10px] leading-[1.6] text-on-surface-variant">
                    결과만 보고받는 완벽한 AI 마케팅 아웃소싱. 병원과 로펌 경영을 위한 가장 선명한 선택입니다.
                  </p>
                </div>
              </div>

              <div className="print-panel rounded-2xl border border-primary/20 p-[6mm]">
                <p className="font-label-caps text-[8px] uppercase tracking-[0.28em] text-primary/75">The Core Promise</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                    <p className="gold-text text-[24px] font-semibold leading-none">1/2</p>
                    <p className="mt-2 text-[9px] leading-snug text-on-surface-variant">마케팅 고정비 부담</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                    <p className="gold-text text-[24px] font-semibold leading-none">10x</p>
                    <p className="mt-2 text-[9px] leading-snug text-on-surface-variant">AI 기반 실행 속도</p>
                  </div>
                </div>
                <p className="mt-4 text-[10px] leading-[1.6] text-on-surface/86">
                  CEO & CMO가 단 하나의 컨트롤 타워가 되고, 분야별 AI 에이전트가 콘텐츠, 디자인, 영상, 퍼포먼스를 동시에 실행합니다.
                </p>
              </div>
            </section>

            <div className="hairline mt-[4mm] h-px w-full" />

            <section className="mt-[6mm] grid grid-cols-3 gap-[4mm]">
              {data.details.map((detail, idx) => (
                <div key={detail.title} className="print-panel rounded-2xl border border-primary/15 p-[5mm]">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="gold-text text-[18px] font-semibold leading-none">{`0${idx + 1}`}</span>
                    <h2 className="text-[12px] font-semibold leading-snug text-on-surface">
                      {stripLeadingNumber(detail.title)}
                    </h2>
                  </div>
                  <div className="rounded-xl border border-on-surface/10 bg-background/35 p-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-red-200/80">{detail.label1}</p>
                    <p className="mt-2 whitespace-pre-line text-[9px] leading-[1.45] text-on-surface-variant">
                      {firstParagraph(detail.desc1)}
                    </p>
                  </div>
                  <div className="mt-3 rounded-xl border border-primary/25 bg-primary/10 p-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-primary">{detail.label2}</p>
                    <p className="mt-2 whitespace-pre-line text-[9px] font-medium leading-[1.45] text-on-surface">
                      {lastParagraph(detail.desc2)}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            <section className="mt-[5mm] grid grid-cols-[1fr_10mm_1fr] items-stretch gap-[3mm]">
              <div className="print-panel rounded-2xl border border-red-300/15 p-[4mm]">
                <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-red-200/80">Traditional In-house</p>
                <h3 className="mt-1.5 text-[13px] font-semibold text-on-surface/90">{data.traditional_team.title}</h3>
                <div className="mt-3 space-y-1.5">
                  <div className="rounded-lg border border-on-surface/10 bg-surface/50 px-3 py-1.5 text-center text-[9px] text-on-surface-variant">
                    {data.traditional_team.director}
                  </div>
                  <div className="mx-auto h-2.5 w-px bg-red-200/30" />
                  <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-3 py-1.5 text-center text-[9px] font-semibold text-red-100">
                    {data.traditional_team.leader}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                    {data.traditional_team.members.map((member) => (
                      <div key={member} className="rounded-md border border-on-surface/10 bg-background/35 px-2 py-1.5 text-center text-[8px] text-on-surface-variant">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {data.traditional_team.pain_points?.map((point) => (
                    <span key={point} className="rounded-full border border-red-300/20 bg-red-500/10 px-2 py-0.5 text-[7px] text-red-100/90">
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex h-[10mm] w-[10mm] items-center justify-center rounded-full border border-primary/30 bg-surface text-[8px] font-bold text-primary shadow-[0_0_18px_rgba(242,202,80,0.16)]">
                  VS
                </div>
              </div>

              <div className="print-panel rounded-2xl border border-primary/40 bg-primary/5 p-[4mm] shadow-[0_0_34px_rgba(242,202,80,0.10)]">
                <p className="font-label-caps text-[8px] uppercase tracking-[0.24em] text-primary">Aethemar Solution</p>
                <h3 className="gold-text mt-1.5 text-[13px] font-semibold">{data.aethemar_team.title}</h3>
                <div className="mt-3 space-y-1.5">
                  <div className="rounded-lg border border-on-surface/10 bg-surface/50 px-3 py-1.5 text-center text-[9px] text-on-surface-variant">
                    {data.aethemar_team.director}
                  </div>
                  <div className="mx-auto h-2.5 w-px bg-primary/50" />
                  <div className="rounded-lg border border-primary/35 bg-primary/15 px-3 py-1.5 text-center text-[9px] font-bold text-primary">
                    {data.aethemar_team.leader}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                    {data.aethemar_team.members.map((member) => (
                      <div key={member} className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1.5 text-center text-[8px] font-semibold text-primary/95">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {data.aethemar_team.benefits?.map((benefit) => (
                    <span key={benefit} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[7px] font-medium text-primary">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* --- BACK PAGE --- */}
        <article className="a4-leaflet px-[12mm] py-[11mm] font-body-sm flex flex-col justify-between">
          <div className="relative z-10 flex h-full flex-col">
            <header className="flex items-start justify-between gap-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo_outline.png"
                  alt="Aethemar AI Labs"
                  width={400}
                  height={130}
                  unoptimized
                  className="h-[18mm] w-auto object-contain mix-blend-screen drop-shadow-[0_0_12px_rgba(242,202,80,0.35)]"
                />
                <div className="h-[15mm] w-px bg-primary/35" />
                <div>
                  <p className="font-label-caps text-[8px] uppercase tracking-[0.32em] text-primary/80">Services</p>
                  <p className="mt-1 text-[10px] leading-tight text-on-surface-variant">AI-Driven Marketing Architecture</p>
                </div>
              </div>
              <div className="rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-primary">
                {marketingTeam.title}
              </div>
            </header>

            <section className="mt-[6mm]">
              <div className="flex gap-[5mm] items-start">
                <div className="mt-1.5 w-[2mm] h-[12mm] bg-primary/70 rounded-full shrink-0 shadow-[0_0_10px_rgba(242,202,80,0.4)]" />
                <div>
                  <p className="text-[14px] font-semibold text-on-surface leading-[1.5]">
                    &quot;{ceo.desc.split('\n\n')[0]}&quot;
                  </p>
                  <p className="mt-2 text-[10px] leading-[1.6] text-on-surface-variant max-w-[170mm]">
                    {ceo.desc.split('\n\n')[1]}
                  </p>
                </div>
              </div>
            </section>

            <div className="hairline mt-[6mm] mb-[6mm] h-px w-full" />

            <section>
              <h2 className="text-[22px] font-light leading-[1.3] text-on-surface">
                초고도화된 전환을 위한 <span className="gold-text font-medium">데이터 기반 마케팅 아키텍처</span>
              </h2>
            </section>

            <section className="grid grid-cols-2 gap-[5mm] flex-grow content-start">
              {marketingTeam.trends?.slice(0, 6).map((trend: any, idx: number) => (
                <div key={idx} className="print-panel rounded-2xl border border-primary/15 p-[5mm] flex items-start gap-4">
                  <div className="flex h-[11mm] w-[11mm] shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_12px_rgba(242,202,80,0.12)]">
                    <span className="material-symbols-outlined text-[24px]">{trend.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[12px] font-semibold text-on-surface/95">{trend.title}</h3>
                    <p className="mt-2 text-[10px] leading-[1.55] text-on-surface-variant">{trend.desc}</p>
                  </div>
                </div>
              ))}
            </section>

            <div className="mt-auto pt-[4mm]">
              <div className="hairline mb-[4mm] h-px w-full" />
              <section className="grid grid-cols-2 gap-[6mm]">
                <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-2xl border border-primary/20 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                  <Image src="/card_front.png" alt="Aethemar Business Card Front" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-2xl border border-primary/20 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                  <Image src="/card_back.png" alt="Aethemar Business Card Back" fill className="object-cover" unoptimized />
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
