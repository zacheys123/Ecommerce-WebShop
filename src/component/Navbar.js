import React, { useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import {NavbarWrapper,NavbarList,ListItem,H3,Span,Dropdown} from '../styled/NavbarWrapper'
import {Avatar} from "@mui/material"
import ContactIcon from '@mui/icons-material/EmailRounded';
import AboutIcon from '@mui/icons-material/GroupRounded';
import SignupIcon from '@mui/icons-material/PersonAddAltRounded';
import logo from '../assests/commerce.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/HomeTwoTone';
import LoginIcon from '@mui/icons-material/LockOpenRounded';
import {throttle} from 'lodash'
import useStyles from './navbar/styles'
import {Container,Grid,Typography,AppBar,Toolbar} from '@mui/material'

export default function Navbar(props){
const[showprofile,setProfile]=useState(false);
const classes=useStyles()

const profileref=useRef(null)


      const  mystyle={
            color: 'yellowgreen',
            fontFamily:'roboto',
            textDecoration:'none',
            padding:'5px',
            fontWeight:'400'
        }
       const  mylist={
            listStyleType:'none',
            marginLeft:'-1rem',
            fontSize:'14px',
            marginTop:'.6rem',
           
         }
          const   mygithub={
            listStyleType:'none',
            marginLeft:'-2.5rem',
            color:'yellowgreen !important',
            fontSize:'14px',
            marginTop:'.6rem',
       
         }
      const mylinks={
            color:'darkviolet',
            textDecoration:'none',
            transition:'all 0.8s ease-in-out'

         }

    return (

   <Container className={classes.root}>
   <AppBar className={classes.container}>
   <Toolbar> 
   <Grid>
  <nav>
  <NavbarList className="navbar mx-auto d-flex       justify-content-between align-items-center">
    
     <Grid item xs={12} sm={6} lg={3}  className="left__list align-items-center d-flex justify-content-between">
<Link style={{textShadow:'1px 1px 1px rgba(115, 215, 255, 0.5), 11px -1px 12px yellow,1px 1px 1px violet',textDecoration:'none',fontWeight:'bolder',}} to='/'>
   <Typography variant='h4'  className={classes.navbrand}>
   <img src={logo} alt="Marketplace" height='70px' width='70px' style={{borderRadius:'50%',background:'yellow',marginBottom:'-.8rem'}} />
   ed@Keys Market
   </Typography>
   </Link>
   <Typography variant="" gutterBottom>
        <ListItem className="item">
        <Link style={mystyle} to="/">Home</Link>
         <Span><HomeIcon sx={{'color':'darkgreen'}}/></Span>
           </ListItem>
   </Typography>
     
     <Typography>  
       <ListItem > 
        <Link className="item" style={mystyle} to="pages/contact">
        Contact
        <Span><ContactIcon sx={{'color':'darkgreen'}}/></Span>
        </Link>
        </ListItem >
        </Typography>
   <Typography>
        <ListItem className="item">
        <Link style={mystyle} to="pages/about">
        About Us
        <Span><AboutIcon sx={{'color':'darkgreen'}}/></Span>
        </Link>
        </ListItem>
    </Typography>
   </Grid>

        <Grid item xs={12} sm={6} lg={3} className="d-flex justify-content-between align-items-center right__list">
    <Typography>
        <ListItem className="item">
        <Link style={mystyle} to="pages/signup">
        Signup
        <Span><SignupIcon sx={{'color':'darkgreen'}}/></Span>
        </Link>
        </ListItem>
    </Typography>
    <Typography>
       <ListItem>
         <Link style={mystyle} to="pages/logout">
        Logout
        </Link>
      </ListItem>
    </Typography>

    <menu>
            <Avatar onClick={()=>{setProfile(true)}} src={props.firstname} sx={{'marginLeft':'9rem','marginRight':'-1rem','height':'4rem','width':'4rem','cursor':'pointer'}}/>
            {showprofile &&
         <Dropdown className='dropdown' >
          <ul>
          <li style={mylist} ><Link style={mylinks} to='profile'>View Profile</Link></li>
          <li style={mylist} ><Link style={mylinks}  to='Email'>Email someone</Link></li>
          <div>
          <li style={mygithub} ><span><GitHubIcon/></span><Link style={mylinks}  to='pages/github'>Connect github</Link></li>
          </div>
               <div>
          <li><Link style={mylinks}  to='pages/display'>Show Data</Link></li>
          </div>
               <div className='dropdown-divider text-grey' style={mylist} ></div>
          <li style={mylist} ><Link style={mylinks}    to='Logout'>Logout</Link></li>
  
          </ul>
          </Dropdown>
            }
    </menu>
   </Grid>
  
        </NavbarList>
        </nav>
</Grid>
</Toolbar>
</AppBar>
</Container>

    )
  }
