import { useTranslation } from 'react-i18next';
import { Card, CardContent } from './ui/card';

export function About() {
  const { t } = useTranslation();

  // Pull the array of paragraphs from JSON
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[];

  return (
    <section id="about" className="w-full px-4 md:px-8 lg:px-16 py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">{t('about.title')}</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                {paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
