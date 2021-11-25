import React, { useState } from 'react';
import './App.css';

//components
import Header from "./components/Header"
import About from "./components/About"
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import LoadingIcon from './components/LoadingIcon';



function App() {
  const [showLoader,setLoader] = useState(true);

  setTimeout(()=>{setLoader(false)},2550)

  return (
    <div className="App">
         
    {showLoader ? <LoadingIcon/> : 
    <div className="App">
    <Header/>
    <About/>
    <Skills/>
    <Project/>
    <Footer/>
    </div>
    }
      
    </div>
  );
}

export default App;
