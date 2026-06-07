import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-surface-container-lowest border-t border-primary/10 mt-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo_outline.png"
              alt="Aethemar Logo" 
              width={300} 
              height={300} 
              className="h-[36px] md:h-[56px] w-auto mix-blend-screen opacity-90 object-contain" 
              unoptimized
            />
            <span className="sr-only">aethemar ai labs</span>
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-body-sm text-xs text-on-surface-variant opacity-80 text-center md:text-left">
            <p className="whitespace-nowrap">
              © 2026 AETHEMAR AI LABS. ALL RIGHTS RESERVED.
            </p>
            <span className="hidden md:block w-px h-3 bg-on-surface-variant/50"></span>
            <p className="whitespace-nowrap">
              주식회사 에테마르 | 대표이사 이희경 | 사업자등록번호 376-81-01910
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 font-body-sm text-xs text-on-surface-variant">
          <Link href="#" className="hover:text-primary transition-all opacity-80 hover:opacity-100">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-all opacity-80 hover:opacity-100">Terms of Service</Link>
          <Link href="#" className="hover:text-primary transition-all opacity-80 hover:opacity-100">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
