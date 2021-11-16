import React, { useEffect } from "react"

//styles
import classes from "../styles/Footer.module.css"

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub} from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";

//material-ui components
import {Card} from "@mui/material"

function Footer() {
  return (
    <>
  <Card style={{backgroundColor:"#0596ff"}} className={classes.card}>
        <h1 className={classes.thankyou} >THANKS FOR VISTING !</h1>
  <div  class="social-icons">
  <a class="social-icon social-icon--instagram">
  <FaInstagram/>
    <div class="tooltip">Instagram</div>
  </a>
  <a class="social-icon social-icon--github">
    <FaGithub/>
    <div class="tooltip">Github</div>
  </a>
  <a class="social-icon social-icon--twitter">
     <FaLinkedin/>
    <div class="tooltip">Linked In</div>
  </a>

  
</div>
      </Card>
      
    </>
  )
}

export default Footer