// src/pages/ProjectPost.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import the hook

// 1. Import your project files
import { KuzushijiMNIST } from './KuzushijiMNIST';
// import { AmPhantoms } from './project_posts/AmPhantoms'; 

// 2. Map the URL 'id' to the specific component
const PROJECT_REGISTRY: Record<string, React.ReactNode> = {
  'KuzushijiMNIST': <KuzushijiMNIST />,
  // 'am-phantoms': <AmPhantoms />,
};

export function ProjectPost() {
  const { id } = useParams();
  const { t } = useTranslation(); // 2. Initialize the hook

  // 3. Look up the correct project based on the URL. 
  const ProjectContent = id ? PROJECT_REGISTRY[id] : undefined;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      
      {/* Back Button */}
      <Link 
        to="/projects" 
        className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline mb-8 inline-flex items-center gap-2"
      >
        {/* Kept the arrow, translated the text */}
        &larr; {t('projectPostPage.backButton')}
      </Link>

      {/* Render the project if found, otherwise show an error message */}
      <div className="mt-4">
        {ProjectContent ? (
          ProjectContent
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{t('projectPostPage.notFound.title')}</h1>
            <p className="text-muted-foreground">{t('projectPostPage.notFound.description')}</p>
          </div>
        )}
      </div>

    </div>
  );
}