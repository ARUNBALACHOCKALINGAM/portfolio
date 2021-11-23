import React from 'react';
import './App.css';

//components
import Header from "./components/Header"
import About from "./components/About"
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import LoadingIcon from './components/LoadingIcon';



function App() {
  return (
    <div className="App">
         
          <Header/>
          <About/>
          <Skills/>
          <Project/>
          <Footer/>
      
    </div>
  );
}

export default App;
