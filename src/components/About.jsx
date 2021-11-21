import React from "react"
//assets
import wave from "../assets/Emoji.svg"
import coder from "../assets/3426525.svg"
import GitHubIcon from '../assets/Github_black.svg';
//styles
import classes from "../styles/About.module.css"
import { colors } from "../config/colors";

//material-ui comps
import { Button } from "@mui/material"



function About() {

  let primary=colors["primary"];




  return (
    <>
    <div className={classes.container}>
      <div style={{zIndex:"10"}} className={classes.content}>
          <h1 style={{fontWeight:"600",fontFamily:"'Montserrat', sans-serif"}}>Hi, I'm Arun<img alt="I'm waving at you" className={classes.wave} src={wave}/></h1>
          <h1 className={classes.line} style={{fontWeight:"600",fontFamily:"'Montserrat', sans-serif",marginTop:"-20px"}}>I <span className={classes.code}>code</span>, <span className={classes.design}>design</span> and <span className={classes.write}>write. </span></h1>
          <h1 className={classes.desc} style={{fontWeight:"600",fontFamily:"'Montserrat', sans-serif",marginTop:"-20px"}}>I <span className={classes.code}>code</span>, <span className={classes.design}>design</span> and <span className={classes.write}>write. </span></h1>
          <p className={classes.para}>I’m currently pursuing B.tech at VIT Amaravati. I’m passionate to make <br/> other people’s lives better through technology and am <br/> constantly looking to learn new things every day</p>
          <Button href="https://github.com/ARUNBALACHOCKALINGAM" elevation={4} className={classes.button}  style={{marginTop:"25px",backgroundColor:primary,fontFamily:"'Montserrat', sans-serif",color:"black"}} variant="contained"><h1 className={classes.githubtext}>See GitHub Profile</h1><img className={classes.githubicon} src={GitHubIcon} alt="githubicon" /></Button><br/>
        
      </div>
      <div className={classes.imgcontainer}>
          <img alt="illustration" style={{textAlign:"center"}} className={classes.bg} src={coder}/>
      </div>
  </div>
    </>
  )
}

export default About