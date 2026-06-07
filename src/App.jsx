import { motion } from "motion/react";
import {Routes, Route ,Link } from "react-router-dom";
import "./Css/app.css";
import Header from "./header/Header";
import Banner from "./Banner/Banner"
const App = () => {
  return (
    <> 
    <Header/>
    <Banner/>
    </>

  );
};

export default App;
