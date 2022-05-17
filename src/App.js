import './App.css';
import Home from './components/home/Home';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Route, Routes } from 'react-router-dom';
import Cards from './components/projects/Cards';
import Tech from './components/technologies/Technologies';
import Footer from './components/footer/Footer';
import 'aos/dist/aos.css';
import ScrollToTop from './helpers/ScrollToTop';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Cards/>
      <Tech/>
      <About/>
      <Contact/>
      <Footer/>
      <ScrollToTop />
    </div>
  );
}

export default App;
