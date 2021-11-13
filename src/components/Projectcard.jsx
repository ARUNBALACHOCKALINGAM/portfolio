import React, { useEffect } from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { projects } from "../config/projects";
import { maxWidth } from "@mui/system";


//styles
import classes from "../styles/Projectcard.module.css"


function Projectcard(props) {
  return (
    
    <Card className={classes.card}>
    <CardMedia
      component="img"
      height="200"
      image={props.image}
      alt={props.alt}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {props.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">VIEW CODE</Button>
      <Button size="small">VIEW SITE</Button>
    </CardActions>
  </Card>
  
  )
}

export default Projectcard