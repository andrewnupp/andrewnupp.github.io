import { useTranslation } from 'react-i18next';
import { Linkedin, Mail } from 'lucide-react';
import SimpleGithub from './icons/SimpleGithub';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t">
      <div className="container px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl">{t('footer.title')}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('footer.description')}
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:andrewnupp@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="p-1"><Mail className="h-5 w-5" /></span>
              <span>{t('footer.labels.email')}</span>
            </a>
            <a 
              href="https://github.com/andrewnupp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="p-1"><SimpleGithub className="h-5 w-5" /></span>
              <span>{t('footer.labels.github')}</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/andrew-nupp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="p-1"><Linkedin className="h-5 w-5" /></span>
              <span>{t('footer.labels.linkedin')}</span>
            </a>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}