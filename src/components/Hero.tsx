import { useTranslation, Trans } from 'react-i18next';

export function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="w-full px-4 md:px-8 lg:px-16 py-12 flex items-center justify-center">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl">
          {/* Change <0> to <1> in JSON to match the <span> position below */}
          <Trans i18nKey="hero.welcome">
            Hi, I'm <span className="text-primary">Andrew Nupp</span>
          </Trans>
        </h1>

        <h2 className="text-xl md:text-2xl text-muted-foreground">
          {/*{t('hero.subtitle')}*/}
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {/*{t('hero.description')}*/}
        </p>
      </div>
    </section>
  );
}