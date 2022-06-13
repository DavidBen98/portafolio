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
import BackgroundAnimation from './components/home/BackgroundAnimation';
import AOSFunction from "./helpers/AOSLibrary";
import useScreenSize from './hooks/useScreenSize';
import { useEffect } from "react";

function App() {
    const widthSize = useScreenSize();

    useEffect(() => {
        AOSFunction(widthSize);
    }, [widthSize]);

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
      {/* <div style={{width: "1400px", height: "1400px"}}> */}
        <BackgroundAnimation />
      {/* </div> */}
      <ScrollToTop />
    </div>
  );
}

export default App;
