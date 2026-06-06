"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function TopNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Philosophy', href: '/' },
    { name: 'CEO', href: '/ceo' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-primary/15 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        <div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="font-display-lg text-title-md tracking-tighter text-primary flex items-center gap-2">
              <Image 
                src="/logo/119409.png"
                alt="Aethemar Logo" 
                width={40} 
                height={40} 
                className="h-8 w-auto object-contain group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all" 
                unoptimized
              />
              <span className="sr-only">aethemar ai labs</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 items-center font-label-caps text-label-caps uppercase tracking-widest">
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
          <Link href="/contact" className="hidden md:inline-flex bg-primary text-on-primary font-label-caps px-6 py-3 rounded-DEFAULT hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all active:scale-95 duration-200 uppercase tracking-widest">
            Get Started
          </Link>
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
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
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 bg-primary text-on-primary font-label-caps px-10 py-4 rounded-DEFAULT hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all active:scale-95 duration-200 uppercase tracking-widest text-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}
