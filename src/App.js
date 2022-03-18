import './App.css';
import Home from './components/home/Home';
import Projets from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Route, Routes } from 'react-router-dom';
import Cards from './components/projects/Cards';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/footer/Footer';

function App() {

  AOS.init();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Cards/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
