import React ,{useState,useEffect,useContext} from 'react'
import {HomeWrapper,
  ProductsPage,
  } from '../styled/HomeWrapper'
import Overview from '../component/Overview'
import {Grid} from "@mui/material"
import {userContext} from '../component/userContext'
import useStyles from './Productsfolder/styles';
import Product from './Productsfolder/product/Product'
import Sidebar from '../component/Sidebar' 
import { Link } from 'react-router-dom'

export default function Home() {
  const[prod,setProd]=useState([])
    const {products,loading}=useContext(userContext);
  useEffect(() =>{setProd(products)},[products])

  const classes=useStyles()
  return (
    <>
    <div className={classes.toolbar}></div>
    <HomeWrapper>
       <Sidebar />
      <ProductsPage>
      <div style={{borderBottom:'1px solid light grey',padding:'-1rem'}}>
        <Overview  />
      </div>
     <div className='dropdown-divider'></div>
      <main className={classes.content}>
      <div className={classes.toolbar} />
<Grid container justify="center" className={classes.root} spacing={4}>
{prod && prod.map((product)=>{
  return <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} >
<Product {...product}/>
       
    </Grid>
    })}
</Grid>
</main>
      </ProductsPage>
    </HomeWrapper>
    </>
  )
}
