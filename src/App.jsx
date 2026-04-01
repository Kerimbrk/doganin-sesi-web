import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Program from './pages/Program';

import About from './pages/About';
import Team from './pages/Team';
import Application from './pages/Application';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
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
            <Route path="*" element={<div style={{padding: '100px', textAlign: 'center'}}><h2>Sayfa Hazırlanıyor...</h2></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
