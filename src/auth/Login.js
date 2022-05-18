import React ,{useState,useRef} from 'react'
import {LoginWrapper,
  Choice,Form,Myform,DivH3,DivH2,Divbutton
  ,Forminput
  ,Div} from '../styled/LoginWrapper'
import Sidebar from '../component/Sidebar'
import Signup from '../pages/Signup'
const Login = () => {
   const[isSign,setSign]=useState(false)
   const loginref=useRef(null)
const signupref=useRef(null)

   const showform=(ev)=>{
  ev.preventDefault()
setSign(false);  

}

const hideform=(ev)=>{
  ev.preventDefault()
setSign(true);  

}
  return (
     <>
     {!isSign ?
    <LoginWrapper>
    <Sidebar/>
         <Form>
         <Choice>
      <DivH3 ref={signupref} onClick={hideform}>
         <h3>Signup</h3>
         </DivH3>
          <DivH2 ref={loginref} onClick={showform}>
            <h3>Login</h3>
         </DivH2>
     
         </Choice>
      <Myform action="" style={{Width:'100%'}}  className="row">
  
          <Div className="input-group ">
         <Forminput type="text" className="form-control"  name='Username' placeholder="Username"/>
         </Div>
        <Div className="input-group">
         <Forminput style={{Width:'100%'}} type="text" name='password' className="form-control" placeholder="Password"/>
         </Div>
          <Div className="input-group">
         <Forminput type="text" className="form-control" name='confirmpassword' placeholder='Confirm Password'/>
         </Div>
    <Divbutton className="col-md-4">
   <button className="btn btn-info text-black ">Login</button>
    </Divbutton>
 
         </Myform>
      </Form>
    </LoginWrapper>
    :
    <Signup/>
     }
</>
    )
}

export default Login

 