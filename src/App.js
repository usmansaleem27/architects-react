import './App.css';
import './variables.css';
import './responsive.css';
import Navbar from './Home/Navbar'
import FrontHome from './Home/FrontHome';
import AboutUs from './Home/AboutUs';
import Projectscount from './Home/Projectscount';
import Footer from './Home/Footer';
import Goodideas from './Home/Goodideas';
import IdeasCards from './Home/IdeasCards';
import Advertisement from './Home/Advertisement';
import EngineerAdv from './Home/EngineerAdv';
import Benefits from './Home/Benefits';
import Display from './Home/Display';


function App() {
  return (
    <>
    <Navbar title = "Architects"/>
    <FrontHome/>
    <AboutUs/>
    <Projectscount/>
    <Benefits/>
    <Display/>
    <EngineerAdv/>
    <Advertisement/>
    <Projectscount/>
    <Goodideas/>
    <IdeasCards/>
    <Footer/>
    </>
    );
}

export default App;
