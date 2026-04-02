import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Program from './pages/Program';
import About from './pages/About';
import Team from './pages/Team';
import Application from './pages/Application';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/useLanguage';

const AppRoutes = () => {
  const { copy } = useLanguage();

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/ekibimiz" element={<Team />} />
          <Route path="/basvuru" element={<Application />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="*" element={<div style={{ padding: '100px', textAlign: 'center' }}><h2>{copy.app.comingSoon}</h2></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const Router = window.location.hostname.endsWith('github.io') ? HashRouter : BrowserRouter;

  return (
    <Router>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </Router>
  );
}

export default App;
