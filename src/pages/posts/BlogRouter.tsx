// src/pages/BlogPost.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import the hook

// 1. Import your post files
import { IUC } from './IUC';
// import { Kendo } from './posts/Kendo'; 

// 2. Map the URL 'id' to the specific component
const POST_REGISTRY: Record<string, React.ReactNode> = {
  'IUC': <IUC />,
};

export function BlogPost() {
  const { id } = useParams();
  const { t } = useTranslation(); // 2. Initialize the hook

  // 3. Look up the correct post based on the URL. 
  // If the ID doesn't exist in our registry, PostContent becomes undefined.
  const PostContent = id ? POST_REGISTRY[id] : undefined;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      
      {/* Back Button */}
      <Link 
        to="/blog" 
        className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline mb-8 inline-flex items-center gap-2"
      >
        {/* Kept the arrow symbol, translated the text */}
        &larr; {t('blogPostPage.backButton')}
      </Link>

      {/* Render the post if found, otherwise show an error message */}
      <div className="mt-4">
        {PostContent ? (
          PostContent
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{t('blogPostPage.notFound.title')}</h1>
            <p className="text-muted-foreground">{t('blogPostPage.notFound.description')}</p>
          </div>
        )}
      </div>

    </div>
  );
}