import { getDictionary } from '@/dictionaries';
import InsightImageCard from '@/components/InsightImageCard';
import FadeIn from '@/components/animations/FadeIn';

export default async function AchievementsPage({ params }: { params: Promise<{ lang: 'en' | 'ko' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section id="achievements" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[70vh] flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-12 w-full mb-16">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{dict.achievements.title}</h2>
            <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">{dict.achievements.subtitle}</p>
          </div>
        </FadeIn>
      </div>

      <FadeIn direction="up" delay={0.2} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center w-full max-w-5xl mx-auto">
          <InsightImageCard imageSrc="/insight1.jpg" altText="Insight Statistics 1" />
          <InsightImageCard imageSrc="/insight2.jpg" altText="Insight Statistics 2" />
        </div>
      </FadeIn>
    </section>
  );
}
