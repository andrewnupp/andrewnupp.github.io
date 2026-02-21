// src/pages/Projects.tsx
import { useTranslation } from "react-i18next";
import { Card } from "../components/ui/card";
import { LinkCard } from "../components/ui/LinkCard"; // Capitalized to match the component file!

export function Projects() {
  const { t } = useTranslation();

  const pinnedProjects = [
    { id: '1', title: t('projectsPage.items.1.title'), date: t('projectsPage.items.1.date') },
    { id: '2', title: t('projectsPage.items.2.title'), date: t('projectsPage.items.2.date') },
    { id: '3', title: t('projectsPage.items.3.title'), date: t('projectsPage.items.3.date') },
  ];

  const latestProjects = [
    { id: '4', title: t('projectsPage.items.4.title'), date: t('projectsPage.items.4.date') },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      
      {/*WELCOME CARD*/}
      <section>
        <Card className="p-8 sm:p-12 text-center bg-background border-none">
          <h1 className="text-4xl font-bold mb-4 text-secondary-foreground">{t('projectsPage.welcome.title')}</h1>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            {t('projectsPage.welcome.description')}
          </p>
        </Card>
      </section>

      {/* PINNED SECTION */}
      <section>
        <h2 className="pt-6 pb-0 text-2xl font-bold mb-4 border-b flex items-center gap-2">
          {t('projectsPage.sections.featured')}
        </h2>
        <div className="flex flex-col gap-4">
          {pinnedProjects.map((project) => (
            <LinkCard 
              key={project.id} 
              title={project.title} 
              date={project.date} 
              href={`/projects/${project.id}`}
            />
          ))}
        </div>
      </section>

      {/* LATEST SECTION (not in use here)
      <section>
        <h2 className="pt-6 pb-4 text-2xl font-bold mb-2-5 border-b flex items-center gap-2">
          {t('projectsPage.sections.latest')}
        </h2>
        <div className="flex flex-col gap-4">
          {latestProjects.map((project) => (
            <LinkCard 
              key={project.id} 
              title={project.title} 
              date={project.date} 
              href={`/projects/${project.id}`} 
            />
          ))}
        </div>
      </section> */}

    </div>
  );
}