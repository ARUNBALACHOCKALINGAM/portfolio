import React from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



//styles
import classes from "../styles/Projectcard.module.css"
import { AnimationOnScroll } from "react-animation-on-scroll";


function Projectcard(props) {
  return (
    <AnimationOnScroll  animateIn="animate__bounceIn" animateOut="animate_fadeOut">
    <Card style={{overflow:"scroll"}}className={classes.card}>
    <CardMedia
      component="img"
      width="100"
      height="200"
      image={props.image}
      alt={props.alt}
    />
    <CardContent>
      <Typography style={{ color: "#000000",fontSize: "1.5rem",letterSpacing: "5px",fontFamily:"Montserrat,sans-seriff",fontWeight:"600"}} className={classes.title} gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography style={{fontFamily:"Montserrat,sans-seriff"}} className={classes.desc}  variant="body2" color="text.secondary">
       {props.description}
      </Typography>
    </CardContent>
    <CardActions>
      {console.log(props.link)}
      <Button  style={{fontFamily:"Montserrat,sans-seriff"}}  href={props.repolink} size="small">VIEW CODE</Button>
      {props.link!=="" ? <Button  style={{fontFamily:"Montserrat,sans-seriff"}} href={props.link} size="small">VIEW SITE</Button> : <Button style={{color:"#d32f2f",fontFamily:"Montserrat,sans-seriff"}} size="small">Yet to deploy</Button>}
    </CardActions>
  </Card>
  </AnimationOnScroll>
  
  )
}

export default Projectcard