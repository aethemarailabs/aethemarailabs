"use client";

import { useState } from 'react';

export default function CeoResumeClient({ dict }: { dict: any }) {
  const [selectedExperience, setSelectedExperience] = useState<any | null>(null);

  return (
    <>
      <div className="w-full mt-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="font-title-md text-2xl text-primary mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
              {dict.experience_title}
            </h3>
            <div className="border-l border-primary/20 pl-6 md:pl-8 space-y-8 md:space-y-12 ml-2">
              {dict.experience.map((item: any, idx: number) => (
                <div 
                  key={idx} 
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedExperience(item)}
                >
                  <div className="absolute w-3 h-3 bg-surface border-2 border-primary rounded-full -left-[38px] top-1.5 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(212,175,55,0)] group-hover:shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                  <p className="font-label-caps text-sm text-primary/80 mb-2 tracking-widest uppercase">{item.period}</p>
                  <h4 className="font-title-md text-xl text-on-surface mb-1 flex flex-wrap items-baseline gap-x-3 group-hover:text-primary transition-colors">
                    {item.company}
                    <span className="text-on-surface-variant font-body-sm text-sm whitespace-nowrap">| {item.role}</span>
                  </h4>
                  <p className="font-body-sm text-base text-on-surface-variant leading-relaxed mt-2">{item.desc}</p>
                  {item.details && (
                    <p className="font-body-sm text-sm text-primary mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
            </div>
            
            {/* Personal Channels moved here */}
            {dict.sns_list && (
              <div className="mt-16 mb-8 md:mb-0">
                <h3 className="font-title-md text-2xl text-primary mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
                  {dict.sns_title}
                </h3>
                <div className="space-y-6">
                  {dict.sns_list.map((sns: any, idx: number) => {
                    const content = (
                      <>
                        <h4 className="font-title-md text-lg text-primary mb-2 flex items-center gap-2 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all">
                          <span className="material-symbols-outlined text-xl">smart_display</span>
                          {sns.title}
                        </h4>
                        <p className="font-body-sm text-sm text-on-surface-variant">{sns.desc}</p>
                        {sns.url && (
                          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold group-hover:bg-primary group-hover:text-background transition-colors w-fit">
                            <span className="material-symbols-outlined text-[14px]">ads_click</span>
                            Click to View
                          </div>
                        )}
                      </>
                    );

                    return sns.url ? (
                      <a 
                        key={idx} 
                        href={sns.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block glass-panel glow-box p-6 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={idx} className="glass-panel glow-box p-6 rounded-xl border border-primary/20 bg-primary/5">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Activities List */}
          <div>


            <h3 className="font-title-md text-2xl text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              {dict.activities_title}
            </h3>
            <div className="space-y-4">
              {dict.activities.map((item: any, idx: number) => {
                const content = (
                  <>
                    <h4 className="font-title-md text-base text-on-surface mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    {item.url && (
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold group-hover:bg-primary group-hover:text-background transition-colors w-fit">
                        <span className="material-symbols-outlined text-[14px]">ads_click</span>
                        Click to View
                      </div>
                    )}
                  </>
                );

                return item.url ? (
                  <a 
                    key={idx} 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center sm:items-stretch glass-panel glow-box p-0 rounded-xl border border-primary/5 hover:border-primary/40 transition-all duration-300 group cursor-pointer overflow-hidden"
                  >
                    {item.image && (
                      <div className="w-full sm:w-1/3 aspect-video sm:aspect-auto sm:min-h-[140px] bg-surface-container relative overflow-hidden flex-shrink-0 border-b sm:border-b-0 sm:border-r border-primary/10">
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col justify-center">
                      {content}
                    </div>
                  </a>
                ) : (
                  <div 
                    key={idx} 
                    className="glass-panel glow-box p-5 rounded-xl border border-primary/5 group"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedExperience(null)}>
          <div 
            className="w-full max-w-2xl bg-surface-container border border-primary/20 rounded-2xl p-5 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setSelectedExperience(null)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            
            <p className="font-label-caps text-primary tracking-widest uppercase mb-4">
              {selectedExperience.period || (selectedExperience.full_desc ? 'Philosophy & Story' : 'Activity Details')}
            </p>
            <h3 className="font-headline-sm text-2xl sm:text-3xl text-on-surface mb-2">{selectedExperience.company || selectedExperience.title}</h3>
            {selectedExperience.role && (
              <p className="font-title-md text-lg text-primary/80 mb-8 pb-6 border-b border-primary/10">{selectedExperience.role}</p>
            )}
            
            {selectedExperience.details ? (
              <ul className="space-y-4 font-body-lg text-on-surface-variant text-base sm:text-lg mt-6">
                {selectedExperience.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex gap-4">
                    <span className="material-symbols-outlined text-primary mt-1 text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="font-body-lg text-on-surface-variant text-base sm:text-lg leading-relaxed mt-6 pt-6 border-t border-primary/10 whitespace-pre-wrap">
                {selectedExperience.full_desc || selectedExperience.desc}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
