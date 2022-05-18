import React ,{useState,useReducer,useEffect,useContext} from 'react'
import {SignupWrapper,
  Choice,Form,Myform,DivH3,DivH2
  ,Forminput,Divbutton,Div} from '../styled/SignupWrapper'
  import {v4 as uuidv4} from 'uuid';
  import {Link} from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import Login from '../auth/Login'
import Modal from '../component/staticPages/Modal'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Display from '../component/staticPages/Display'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {userContext} from '../component/userContext'
import {reducer} from '../component/staticPages/reducer'

const mystyle={
  color:'lightblue',
  marginLeft:'4rem',
    margintop:'-3rem',
  textDecoration:'none'
}


const Signup = (props) => {

const showform=(ev)=>{
  ev.preventDefault()
dispatch('SHOW_FORM')

}

const hideform=(ev)=>{
  ev.preventDefault()
dispatch('HIDE_FORM')
}


// initializing the initial state object
const initialState = {
  userData:[],
  isError: false,
  isModal: false,
  modalContent:'', 
  isSign:false,
  ispassword:false
}

const[state,dispatch]=useReducer(reducer,initialState)
const[user,setUser]=useState(
  {
firstname:'',
lastname:'',
image:'',
country:'America',
username:'',
password:'',
confirmPassword:''
  }
  );
  

// function to update input value
const handleinput=(event)=>{
  
event.preventDefault();
const value=event.target.value;
const name=event.target.name;

setUser({...user,[name]:value});
}

    // generate a unique identifier
const uuid=(myuuid)=>{
  myuuid=uuidv4()
  return myuuid;
}
const handleSubmit=(ev)=>{
    ev.preventDefault();
if(user.firstname && user.lastname && user.username && user.country && user.password && user.confirmPassword){

    const newUser={...user,id:new Date().getTime().toString()}
    props.getUserData(state.userData);
    dispatch({type:'ADD_USER',payload:{newUser,password:user.password,confirmPassword:user.confirmPassword}})
    setUser(
  {
firstname:'',
lastname:'',
image:'',
country:'America',
username:'',
password:'',
confirmPassword:''
  }
  );
      }
    else{
    dispatch('ERROR');
      }
    }


 useEffect(()=>{
      localStorage.setItem('userData',JSON.stringify(state.userData));
   },[state.userData])


const closeModal=()=>{
  dispatch('closeModal');
}
  return (
     <>
 
     {!state.isSign ?
    <SignupWrapper>
         <Sidebar userdata={state.userData}/>
         <Form>
         <Choice>
       <DivH3 onClick={showform}>
         <h3 >Signup</h3>
         </DivH3>     
          <DivH2 onClick={hideform} >
            <h3 >Login</h3>
         </DivH2>
     
         </Choice>
      <Myform action="" onSubmit={handleSubmit} style={{Width:'100%'}}  className="row">
         <Div className="input-group ">
         <Forminput className="form-control" type="text" name='firstname' value={user.firstname} onChange={handleinput}  placeholder="First Name"/>
         </Div>
     <Div className="input-group ">
         <Forminput type="text" value={user.lastname} onChange={handleinput}  className="form-control"   name='lastname' placeholder="Last Name"/>
         </Div>
              <Div className="input-group ">
         <Forminput type="text" value={user.image} onChange={handleinput}  name='image' className="form-control"  placeholder="Enter Image Url"/>
         <div className="input-group-append">
        <span className="input-group-text ">.jpg,.png,htttp://</span>
        </div>
         </Div>
  
  <Div classsName="col-75 ">
    <Forminput type="text" value={user.country} onChange={handleinput}  className="form-control"  list='countries' name='country' placeholder="Country" />
    <datalist id="countries">
    <option value="Angola" />
   <option value="Algeria" />
   <option value="Albenia" />
   <option value="Burundi" />
   <option value="Bolivia" />
   <option value="Burkina faso" />
   <option value="Camerron" />
   <option value="Canada" />
   <option value="Colombia" />
   <option value="Denamark" />
   <option value="Ethiopia" />
   <option value="England" />
   <option value="Ecuador" />
   <option value="France" />
   <option value="Gambia" />
   <option value="Germany" />
   <option value="Guinea" />
   <option value="Ireland" />
   <option value="Jamaica" />
   <option value="Kenya" />
   <option value="Kuwait" />
   <option value="Libya" />
   <option value="Liberia" />
   <option value="Madagascar" />
   <option value="Namibia" />
   <option value="Pakistan" />
   <option value="Qatar" />
   <option value="Russia" />
   <option value="Serbia" />
   <option value="Tanazania" />
   <option value="Uruguay" />
   <option value="Venezuela" />
   <option value="Wales" />
   <option value="Yemen" />
    </datalist>
    </Div>
           <Div className="input-group ">
         <Forminput type="text" value={user.username} onChange={handleinput}  className="form-control"  name='username' placeholder="Username/Email"/>
         <div className="input-group-append">
         <span className="input-group-text">
         example@gmail.com
         </span>
         </div>
         </Div>
             <Div className="input-group">
         <Forminput style={{Width:'100%'}} type={state.ispassword ? "text" : "password"} name='password' value={user.password} onChange={handleinput}  className="form-control" placeholder="Password"/>
         </Div>
          <Div className="input-group">
         <Forminput type={state.ispassword ? "text" : "password"}  className="form-control" value={user.confirmPassword} onChange={handleinput}  name='confirmPassword' placeholder='Confirm Password'/>
           <div className="input-group-prepend">
        <span onClick={()=>dispatch("SHOW_CONFIRMPASSWORD")} className="input-group-text ">{state.ispassword ? <VisibilityIcon/> : <VisibilityOffIcon/> }</span>
        </div>
         </Div>
        
         {state.isModal &&
         <Modal modalContent={state.modalContent} closeModal={closeModal} />
        }
    <Divbutton className="col-md-4">
   <button  type='submit' onClick={checkUsername} className="btn btn-success text-white">Register</button>
    </Divbutton>
         </Myform>
         <Link style={mystyle} to='../pages/login'> Already have an Account??</Link>
         </Form>
  
    </SignupWrapper>
       :
         <Login/>
         }
        {state.userData.map((user)=>{
    return  <div key={user.id}>
           <Display data={state.userData}/>
         </div>
       })}
         
</> 
    )
}

export default Signup

 
