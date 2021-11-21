import React from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



//styles
import classes from "../styles/Projectcard.module.css"


function Projectcard(props) {
  return (
    
    <Card className={classes.card}>
    <CardMedia
    
      component="img"
      width="100"
      height="200"
      image={props.image}
      alt={props.alt}
    />
    <CardContent>
      <Typography classes={classes.title} gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography classes={classes.desc}  variant="body2" color="text.secondary">
       {props.description}
      </Typography>
    </CardContent>
    <CardActions>
      {console.log(props.link)}
      <Button  href={props.repolink} size="small">VIEW CODE</Button>
      {props.link!=="" ? <Button href={props.link} size="small">VIEW SITE</Button> : <Button style={{color:"#d32f2f",}} size="small">Yet to deploy</Button>}
    </CardActions>
  </Card>
  
  )
}

export default Projectcard