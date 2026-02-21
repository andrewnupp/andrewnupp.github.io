import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract?: string;
  pdfUrl?: string;
  doiUrl?: string;
  url?: string;
}

export function Publications() {
  const { t } = useTranslation();

  // Load the publication list
  const publicationItems = t('publications.items', { returnObjects: true }) as Publication[];

  return (
    <section id="publications" className="w-full px-4 md:px-8 lg:px-16 py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">{t('publications.title')}</h2>

        <div className="grid gap-6">
          {publicationItems.map((pub, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{pub.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {pub.authors} · <em>{pub.venue}</em> · {pub.year}
                </div>
              </CardHeader>

              <CardContent>
                {pub.abstract && (
                  <p className="mb-6">{pub.abstract}</p>
                )}

                <div className="flex gap-3 flex-wrap">
                  {pub.pdfUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        PDF
                      </a>
                    </Button>
                  )}

                  {pub.doiUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        DOI
                      </a>
                    </Button>
                  )}

                  {pub.url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t('Link')}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}