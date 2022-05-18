import styled from 'styled-components'

export const SidebarBody=styled.div`
background:black;
position:fixed;
flex:0.15;
border-right:1px solid rgb(39, 53, 35);
min-height:100vh;
padding:1rem;
`
// end of main sidebar styling
export const RightSidebarBody=styled.div`
background:purple;
flex:0.15;
min-height:100vh;
`

export const P=styled.p`
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
max-width:25rem;
color:rgb(221, 243, 201);
 width:15.1rem;

`
// end of the paragraph styling

export const SideNavList=styled.ul`
display:block;
max-width:25rem;
min-height:99.4vh;
margin-top:.3rem;
margin-left:-3.4rem;
`
// end of ul styling
export const SideNavItems=styled.ul`
max-height:100%;
margin-top:1rem;
cursor:pointer;

& span{
    margin-left:1rem;
    font-weight:bolder;
    font-size:2rem;
    color:red;
     transition:all .7s ease-in;
    opacity:0;
  
}

`
// end of ul styling

export const Form=styled.form`
width:15rem;
background:rgb(19, 36, 37);
border-radius:1.4rem; 
padding:.8rem;
margin-top:3rem;
min-height:14rem;
`
// end of form form styling

export const Formbutton=styled.button`
margin:1rem .71rem;
min-width:92%;
`
export const FormWrapper=styled.div`
margin-left:.7rem;


`
// end of form wrapper styling

export const SidePreview=styled.ul`
margin-top:1.3rem;
display:grid;
padding-top:1rem;
background:rgb(19,23,21);
min-height:9rem;
grid-template-columns:1fr 1fr;
grid-column-gap:7px;


`
// end of form undordered list styling

export const Preview=styled.li`
transition:transform .8s ease-in-out;
transform:scale(1);
list-style-type:none;
padding-top:.9rem;

margin-bottom:.3rem;
background:rgb(33,32,25);
min-height:3rem;
margin-left:-1rem;
margin-right:1.6rem;

&:hover{
    cursor:pointer;
    transform:scale(1.1);
}

`
// end of form List styling
