"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const currentLang = pathname.startsWith('/en') ? 'en' : 'ko';

  const navItems = [
    { name: 'WHY US', href: `/${currentLang}/why-aethemar`, icon: 'question_mark' },
    { name: 'CEO', href: `/${currentLang}/ceo`, icon: 'person' },
    { name: 'SERVICE', href: `/${currentLang}/services`, icon: 'widgets' },
    { name: 'WORKS', href: `/${currentLang}/portfolio`, icon: 'view_carousel' },
    { name: 'AWARDS', href: `/${currentLang}/achievements`, icon: 'insights' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-primary/15 pb-safe pt-2 px-3 flex justify-between items-center shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname === item.href + '/';
        return (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`flex-1 w-full flex flex-col items-center justify-center py-2 px-1 transition-all duration-300 ${isActive ? 'text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] scale-110' : 'text-on-surface-variant hover:text-primary/70'}`}
          >
            <span 
              className="material-symbols-outlined text-2xl mb-1 transition-all" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-label-caps uppercase tracking-wider">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
