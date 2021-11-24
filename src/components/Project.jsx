import React, {  } from "react"


//styles
import classes from "../styles/Project.module.css"
//material ui comps
import { Card } from "@mui/material";
import Projectcard from "./Projectcard";
import { motion } from "framer-motion"

import { projects } from "../config/projects";

function Project() {
  return (
    <>
    <motion.div   animate={{ width:[0,600,1800],opacity: [0,1]}}
  transition={{
    delay: 1,
    x: { type: "spring", stiffness: 100 },
    default: { duration: 2 },
  }} className={classes.uppercurve}></motion.div>
   <Card className={classes.card} elevation={4} style={{marginTop:"0px",backgroundColor:"#0596ff"}}>
         <h1 className={classes.projectsectiontitle}>MY PROJECTS</h1>
   </Card> 
   <motion.div animate={{ width:[0,600,1800],opacity: [0,1]}}
  transition={{
    delay: 1,
    x: { type: "spring", stiffness: 100 },
    default: { duration: 2 },
  }} className={classes.uppercurve} className={classes.lowercurve}></motion.div>
     <div className={classes.projectcards}>
       {projects.map((project)=>{
         return (
          <Projectcard image={project.image} title={project.title} description={project.description} link={project.link} repolink={project.repolink}/>
         )
       })}
        
     </div>
    </>
  
  )
}

export default Project