import React ,{useState,useRef,useEffect} from 'react'
import {SidebarBody,P,
    SideNavList,
    SideNavItems,Form,Formbutton,
    FormWrapper,SidePreview,Preview} 
    from '../styled/SidebarBody'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Link} from 'react-router-dom'
import { IconButton ,Typography,Avatar} from '@mui/material';
import {data} from '../data'
import ContactIcon from '@mui/icons-material/EmailRounded';
export default function Sidebar({userdata}){
  
  const[islist,setList]=useState(false)
    const[laptop,setLaptop]=useState(data)


    const display=(event)=>{
        event.target.style.cursor='pointer';
        event.target.children[0].style.opacity='1';
        event.target.children[0].style.marginLeft='3rem';
         event.target.style.textDecoration='underline';
    }

        const displayOut=(event)=>{
        event.target.style.cursor='pointer';
        event.target.children[0].style.opacity='0';
        event.target.children[0].style.marginLeft='1rem';
         event.target.style.textDecoration='none';
    }

const showMenu = (event)=>{
    if(event.type ==='click'){
        event.preventDefault();
        event.target.style.transform='rotate(360deg)'
        setList(true)
    } 
}
  useEffect(() => {
        setTimeout(() => {
         setList(true)
        }, 2500000000);
    }, [])

const closeMenu = (event)=>{
    if(event.type ==='click'){
        event.preventDefault();
        setList(false);
    }
 
}
    return(
        <SidebarBody>
       {userdata && userdata.map((user)=>{
           return <div key={user.id}>
            <h1>{user.firstname}</h1>
            </div>
       })}
        <span>
        {!islist ?
        <IconButton onClick={showMenu}>   
         <MoreVertIcon  sx={{'color':'rgb(32, 53, 35)','background':'wheat','border-radius':'25px','fontSize':'2.3rem','padding':'4px','transitionProperty':'all','transitionTimingFunction':'ease-in-out','transitionDuration':'.1s','transitionDelay':'.7s'}}/>
           </IconButton>
           :
         <IconButton onClick={closeMenu}>   
         <MoreHorizIcon  sx={{'color':'rgb(32, 53, 35)','background':'wheat','border-radius':'25px','fontSize':'2.3rem','padding':'4px'}}/>
           </IconButton>
        }
         </span>
       <div style={{borderBottom:'1px solid rgb(39, 39, 25)',marginTop:'.7rem'}}></div>
        {islist ?
        <SideNavList>
        <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >Whats  new ?
        <span >&#187;</span>
        </P>
        </SideNavItems>
               <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >Phonecases
        <span >&#187;</span>
   
        </P>
            </SideNavItems>
               <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >Laptops
        <span >&#187;</span>
     
        </P>
             </SideNavItems>
               <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut}>Recommended 
        <span >&#187;</span>
        
        </P>
            </SideNavItems>
               <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >New to this website??
        <span >&#187;</span>
    
        </P>
        </SideNavItems>
          <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >Food
        <span >&#187;</span>
        
        </P>
             </SideNavItems>
        <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >New features
        <span >&#187;</span>
        
        </P>
             </SideNavItems>
          <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >Computers
        <span >&#187;</span>
        </P>
             </SideNavItems>
           <SideNavItems>
          <P onMouseOver={display} onMouseOut={displayOut} >Desktops
        <span >&#187;</span>
        </P>
             </SideNavItems>
               <SideNavItems>
          <h6 style={{color: 'white'}} >Contact Us <ContactIcon sx={{}}/>
          </h6>
             </SideNavItems>
               <SideNavItems>
          <P >Faq </P>
             </SideNavItems>
                
        </SideNavList>
        :
        <FormWrapper>
        <Form action="" className="form ">
        <Avatar src='' sx={{'marginTop':'-1.7rem','width':'4rem','height':'4rem','cursor':'pointer','cursor':'pointer','marginLeft':'35%','marginLRight':'29%','marginBottom':'8rem'}}/>
        <div style={{marginLeft:'.61rem',maxWidth:'92%',marginTop:'-5rem'}} className="input-group ">
        <div className="input-group-prepend">
        <span className="input-group-text ">&#64;</span>
        </div>
        <input  type="text" className="form-control" Placeholder="Email address"/>
        </div>
        <Formbutton type='submit' className="btn btn-primary">Send</Formbutton>
        <Link style={{textAlign:'center'}} to='pages/signup'>Create Account??</Link>
        </Form>

        <SidePreview>
        {laptop && laptop.map((laptopData)=>{
        return  <Preview key={laptopData.id}>
         <img src={laptopData.img} alt="" width="90px" height="120px" />
         <Typography variant="" color="primary">
          <h4 style={{fontSize:'.71rem'}}>{laptopData.name}</h4>
          </Typography>
           <Typography variant='' nowrap='true'>
           <h5 style={{fontSize:'.51rem',color:'white'}}>{laptopData.description}</h5>
           </Typography>
           <Typography>
           <h5 style={{fontSize:'.51rem',color:'white'}}>{`price:${laptopData.price}`}</h5>
           </Typography>
            
        </Preview>
        })}
        </SidePreview>
        
        </FormWrapper>
        }
        </SidebarBody>
    )
}


