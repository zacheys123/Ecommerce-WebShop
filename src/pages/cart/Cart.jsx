import React,{useContext} from 'react'
import {Grid,Container,Button,Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import {userContext} from '../../component/userContext'
import useStyles from './Cartstyles'
import Sidebar from '../../component/Sidebar'
import Overview from '../../component/Overview'
import CartItem from './cartItem/CartItem'
function Cart() {
     const classes=useStyles()
       const{cart}=useContext(userContext)
     const isempty=!cart.line_items.length
    if(!cart.line_items)return 'loading...'
  return (
      <React.Fragment>
    <div className={classes.root}>
       <div className={classes.itemspage}>
          <div className={classes.overview}>
      <Overview  />
      </div>
      <div className={classes.maincontainer}>
      <div className={classes.left__sidebar}>
      <h1>Hello left</h1>
      </div>
      <div className={classes.shoppingcart}>
    <Typography variant='h4'></Typography>
    {isempty ? <EmptyCart /> : <FilledCart cart={cart}/>}
     </div>
    <div className={classes.right__sidebar}>
    <h1>Hello right</h1>
    </div>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
}
 const EmptyCart=()=>{
   const classes=useStyles()
   return(
   
  <div className={classes.empty}>
    <Typography variant='h5'><code style={{color:'green'}}>Cart Is Empty,Click to Add  Cart</code></Typography>  
  <Link style={{textDecoration: 'none',maxWidth:'fitContent'}} to='/'>
<ShoppingCartIcon sx={{'fontSize':'5rem','color':'purple'}}/>
</Link>
</div>

   ) 
}

const FilledCart=({cart})=>{
     const classes=useStyles()
   const{handleEmptyCart} =useContext(userContext)
  return(
        <>
    <Grid container spacing={2}> 
    {cart.line_items.map((item)=>{
    return <Grid key={item.id} item xs={12} sm={6} md={3.7} lg={3}>
        <CartItem item={item}/>
    </Grid>
    })}
    </Grid>

  <div className="d-flex justify-content-between my-4 w-100 ">
       <div>
           <Typography variant="h4">
            Subtotal:{cart.subtotal.formatted_with_symbol}
           </Typography> 
           </div>
           <div>
           <Button style={{marginRight:'.9rem'}} size="large" type="button" variant="contained" color="secondary" onClick={()=>handleEmptyCart}>Empty Cart</Button> 
            <Button className='' size="large" type="button" variant="contained" color="primary">Checkout</Button>   
            </div> 
                </div>
                </>
                )
}

export default Cart
