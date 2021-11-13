import React from "react";
import {Router,Link} from "react-dom";

//assets

import logo from "../assets/Group 2.png"

//styles
import classes from "../styles/Header.module.css"


//material-ui components

//components


function Header(){

    function showSkills(){
          
           console.log(document.width);
            if(window.innerWidth<=1200){
                window.scrollTo(600,600);
            }else{
                window.scrollTo(900,900);
            }
    }

    
    function showProjects(){
          
        console.log(document.width);
         if(window.innerWidth<=1200){
             window.scrollTo(1300,1300);
         }else{
             window.scrollTo(1700,1700);
         }
 }

    return(
        <>
          <div className={classes.nav}>
              <img src={logo} className={classes.profile} alt="profile"/>
              <div className={classes.navlinks}>
              <h1 onClick={showSkills} className={classes.links}>SKILLS</h1>
              <h1 onClick={showProjects} className={classes.links}>PROJECTS</h1>
              <h1  className={classes.links}>BLOG</h1>
              </div>
              <div className={classes.mobcontent}>
                 <h1 style={{fontWeight:"200",fontFamily:"'Montserrat', sans-serif",color:"white"}}>Hi, I’m <span style={{letterSpacing:"1px"}}>Arun.</span><br/>This is my portfolio :)</h1>
              </div>
          </div>
        </>
    )
}

export default Header;