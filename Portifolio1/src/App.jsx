import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/home';
import About from './Components/About/About';
import Expertise from './Components/Expertice/Expertise';
import BackgroundEffect from './Components/BG/BacgroundEffect';



function App() {


  return (
    <>
    <BackgroundEffect/>
   <Header/>
   <Home/>
   <Expertise/>
   <About/>
    </>
  )
}

export default App
