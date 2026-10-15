import { getDictionary } from '@/dictionaries';
import FadeIn from '@/components/animations/FadeIn';
import ProductShowcase from '@/components/ProductShowcase';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ko' }];
}

export default async function PortfolioPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="portfolio" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen flex flex-col items-center pt-32">
      <div className="flex flex-col items-center text-center space-y-6 w-full mb-16">
        <FadeIn direction="up" delay={0.1}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-label-caps tracking-widest bg-primary/5 mb-4">
            {dict.product.badge}
          </span>
          <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-primary glow-text tracking-wider uppercase">
            {dict.product.title}
          </h1>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed mt-4">
            {dict.product.subtitle}
          </p>
        </FadeIn>
      </div>

      <FadeIn direction="up" delay={0.2} className="w-full">
        <ProductShowcase dict={dict.product} />
      </FadeIn>
    </section>
  );
}
