import React, { useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import {H3,Span,Dropdown,Li} from '../styled/NavbarWrapper'
import {Menu,Close,EmailRounded,PersonAddAltRounded,GitHub,GroupRounded,HomeTwoTone} from '@mui/icons-material';
import logo from '../assests/commerce.jpg'
import useStyles from './navbar/styles'
import {Container,Typography,IconButton,Avatar,Button} from '@mui/material'

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

export default function Navbar(props){
const[showprofile,setProfile]=useState(false);
const[isresponsive,setresponsive]=useState(false);
const[isopen,setOpen]=useState(false);
const[issettings,setSettings]=useState(false);
const classes=useStyles()

const profileref=useRef(null)


      
    return (
       
<div className={classes.container}>
   <Link style={{textShadow:'1px 1px 1px rgba(115, 215, 255, 0.5), 11px -1px 12px yellow,1px 1px 1px violet',textDecoration:'none',fontWeight:'bolder',}} to='/'>
   <Typography variant='h4'  className={classes.navbrand}>
   <img src={logo} alt="Marketplace" className={classes.img} height='70px' width='70px' style={{borderRadius:'50%',background:'yellow',marginBottom:'-.8rem'}} />
   <em className={classes.text}> ed@Keys Market</em>
   </Typography>
   </Link>
<ul style={{justifyContent:'flex-end'}} className='d-flex justify-content-md-base align-items-center my-3 '>
   <Typography variant="" color='violet' gutterBottom>
        <li className={classes.item}>
        <Link style={mystyle} to="/"></Link>
         <Span><HomeTwoTone sx={{'color':'wheat'}}/></Span>
           </li>
   </Typography>

     <Typography>  
       <Li  className={classes.item}> 
        <Link className={classes.item} style={mystyle} to="pages/contact">
        Contact
        <Span><EmailRounded sx={{'color':'wheat'}}/></Span>
        </Link>
        </Li >
        </Typography>
   <Typography>
        <Li className={classes.item}>
        <Link style={mystyle} to="pages/about">
        About Us
        <Span><GroupRounded sx={{'color':'wheat'}}/></Span>
        </Link>
        </Li>
    </Typography>
    <Typography>
        <li  className={classes.item}>
        <Link style={mystyle} to="pages/signup">
       <Button   sx={{'borderColor':'yellow','color':'lightgreen','fontSize':'1rem','fontWeight':'bold'}} variant="outlined" > Signup</Button>
        </Link>
        </li>
    </Typography>
    <Typography>
       <Li  className={classes.item}>
         <Link style={mystyle} to="pages/logout">
        Logout
        </Link>
      </Li>
    </Typography>

    <menu className={classes.menu}>
    {issettings &&
    <div className={classes.settings}>
    Open settings</div>
    }
            <Avatar onMouseOver={()=>setSettings(true)}
            onMouseOut={()=>setSettings(false)} onClick={()=>{setProfile(true)}} src={props.firstname} sx={{'marginLeft':'2rem','marginRight':'-1rem','height':'4rem','width':'4rem','cursor':'pointer',   transition: 'all 1.4s  ease-in-out'}}/>
            {showprofile &&
         <Dropdown className='dropdown' >
          <ul>
          <li style={mylist} ><Link style={mylinks} to='profile'>View Profile</Link></li>
          <li style={mylist} ><Link style={mylinks}  to='Email'>Email someone</Link></li>
          <div>
          <Li style={mygithub} ><span><GitHub/></span><Link style={mylinks}  to='pages/github'>Connect github</Link></Li>
          </div>
               <div>
          <Li><Link style={mylinks}  to='pages/display'>Show Data</Link></Li>
          </div>
               <div className='dropdown-divider text-grey' style={mylist} ></div>
          <Li style={mylist} ><Link style={mylinks}    to='Logout'>Logout</Link></Li>
  
          </ul>
          </Dropdown>
            }
    </menu>
</ul>

<em  className={classes.modalopen}>{isopen ? <Close sx={{'color':'white','fontSize':'1.6rem'}} onClick={()=>{setOpen(false)}} />  :<Menu  onClick={()=>{setOpen(true)}} sx={{'fontSize':'1.6rem','color':'wheat'}}/> }
</em>
          
</div>


    )
  }
