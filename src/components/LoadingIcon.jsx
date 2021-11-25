import React, { useEffect } from "react"
import classes from '../styles/LoadingIcon.module.css'
import { motion } from "framer-motion"

function LoadingIcon() {
  const LoaderVariants= {
    animationTwo:{
      scale:[0.5,0.8,0.5],
  
    }
  }
  const LoadertwoVariants= {
    animationOne:{
      scale:[0.5,1,0.5],
      opacity:[0,1],
      
    }
   }
  return (
    <>
      <motion.div className={classes.bg} transition={{ delay: 2}}  animate={{y:[0,-1000]}}>
        <motion.div  transition={{ duration: 1, repeat: Infinity }} className={classes.loader} variants={LoaderVariants} animate="animationTwo"></motion.div>
        <motion.div  transition={{ duration: 2, repeat: Infinity,ease:"easeInOut" }} className={classes.loader} variants={LoadertwoVariants} animate="animationOne"></motion.div>
      </motion.div>
    </>
  )
}

export default LoadingIcon


