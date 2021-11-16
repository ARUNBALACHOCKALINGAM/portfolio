import React from "react";

import { Card } from "@mui/material";

import classes from "../styles/Skillcard.module.css"

export default function Skillcard({skill}) {

   
  return (
    <>
    
       <div className={classes.skillcontainer}>   
         <div className={classes.cardone}>
         <div className={classes.image}>
        <img style={{color:"#0596ff"}} className={classes.imag} src={skill.image} alt={skill.title} />
      </div>

      <h4 className={classes.title}>{skill.title}</h4>
      
      <ul className={classes.skillslst}>
      
        {skill.skills.map((skill) => (
          <li key={skill}> {skill} </li>
        ))}
      </ul>
         </div>
         <div className={classes.cardtwo} style={{width:"400px",borderRadius:"10px",boxShadow: "inset -7px -11px 11px 3px rgb(0 0 0 / 8%), inset 2px 4px 10px 2px #fff"}}>
         <div className={classes.image}>
        <h1 className={classes.learning}>LEARNING</h1>
      </div>
      <ul className={classes.skillslst}>
        {skill.learning.map((skill) => (
          <li key={skill}> {skill} </li>
        ))}
      </ul>
         </div>
       </div>
    </>
  );
}