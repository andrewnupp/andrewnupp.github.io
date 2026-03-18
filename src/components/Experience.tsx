import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import SimpleGithub from './icons/SimpleGithub';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
}

export function Experience() {
  const { t } = useTranslation();

  // Load the translated array
  const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="w-full px-4 md:px-8 lg:px-16 py-9">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">{t('experience.title')}</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                  <div className="flex gap-4">
                    {exp.websiteUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={exp.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('Link')}
                        </a>
                      </Button>
                    )}
                    {exp.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={exp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SimpleGithub className="w-4 h-4 mr-2" />
                          {t('experience.buttons.github')}
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {exp.technologies.map((tech, techIndex) => (
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