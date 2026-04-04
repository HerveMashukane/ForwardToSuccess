import './App.css'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Team from './pages/Team';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Team />
      <Courses />
      <Footer />
    </>
  )
}

export default App;
