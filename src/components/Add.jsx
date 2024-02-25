
import { Card, Grid } from '@mui/material'
import axios from 'axios';
import React, { useState,useEffect } from 'react'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


      const Page = () => {
    var[products,setProducts]= useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
   .then((response)=>{
        console.log(response)
        setProducts(response.data);
    })
    .catch((error)=>console.log(error))
},[])
    return (
    <div style={{margin:'4%'}}> 
      
      <Grid container spacing={2}>
        {products.map((val,i)=>{
            return(
              
            <Grid item  xs={12} sm={6} md={4}>
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      sx={{height:140}}
        image={val.image}
        title={val.title}
       
        // image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.description}
        </Typography>
      </CardContent> 
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>
            )
        })}
      </Grid>
    </div>
 
  
  )
}

export default Page
