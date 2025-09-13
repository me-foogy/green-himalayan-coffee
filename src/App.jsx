import React, {useState} from "react";
import NavBar from "./components/navBar/navBar";
import './index.css';
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

/*primary color: #01582D*/

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container"> <Title title='Our Services' /><Programs/> 
      <About setPlayState={setPlayState}/>
      <Title title='Gallery' />
      <Gallery/>
      <Title  title='Reviews' />
      <Reviews/>
      <Title title='Contact Us' />
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}
export default App;