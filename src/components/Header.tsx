import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Globe, Menu, X } from 'lucide-react';
import SimpleGithub from './icons/SimpleGithub';
import { Button } from './ui/button';

export function Header() {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language?.startsWith('ja') ? 'ja' : 'en') as 'en' | 'ja';
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative flex items-center w-full h-16 px-6">
        
        {/* LEFT: Language Toggle */}
        <div className="relative z-10">
          <Button 
            variant="ghost" 
            onClick={toggleLanguage} 
            className="flex items-center gap-1 px-2" 
            aria-label="Switch Language"
          >
            <Globe className="h-5 w-5" />
            <span className="text-sm font-bold opacity-70">
              {currentLang.toUpperCase()}
            </span>
          </Button>
        </div>

        {/* CENTER: Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6">
          <Link to="/#about" className="transition-colors hover:text-foreground/80">{t('about.title')}</Link>
          <Link to="/#education" className="transition-colors hover:text-foreground/80">{t('education.title')}</Link>
          <Link to="/#experience" className="transition-colors hover:text-foreground/80">{t('experience.title')}</Link>
          <Link to="/#publications" className="transition-colors hover:text-foreground/80">{t('publications.title')}</Link>
          <Link to="/projects" className="transition-colors hover:text-foreground/80">{t('header.projects')}</Link>
          <Link to="/blog" className="transition-colors hover:text-foreground/80">{t('header.blog')}</Link>
        </nav>

        {/* RIGHT: Social Icons & Mobile Menu Toggle */}
        <div className="ml-auto flex items-center gap-2 z-10">
          
          {/* Desktop Social Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/andrewnupp" target="_blank" rel="noopener noreferrer">
                <SimpleGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/andrew-nupp/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:andrewnupp@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Mobile Sandwich Menu Toggle & Dropdown */}
          <div className="flex md:hidden items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="fixed top-[66px] left-0 w-full flex flex-col shadow-xl bg-background border border-border rounded-xl py-2 z-50">
                <Link 
                  to="/" 
                  onClick={closeMenu}
                  className="px-4 py-3 text-center w-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {t('header.home')}
                </Link>
                <Link 
                  to="/projects" 
                  onClick={closeMenu}
                  className="px-4 py-3 text-center w-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {t('header.projects', 'Projects')}
                </Link>
                <Link 
                  to="/blog" 
                  onClick={closeMenu}
                  className="px-4 py-3 text-center w-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {t('header.blog', 'Blog')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}