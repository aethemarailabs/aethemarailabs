"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const currentLang = pathname.startsWith('/en') ? 'en' : 'ko';

  const navItems = [
    { name: 'Why Aethemar', href: `/${currentLang}`, icon: 'help' },
    { name: 'Philosophy', href: `/${currentLang}/philosophy`, icon: 'auto_awesome' },
    { name: 'Services', href: `/${currentLang}/services`, icon: 'widgets' },
    { name: 'Product', href: `/${currentLang}/product`, icon: 'deployed_code' },
    { name: 'Achievements', href: `/${currentLang}/achievements`, icon: 'bar_chart' },
    { name: 'Contact', href: `/${currentLang}/contact`, icon: 'mail' },
  ];

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-[9999] w-full" style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
      <nav className="bg-surface/95 backdrop-blur-md border-t border-primary/15 pb-safe pt-1.5 pb-1.5 px-1 grid grid-cols-6 items-center shadow-[0_-5px_15px_rgba(0,0,0,0.8)] w-full will-change-transform">
      {navItems.map((item) => {
        const isRoot = item.href === `/${currentLang}`;
        const isActive = isRoot
          ? pathname === item.href || pathname === item.href + '/'
          : pathname === item.href || pathname.startsWith(item.href + '/');
        return (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`w-full flex flex-col items-center justify-center py-1 px-0.5 transition-all duration-300 ${isActive ? 'text-primary drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]' : 'text-on-surface-variant hover:text-primary/70'}`}
          >
            <span 
              className="material-symbols-outlined text-[18px] sm:text-[20px] mb-0.5 transition-all" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="text-[8.5px] sm:text-[10px] font-semibold uppercase tracking-tighter leading-none text-center truncate w-full">
              {item.name}
            </span>
          </Link>
        );
      })}
      </nav>
    </div>
  );
}
