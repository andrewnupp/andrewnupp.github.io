import { useTranslation } from 'react-i18next';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface SkillCategory {
  category: string;
  skills: string[];
}

export function Skills() {
  const { t } = useTranslation();

  // Load the categories array
  const skillCategories = t('skills.categories', { returnObjects: true }) as SkillCategory[];

  return (
    <section id="skills" className="w-full px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">{t('skills.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
