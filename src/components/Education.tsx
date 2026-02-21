import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap } from 'lucide-react';

// Interface for TypeScript to understand the JSON structure
interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description?: string;
  courses?: string;
  awards?: string;
  certifications?: string;
}

export function Education() {
  const { t } = useTranslation();

  // Pull the array directly from en.json or ja.json
  const educationItems = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <section id="education" className="w-full px-4 md:px-8 lg:px-16 py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">{t('education.title')}</h2>
        
        <div className="space-y-6">
          {educationItems.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle>{edu.school}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                    </div>
                    <p className="text-muted-foreground mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              {(edu.description || edu.courses || edu.awards || edu.certifications) && (
                <CardContent>
                  <ul className="list-disc list-inside space-y-1">
                    {/*"GPA"*/}
                    {edu.description && (
                        <li className="pl-4"><em>GPA: </em>{edu.description}</li>
                    )}
                    
                    {/*"Courses"*/}
                    {edu.courses && (
                        <li className="pl-4" style={{ textIndent: '-1.3rem', paddingLeft: '1.5rem' }}>
                            <em>{t('education.labels.courses')}</em>{edu.courses}
                        </li>
                    )}

                    {/*"Awards"*/}
                    {edu.awards && (
                        <li className="pl-4">
                            <em>{t('education.labels.awards')}</em>{edu.awards}
                        </li>
                    )}

                    {/*Certifications*/}
                    {edu.certifications && (
                        <li className="pl-4">
                            <em>{t('education.labels.certifications')}</em>{edu.certifications}
                        </li>
                    )}

                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}