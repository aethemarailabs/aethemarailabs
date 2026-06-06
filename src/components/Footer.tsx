import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-primary/10 mt-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="font-display-lg text-title-md tracking-tighter text-primary flex items-center gap-2">
            <Image 
              src="/logo_outline.png"
              alt="Aethemar Logo" 
              width={300} 
              height={300} 
              className="h-[70px] w-auto mix-blend-screen opacity-90 object-contain" 
              unoptimized
            />
            <span className="sr-only">aethemar ai labs</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80 mt-4">
            © 2026 AETHEMAR AI LABS. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="md:col-span-8 flex flex-wrap justify-end gap-6 md:gap-8 font-body-sm text-body-sm text-on-surface-variant">
          <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Terms of Service</Link>
          <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Cookie Settings</Link>
          <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">LinkedIn</Link>
          <Link href="#" className="hover:text-primary underline transition-all opacity-80 hover:opacity-100">Global Offices</Link>
        </div>
      </div>
    </footer>
  );
}
