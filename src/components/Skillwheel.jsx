import React, { useState } from "react"
import classes from "../styles/Skillwheel.module.css"



//material components
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function Skillwheel(props) {

  const [skill,setSkill]= useState("FRONT END");
  props.onchange(skill);

  function handleNext(){
    if(skill==="FRONT END"){
        setSkill("BACK END")
    }else if(skill==="BACK END"){
      setSkill("DESIGN")
    }else if(skill==="DESIGN"){
      setSkill("FRONT END")
    }

    props.onchange(skill);
   
  }

  function handlePrev(){
    if(skill==="FRONT END"){
      setSkill("BACK END")
  }else if(skill==="BACK END"){
    setSkill("DESIGN")
  }else if(skill === "DESIGN"){
    setSkill("FRONT END")
  }

  props.onchange(skill);
  }

  return (
    <>
    <div className={classes.wheelcontainer}>
      <div className={classes.wheel}>  
      </div>
      <div className={classes.skilltoggle}>
        <ArrowLeftIcon onClick={handlePrev} style={{width:"60px",height:"60px",marginLeft:"50px",position:"relative",left:"10px",color:"#0596ff"}}/>
       <h1 className={classes.skilltogglename} style={{minWidth:"135px",letterSpacing:"1px",fontWeight:"800",fontSize:"1.375rem",display:"inline-block",whiteSpace:"nowrap",textAlign:"center"}}>{skill}</h1>
       <ArrowRightIcon onClick={handleNext} style={{width:"60px",height:"60px",marginLeft:"10px",position:"relative",left:"-10px",color:"#0596ff"}}/>,
      </div>
      </div>
      <div className={classes.lefticon}>
      <ArrowLeftIcon onClick={handlePrev} style={{width:"100px",height:"100px",marginLeft:"0px",position:"relative",bottom:"-250px"}}/>
       </div>
      <div className={classes.righticon}>
       <ArrowRightIcon onClick={handleNext} style={{width:"100px",height:"100px",marginLeft:"0px",position:"relative",bottom:"-250px"}}/>
       </div>

    </>
  )
}

export default Skillwheel