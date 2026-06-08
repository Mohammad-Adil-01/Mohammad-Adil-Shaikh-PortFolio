import { motion } from "motion/react";
import "./Css/app.css";
import Header from "./header/Header";
import Banner from "./Banner/Banner"
import Project from "./project/Project";
const App = () => {
  return (<>
    <Header/>
    <Banner/>
    <Project/>
  </>

  );
};

export default App;
