import React, { useEffect } from "react"
import classes from '../styles/LoadingIcon.module.css'
import { motion } from "framer-motion"

function LoadingIcon() {
  const LoaderVariants= {
   animationOne:{
      x:[-20,20],
      y:[0,-30],
      transition:{
        x:{
          yoyo:Infinity,
          duration:0.5,
        },
        y:{
          yoyo:Infinity,
          duration:0.25,
          ease:'easeOut',
        }
      }
   }
  }
  return (
    <>
      <motion.div className={classes.loader} variants={LoaderVariants} animate="animationOne"></motion.div>
    </>
  )
}

export default LoadingIcon


