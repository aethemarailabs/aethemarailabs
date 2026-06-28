'use client';

import { useState } from 'react';
import Image from 'next/image';

interface InsightImageCardProps {
  imageSrc: string;
  altText?: string;
  caption?: string;
}

export default function InsightImageCard({ imageSrc, altText = "Insight statistics", caption }: InsightImageCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="w-full h-[600px] max-w-md rounded-xl overflow-hidden glass-panel glow-box bg-white cursor-pointer group relative flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex-1 relative w-full bg-gray-50 flex items-center justify-center p-4">
          <Image 
            src={imageSrc} 
            alt={altText} 
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">zoom_in</span>
          </div>
        </div>
        <div className="p-4 border-t border-gray-100 bg-white text-center flex flex-col items-center">
          <p className="font-title-md text-primary flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">bar_chart</span>
            View Insights
          </p>
          {caption && (
            <p className="text-gray-700 font-medium text-sm mt-2">{caption}</p>
          )}
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="relative w-full h-[85vh]">
              <Image 
                src={imageSrc} 
                alt={altText} 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
