// src/pages/Blog.tsx
import { useTranslation } from "react-i18next";
import { Card } from "../components/ui/card";
import { LinkCard } from "../components/ui/LinkCard"; // Note: Capitalized LinkCard to avoid your earlier import errors!

export function Blog() {
  const { t } = useTranslation();

  const pinnedPosts = [
    { id: '1', title: t('blogPage.posts.1.title'), date: t('blogPage.posts.1.date') },
    { id: '2', title: t('blogPage.posts.2.title'), date: t('blogPage.posts.2.date') },
    { id: '3', title: t('blogPage.posts.3.title'), date: t('blogPage.posts.3.date') },
    { id: '4', title: t('blogPage.posts.4.title'), date: t('blogPage.posts.4.date') }
  ];

  const latestPosts = [
    { id: '5', title: t('blogPage.posts.5.title'), date: t('blogPage.posts.5.date') },
    { id: '6', title: t('blogPage.posts.6.title'), date: t('blogPage.posts.6.date') },
    { id: '7', title: t('blogPage.posts.7.title'), date: t('blogPage.posts.7.date') },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      
      {/* WELCOME CARD */}
      <section>
        <Card className="p-8 sm:p-12 text-center bg-background border-none">
          <h1 className="text-4xl font-bold mb-4">{t('blogPage.welcome.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('blogPage.welcome.description')}
          </p>
        </Card>
      </section>

      {/* PINNED SECTION */}
      <section>
        <h2 className="pt-6 pb-0 text-2xl font-bold mb-4 border-b flex items-center gap-2">
          {t('blogPage.sections.pinned')}
        </h2>
        <div className="flex flex-col gap-4">
          {pinnedPosts.map((post) => (
            <LinkCard 
              key={post.id} 
              title={post.title} 
              date={post.date} 
              href={`/blog/${post.id}`} 
            />
          ))}
        </div>
      </section>

      {/* LATEST SECTION */}
      <section>
        <h2 className="pt-6 pb-0 text-2xl font-bold mb-4 border-b flex items-center gap-2">
          {t('blogPage.sections.latest')}
        </h2>
        <div className="flex flex-col gap-4">
          {latestPosts.map((post) => (
            <LinkCard 
              key={post.id} 
              title={post.title} 
              date={post.date} 
              href={`/blog/${post.id}`} 
            />
          ))}
        </div>
      </section>

    </div>
  );
}