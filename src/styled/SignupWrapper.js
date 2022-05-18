import styled from "styled-components"

export const SignupWrapper=styled.div`
background:white;
max-width:100vw;
display:flex;
min-height:100vh;
max-width:100vw;
align-items:center;
`
// end of main signup styling
export const Form=styled.div`
margin:6rem 10rem 20rem 30rem; 
 max-width:27rem;
 border-radius:3rem;
 min-height:25rem;
 background:rgb(20,45,100) !important;
 box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
        0 2px 4px rgba(23, 32, 20, 0.07),
        0 4px 8px rgba(0, 40, 30, 0.07),
        0 8px -16px rgba(50, 60, 40, 0.07),
        0 16px -32px rgba(30, 120, 0, 0.07),
        0 32px 64px rgba(0,40, 40, 0.07);

        border-radius:9px;

`
// end of main form container styling
export const Div=styled.div`
  max-width:100%;
  margin-top:1.5rem;
  margin-left:1rem;
`
// end of main form styling
export const Myform=styled.form`
max-width:100%;


&::after{
    content:'';
    display:table;
    clear:both;
}
`

export const Forminput=styled.input`
max-width:100%;

`
// end of form inputs styling


// end of Sidebar in signup styling
export const Choice=styled.div`
display:flex;
align-items: center;
justify-content:space-around;

`

export const DivH3=styled.div`
text-align:center;
border:none;
flex-shrink:1rem;
background:white;
width:100%;
color:yellowgreen;
font-weight:900;
cursor:pointer;
border-right:.1rem solid red;
border-top:.1rem solid red;
border-left:.1rem solid red;


`
export const DivH2=styled.div`
text-align:center;
flex-shrink:1rem;
width:100%;
color:white;
cursor:pointer;


`
export const Divbutton=styled.div`
margin-left:1.3rem !important; 
margin-bottom:.8rem;
margin-top:1rem;
`


