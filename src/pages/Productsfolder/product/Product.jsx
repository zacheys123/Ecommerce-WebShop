import React,{useState,useEffect,useContext} from 'react';
import {Typography,CardMedia,CardActions,Card,CardContent,IconButton,Button,Badge} from '@mui/material'
import useStyles from './styles'
import ShopIcon from '@mui/icons-material/ShoppingCart';
import {userContext} from '../../../component/userContext'
export default function Product({name,description,price,assets,id}) {
    const {cart,handleAddCart,total} =useContext(userContext);
  const classes=useStyles()
  console.log(total)
  const[image,setImage]=useState('')
  useEffect(()=>{
    setImage(()=>assets.map((item)=>item.url))
  },[])
  return (
<Card className={classes.root}>
  <CardMedia sx={{'paddingTop':'56.25%','height':'50px'}} 
  image={`${image}` || {name}} title={name}/>
<CardContent className={classes.cardContent}>
<Typography variant="h7"  color='info'>
{name}
</Typography>
<Typography variant="h7"  color='info'>
{price.formatted_with_symbol}
</Typography>
</CardContent>
<Typography style={{marginLeft:'.7rem'}} dangerouslySetInnerHTML={{__html: description}} variant='body2' color='textSecondary'/>
<CardActions className={classes.cardActions}>
<Typography gutterBottom>
<Button size="small" variant="contained">Add to Cart</Button>
</Typography>
<IconButton onClick={()=>{handleAddCart(id,1)}}>
<Badge  color='warning'> 
<ShopIcon/>
</Badge>


</IconButton>
</CardActions>
</Card>
  )
}
