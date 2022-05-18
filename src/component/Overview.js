import React,{useState,useEffect,useContext}  from 'react'
import { Span,H1,
  Cart} from '../styled/HomeWrapper'
import {Typography,Badge,IconButton,Grid} from '@mui/material'
import {Link,useLocation} from 'react-router-dom'
 import ShopIcon from '@mui/icons-material/ShoppingCart';
import {userContext} from './userContext'
import RemoveCartIcon from '@mui/icons-material/RemoveShoppingCart';
const myspan={
   fontSize:'1.3rem',
   color:'black',
   fontWeight:'bolder',
   margin:'.21rem',
   paddingBottom:'.1rem',
paddingTop:'.1rem',
paddingRight:'.4rem',
paddingLeft:'.4rem',
borderRadius:'50%',
cursor:'pointer'
 }

export default function Overview(props) {
  const location=useLocation()
  const {total} =useContext(userContext)
    let date=new Date()
    const[time,setTime]=useState(date.toLocaleTimeString());
    const mytimer=()=>{
    let date=new Date();
    setTime(date.toLocaleTimeString())
  }

useEffect(()=>{
 setInterval(mytimer,1000)
  return ()=>{
    clearInterval()
  }
},[time])

  return (
      <>
 <div style={{borderBottom:'2px solid lightgrey',minHeight:'3rem'}} className="header d-flex mr-5 justify-content-between align-items-center">
      <div className="left__header d-flex justify-content-between align-items-center">
       <H1>MarketPlace Overview</H1>
      </div>
      <div className="right__header d-flex justify-content-between align-items-center">
     {location.pathname==='/' &&
    <IconButton component={Link} to='pages/cart' color='inherit' sx={{'marginRight':'1rem'}}>
      <Badge badgeContent={total} color='secondary' >
      <ShopIcon  sx={{'fontWeight':'bolder','fontSize':'2rem','cursor':'pointer'}}/>
      </Badge>
    </IconButton>
    }
       <Typography style={{fontWeight:'bold',marginRight:'1rem'}} variant='p' color='inherit'>{time}</Typography>
      </div>
      </div>
        </>
  )
}
