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
import {Container,MenuItem,Menu,Typography,AppBar,Toolbar} from '@mui/material'

export default function Navbar(props){
const[showprofile,setProfile]=useState(false);
const classes=useStyles()

const profileref=useRef(null)


      const  mystyle={
            color: 'violet',
            fontFamily:'sans',
            textDecoration:'none',
            padding:'5px',
            fontWeight:'bold'
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
       
<div className={classes.container}>
   <Link style={{textShadow:'1px 1px 1px rgba(115, 215, 255, 0.5), 11px -1px 12px yellow,1px 1px 1px violet',textDecoration:'none',fontWeight:'bolder',}} to='/'>
   <Typography variant='h4'  className={classes.navbrand}>
   <img src={logo} alt="Marketplace" className={classes.img} height='70px' width='70px' style={{borderRadius:'50%',background:'yellow',marginBottom:'-.8rem'}} />
   <em className={classes.text}> ed@Keys Market</em>
   </Typography>
   </Link>
   
<ul style={{justifyContent:'flex-end'}} className='d-flex align-items-center'>
   <Typography variant="" color='violet' gutterBottom>
        <li className={classes.item}>
        <Link style={mystyle} to="/">Home</Link>
         <Span><HomeIcon sx={{'color':'darkgreen'}}/></Span>
           </li>
   </Typography>

     <Typography>  
       <li  className={classes.item}> 
        <Link className={classes.item}style={mystyle} to="pages/contact">
        Contact
        <Span><ContactIcon sx={{'color':'darkgreen'}}/></Span>
        </Link>
        </li >
        </Typography>
   <Typography>
        <li className={classes.item}>
        <Link style={mystyle} to="pages/about">
        About Us
        <Span><AboutIcon sx={{'color':'darkgreen'}}/></Span>
        </Link>
        </li>
    </Typography>
    <Typography>
        <li  className={classes.item}>
        <Link style={mystyle} to="pages/signup">
        Signup
        <Span><SignupIcon sx={{'color':'darkgreen'}}/></Span>
        </Link>
        </li>
    </Typography>
    <Typography>
       <li  className={classes.item}>
         <Link style={mystyle} to="pages/logout">
        Logout
        </Link>
      </li>
    </Typography>

    <menu className={classes.menu}>
            <Avatar onClick={()=>{setProfile(true)}} src={props.firstname} sx={{'marginLeft':'2rem','marginRight':'-1rem','height':'4rem','width':'4rem','cursor':'pointer'}}/>
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
</ul>
</div>


    )
  }
