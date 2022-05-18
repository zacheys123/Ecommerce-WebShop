import styled from "styled-components"

export const HomeWrapper=styled.div`
display:flex;
max-width:100vw;
min-height:100vh;
`
export const ProductsPage=styled.div`
flex:.9;
background:rgb(220,245,231) !important;
background-repeat:no-repeat;
background-size:cover;
width:90%;
margin-left:20rem;
margin-right:-9rem;
min-height:100%;
box-shadow:var(--box-shadow);
`


export const Span=styled.span`
font-size:.9rem;
padding-bottom:.1rem;
padding-top:.1rem;
padding-right:.4rem;
padding-left:.4rem;
border-radius:50%;;
margin:auto 1.5rem;

&:hover{
    cursor: pointer;
    background:darkgrey;
}
`

export const Cart=styled.div`
position:relative;
`
export const H1=styled.div`
font-size:2rem;
text-shadow:1px 1px 1px rgba(115, 215, 255, 0.5), -1px -1px 2px yellow,1px 1px 1px red ;
` 
export const Productsdata=styled.div`
background-color:white;
max-width:90vw;
min-height:100vh;
overflow:hidden;
`
export const Mainlist=styled.ul`
display:flex;
max-width:100%;
min-height:100%;
align-items:center;
flex-wrap:wrap;
`
export const Prodinfo=styled.li`
list-style-type:none;
transition:all 0.5s ease-in-out;
margin:1rem .4rem 1rem .4rem;
transform:Scale(1);
background-color:rgba(245, 222, 255, 0.3);
border-radius:.4rem;
padding:1.8rem 1.8rem .6rem 1.8rem;
    box-shadow:0 1px 2px rgba(0, 0, 0, 0.07),
        0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07),
        0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07),
        0 32px 64px rgba(0, 0, 0, 0.07);

&:hover{
    cursor:pointer;
    transform:scale(1.1);
}
`
export const Image=styled.img`
width:14rem;
background:transparent !important;

`
export const P=styled.p`
color:green;

`

export const Price=styled.p`
color:violet;

`
export const Databutton=styled.button`
    border:'none';
    background:'violet';
    padding:'.3rem';
    
`