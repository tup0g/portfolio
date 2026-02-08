import './App.css';
import { Home } from './components/sections/Home';
import { Navbar } from './components/layout/Navbar';
import { useEffect, useState } from 'react';
import { Preloader } from './components/Preloader';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (load) {
    return <Preloader load={load} />;
  }

  return (
    <div className="bg-custom-bg text-custom-cream min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;