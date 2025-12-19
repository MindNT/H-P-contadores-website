import { useState, useEffect } from 'react';
import { Header, Hero, Services, Methodology, MethodologyPage, Footer, PageFooter } from './components/layout';
import { BackToTop, ScrollAnimation } from './components/common';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'methodology'>('home');

  useEffect(() => {
    // Detectar cambios en la URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/metodologia') {
        setCurrentPage('methodology');
      } else {
        setCurrentPage('home');
      }
    };

    // Verificar hash inicial
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll al inicio cuando cambia la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="container-figma">
      <Header />
      {currentPage === 'home' ? (
        <>
          <ScrollAnimation>
            <Hero />
          </ScrollAnimation>
          <ScrollAnimation>
            <Services />
          </ScrollAnimation>
          <ScrollAnimation>
            <Methodology />
          </ScrollAnimation>
          <ScrollAnimation>
            <Footer />
          </ScrollAnimation>
          <PageFooter />
        </>
      ) : (
        <>
          <ScrollAnimation>
            <MethodologyPage />
          </ScrollAnimation>
          <PageFooter />
        </>
      )}
      <BackToTop />
    </div>
  );
}

export default App;
