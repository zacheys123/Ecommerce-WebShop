import React ,{useState,useEffect,useContext} from 'react'
import {HomeWrapper,
  ProductsPage,
  } from '../styled/HomeWrapper'
  import MoreVertIcon from '@mui/icons-material/MoreVert';
import Overview from '../component/Overview'
import {Grid} from "@mui/material"
import {userContext} from '../component/userContext'
import useStyles from './Productsfolder/styles';
import Product from './Productsfolder/product/Product'
import Sidebar from '../component/Sidebar' 
import { Link } from 'react-router-dom'
import {Box} from "@mui/material"
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
    {ismobile ? 
      <div className={classes.mobilenavbar}>
         
      </div>
      :
       <Sidebar />
    }
       </div>
       <div className={classes.prodpage}>
      <ProductsPage>
      <div style={{borderBottom:'1px solid light grey',padding:'1rem'}}>
        <Overview  />
      </div>
      <main className={classes.content}>
<Grid container justify="center" className={classes.root} spacing={3}>
{prod && prod.map((product)=>{
  return <Grid item xs={12} sm={6} md={3} lg={1.86} xl={1.86} key={product.id} >
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
