import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import Portfolio from "./components/portfolio/Portfolio";
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
// import Contact from './components/contact/Contact';
import AboutMe from './components/aboutMe/AboutMe';
import "./app.scss"
import { useState } from 'react';
import Menu from "./components/menu/Menu";
import './app.scss';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="app">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <AboutMe/>
        <Portfolio />
        <Works />
        <Testimonials />
        {/* <Contact /> */}

      </div>
    </div>
  );
}

export default App;
