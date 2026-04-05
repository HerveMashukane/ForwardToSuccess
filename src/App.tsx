import './App.css'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Programs from './pages/Programs';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
