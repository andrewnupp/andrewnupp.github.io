// App.tsx
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { useEffect } from 'react'; 

import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/posts/BlogRouter';
import { Projects } from './pages/Projects';
import { ProjectPost } from './pages//projects/ProjectRouter';

// helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        
        <main className="flex-1 w-full pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectPost />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}