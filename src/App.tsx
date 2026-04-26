import './App.css'
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';
import Router from './routes/Router';

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-12">
        <Router />
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
