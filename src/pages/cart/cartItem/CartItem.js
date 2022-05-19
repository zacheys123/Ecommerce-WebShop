import React,{useContext,useState,useEffect} from 'react'
import {Card,Typography,CardMedia,CardContent,CardActions,Button} from '@mui/material'
import { userContext } from '../../../component/userContext'
import useStyles from './Itemstyles'
export default function CartItem({item}) {
      const classes=useStyles()
        const{handleUpdateCart,handleRemoveCart} =useContext(userContext)
         const[image,setImage]=useState('')
  useEffect(()=>{
    setImage(()=>item.image.url);
  },[])
  return (
    <Card className={classes.root}>
  <CardMedia image={`${image}` || 'https://media.istockphoto.com/photos/nairobi-kenya-picture-id1299026534?b=1&k=20&m=1299026534&s=170667a&w=0&h=ZkZualo_Q0gIkjsfOZkV3WrXpNyrMfPGdmSR4_uXVRY='} className={classes.media}/>
    <CardContent className={classes.content}>
    <Typography variant='h5'>{item.name}</Typography>
       <Typography variant='h5'>{item.price.formatted_with_symbol}</Typography>
    </CardContent>
    <CardActions gutterBottom>
    <Button variant='outlined' size="small" onClick={()=>{handleUpdateCart(item.id,item.quantity - 1)}} color='inherit'>-</Button>
    <Typography>{item.quantity}</Typography>
    <Button variant='outlined' type='button' onClick={()=>{handleUpdateCart(item.id,item.quantity + 1)}} size="small"  color='inherit'>+</Button>
    <Button variant='contained' type='button'  onClick={()=>{handleRemoveCart(item.id)}}  color='secondary'>Remove</Button>
    </CardActions>
    </Card>
  )
}
