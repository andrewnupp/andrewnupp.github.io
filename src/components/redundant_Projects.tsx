import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import SimpleGithub from './icons/SimpleGithub';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function Projects() {
  const { t } = useTranslation();

  // Load the project list
  const projectItems = t('projects.items', { returnObjects: true }) as Project[];

  return (
    <section id="projects" className="w-full px-4 md:px-8 lg:px-16 py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">{t('projects.title')}</h2>
        <div className="grid gap-6">
          {projectItems.map((project, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('projects.buttons.demo')}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SimpleGithub className="h-4 w-4 mr-2" />
                          {t('projects.buttons.source')}
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}