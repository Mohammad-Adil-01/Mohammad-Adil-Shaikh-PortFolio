import { motion } from "motion/react";
import "./Css/app.css";
import Header from "./header/Header";
import Banner from "./Banner/Banner"
import Project from "./project/Project";
import Education from "./education/Education";
import Experience from "./experiences/Experience";
import Certificates from "./certificates/Certificates";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
const App = () => {
  return (<>
    <Header/>
    <Banner/>
    <Education/>
    <Project/>
    <Experience/>
    <Certificates/>
    <Contact/>
    <Footer/>
  </>

  );
};

export default App;
