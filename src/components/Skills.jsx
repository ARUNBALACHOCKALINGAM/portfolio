import React, { useState } from "react";

import Skillcard from "./Skillcard";

import {frontend,backend,design} from "../config/skills";

import Skillwheel from "./Skillwheel";

import { Card } from "@mui/material";

import classes from "../styles/Skills.module.css"


export default function Skills() {

  const [skillname,setSkill] = useState("FRONT END");

  function handleChange(skillname){
        setSkill(skillname);
  }

  return (
   <>
   <div className={classes.uppercurve}></div>
   <Card className={classes.card}  style={{backgroundColor:"#0596ff"}}>
     <h1 className={classes.skillssectiontitle}>MY SKILLS</h1>
   </Card>
   <div className={classes.lowercurve}></div>
    <section className={classes.skills} id="skills">
      

      <Skillwheel onchange={handleChange}/>
    
      <div className={classes.skillslist}>
        {skillname==="FRONT END" ? frontend.map((skill) => (
          <Skillcard skill={skill} key={skill.title} skillname={skillname} />
        )):""}
         {skillname==="BACK END" ? backend.map((skill) => (
          <Skillcard skill={skill} key={skill.title} skillname={skillname} />
        )):""}
          {skillname==="DESIGN" ? design.map((skill) => (
          <Skillcard skill={skill} key={skill.title} skillname={skillname} />
        )):""
        }

      </div>
    </section>
    </>
  );
}