import React, { useEffect } from "react"

import classes from '../styles/LoadingIcon.module.css'

function LoadingIcon() {
  return (
    <>
      <div className={classes.spinner}></div>
    </>
  )
}

export default LoadingIcon