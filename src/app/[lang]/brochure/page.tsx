import { getDictionary } from '@/dictionaries';
import Image from 'next/image';

export default async function BrochurePage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const data = dict.why_aethemar;

  return (
    <div className="bg-white min-h-screen text-black font-sans print:bg-white print:m-0 print:p-0">
      <style dangerouslySetInnerHTML={{__html: `
        nav, header, footer, #mobile-bottom-nav, #top-nav-bar { display: none !important; }
        body { background: white !important; color: black !important; margin: 0; padding: 0; }
        @page { size: A4 portrait; margin: 0; }
        .a4-page {
          width: 210mm;
          min-height: 297mm;
          padding: 20mm;
          margin: 0 auto;
          background: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        @media print {
          .a4-page { margin: 0; box-shadow: none; width: 100%; height: 100%; padding: 15mm; page-break-after: always; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}} />

      <div className="a4-page flex flex-col justify-between">
        {/* Header */}
        <div className="border-b-4 border-black pb-6 mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">AETHEMAR AI LABS</h1>
            <h2 className="text-xl text-gray-600 font-medium">Business Proposal & Core Philosophy</h2>
          </div>
          <div className="text-right text-sm text-gray-500 font-bold tracking-widest">
            {data.badge}
          </div>
        </div>

        {/* Hero Concept */}
        <div className="mb-12 text-center bg-gray-50 py-10 rounded-xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-4">{data.title1} <span className="text-blue-600">{data.title2}</span></h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed whitespace-pre-wrap">{data.subtitle}</p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Traditional */}
          <div className="border-2 border-red-100 bg-red-50/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-600 mb-4 border-b border-red-200 pb-2">{data.traditional_team.title}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-500 mb-1">CONTROL TOWER</p>
                <p className="font-semibold text-sm">{data.traditional_team.director} &rarr; {data.traditional_team.leader}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 mb-1">MEMBERS</p>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  {data.traditional_team.members.map((m: string, i: number) => <li key={i}>{m}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-red-500 mb-1">PAIN POINTS</p>
                <ul className="list-disc pl-4 text-sm text-red-700 space-y-1">
                  {data.traditional_team.pain_points.map((m: string, i: number) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Aethemar */}
          <div className="border-2 border-blue-600 bg-blue-50/20 rounded-xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">SOLUTION</div>
            <h3 className="text-xl font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2">{data.aethemar_team.title}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-blue-400 mb-1">CONTROL TOWER</p>
                <p className="font-bold text-blue-900 text-sm">{data.aethemar_team.director} &rarr; {data.aethemar_team.leader}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-400 mb-1">AI AGENTS</p>
                <ul className="list-disc pl-4 text-sm space-y-1 font-semibold text-gray-800">
                  {data.aethemar_team.members.map((m: string, i: number) => <li key={i}>{m}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-600 mb-1">BENEFITS</p>
                <ul className="list-disc pl-4 text-sm text-blue-800 font-bold space-y-1">
                  {data.aethemar_team.benefits.map((m: string, i: number) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p className="font-bold text-black mb-1">aethemar.com</p>
          <p>주식회사 에테마르 | 대표이사 이희경 | 경기도 안양시 동안구 시민대로 181</p>
        </div>
      </div>
      
      {/* Page 2: Details */}
      <div className="a4-page flex flex-col">
        <div className="border-b-4 border-black pb-6 mb-8 flex justify-between items-end mt-4">
          <h2 className="text-2xl font-bold text-black">Aethemar Strategies & Core Values</h2>
        </div>
        
        <div className="space-y-8 flex-1">
          {data.details.map((detail: any, idx: number) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-blue-800">{detail.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[10px] font-bold text-red-500 mb-2 px-2 py-1 bg-red-100 inline-block rounded">{detail.label1}</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{detail.desc1}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-600 mb-2 px-2 py-1 bg-blue-100 inline-block rounded">{detail.label2}</h4>
                  <p className="text-sm text-black font-medium whitespace-pre-wrap leading-relaxed">{detail.desc2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center bg-blue-600 text-white p-6 rounded-xl print:bg-blue-600">
          <h3 className="text-xl font-bold mb-2">Ready to Transform Your Business?</h3>
          <p className="text-sm opacity-90">지금 바로 연락 주시면 비즈니스 성장을 위한 구체적인 AI 도입 전략을 제안해 드립니다.</p>
        </div>
      </div>
    </div>
  );
}
