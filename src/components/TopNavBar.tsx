"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function TopNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Default to 'ko' if the pathname doesn't start with /en
  const currentLang = pathname.startsWith('/en') ? 'en' : 'ko';

  const togglePath = (targetLang: 'en' | 'ko') => {
    if (pathname.startsWith(`/${currentLang}`)) {
      return pathname.replace(`/${currentLang}`, `/${targetLang}`);
    }
    return `/${targetLang}${pathname}`;
  };

  const navLinks = [
    { name: 'Why Aethemar?', href: `/${currentLang}` },
    { name: 'Philosophy', href: `/${currentLang}/philosophy` },
    { name: 'CEO', href: `/${currentLang}/ceo` },
    { name: 'Services', href: `/${currentLang}/services` },
    { name: 'SNS Channels', href: `/${currentLang}/portfolio` },
    { name: 'Portfolio', href: `/${currentLang}/achievements` },
    { name: 'Contact', href: `/${currentLang}/contact` },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-primary/15 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 md:py-6 max-w-[1440px] mx-auto">
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group">
            <div className="font-display-lg text-title-md tracking-tighter text-primary flex items-center gap-2">
              <img 
                src="/logo_outline.png"
                alt="Aethemar Logo" 
                className="h-[40px] md:h-[56px] w-auto object-contain group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all" 
              />
              <span className="sr-only">aethemar ai labs</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 items-center font-label-caps text-base uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-colors duration-300 ${isActive ? 'text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          {/* Actions: Lang Toggle and Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 font-label-caps text-xs md:text-sm tracking-widest text-on-surface-variant">
              <Link href={togglePath('en')} className={`transition-colors hover:text-primary ${currentLang === 'en' ? 'text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : ''}`}>EN</Link>
              <span>|</span>
              <Link href={togglePath('ko')} className={`transition-colors hover:text-primary ${currentLang === 'ko' ? 'text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : ''}`}>KOR</Link>
            </div>
            
            <button 
              className="md:hidden text-primary flex items-center justify-center w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-40 bg-surface/95 backdrop-blur-xl md:hidden border-t border-primary/10 flex flex-col items-center pt-12 gap-8 font-label-caps text-label-caps uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl transition-colors duration-300 ${isActive ? 'text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center gap-4 mt-4 mb-4 font-label-caps text-lg tracking-widest text-on-surface-variant">
            <Link href={togglePath('en')} onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors hover:text-primary ${currentLang === 'en' ? 'text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : ''}`}>EN</Link>
            <span>|</span>
            <Link href={togglePath('ko')} onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors hover:text-primary ${currentLang === 'ko' ? 'text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : ''}`}>KOR</Link>
          </div>
        </div>
      )}
    </>
  );
}
