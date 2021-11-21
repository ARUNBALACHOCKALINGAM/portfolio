import React, {  } from "react"


//styles
import classes from "../styles/Project.module.css"
//material ui comps
import { Card } from "@mui/material";
import Projectcard from "./Projectcard";

import { projects } from "../config/projects";

function Project() {
  return (
    <>
    <div className={classes.uppercurve}></div>
   <Card className={classes.card} elevation={4} style={{marginTop:"0px",backgroundColor:"#0596ff"}}>
         <h1 className={classes.projectsectiontitle}>MY PROJECTS</h1>
   </Card> 
   <div className={classes.lowercurve}></div>
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