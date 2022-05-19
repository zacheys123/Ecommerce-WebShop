import React ,{useState,useEffect,useContext} from 'react'
import {HomeWrapper,
  ProductsPage,
  } from '../styled/HomeWrapper'
import Overview from '../component/Overview'
import {Grid,IconButton} from "@mui/material"
import {userContext} from '../component/userContext'
import useStyles from './Productsfolder/styles';
import Product from './Productsfolder/product/Product'
import Sidebar from '../component/Sidebar' 
import { Link } from 'react-router-dom'
import {EmailRounded,PersonAddAltRounded,GroupRounded,HomeTwoTone} from '@mui/icons-material';
export default function Home() {

   const[prod,setProd]=useState([])
  const[ismobile,setmobile]=useState(false)
    const {products,loading}=useContext(userContext);
  useEffect(() =>{setProd(products)},[products])

  const classes=useStyles()
  return (
    <>
    <div style={{marginTop:'.4rem'}}></div>
    <HomeWrapper>
    <div  className={classes.sidebar}>
    {ismobile && 
      <div className={classes.mobilenavbar}>
         <IconButton>
          <HomeTwoTone/>
         </IconButton>
         <IconButton>
          <GroupRounded/>
         </IconButton>
         <IconButton>
            <EmailRounded/>
         </IconButton>
         <IconButton>
          <PersonAddAltRounded/>
         </IconButton>
      </div>
    }
       <Sidebar />
       </div>
       <div className={classes.prodpage}>
      <ProductsPage>
      <div style={{borderBottom:'1px solid light grey',padding:'1rem'}}>
        <Overview  />
      </div>
      <main className={classes.content}>
<Grid container justify="center" className={classes.root} spacing={3}>
{prod && prod.map((product)=>{
  return <Grid item xs={12} sm={6} md={4.8} lg={3.75} xl={1.86} key={product.id} >
<Product {...product}/>
       
    </Grid>
    })}
</Grid>
</main>
      </ProductsPage>
      </div>
    </HomeWrapper>
    </>
  )
}
