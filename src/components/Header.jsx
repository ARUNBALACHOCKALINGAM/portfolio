import React from "react";


//assets

import logo from "../assets/buymeacoffee.svg"
import moblogo from "../assets/arun.jpg"
import GitHubIcon from '../assets/Github_white.svg';
import LinkedIn from '../assets/LinkedIN_white.svg'
//styles
import classes from "../styles/Header.module.css"


//material-ui components
import Button from "@mui/material/Button";

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
              <img style={{borderRadius:"50%",}}  src={moblogo} className={classes.profile} alt="profile"/>
              <div className={classes.navlinks}>
              <h1 onClick={showSkills} className={classes.links}>SKILLS</h1>
              <h1 onClick={showProjects} className={classes.links}>PROJECTS</h1>
              <a style={{textDecoration:"none",color:"white"}} href="https://medium.com/@abclingam1/the-essential-react-hooks-b9d4c1c7e799"><h1 className={classes.links}>BLOG</h1></a>
              </div>
              <div className={classes.mobcontent}>
                 <h1 style={{fontWeight:"200",fontFamily:"'Montserrat', sans-serif",color:"white"}}>Hi, I’m <span style={{letterSpacing:"5px"}}>Arun.</span><br/>This is my portfolio :)</h1>
                 <a className={classes.gitlink} href="https://github.com/ARUNBALACHOCKALINGAM/"><img className={classes.githubicon} src={GitHubIcon} alt="githubicon" /></a><a href="https://www.linkedin.com/in/arun-bala-34308620a/"><img style={{marginLeft:"15px"}} className={classes.githubicon} src={LinkedIn} alt="githubicon" /></a>
              </div>
          </div>
        </>
    )
}

export default Header;