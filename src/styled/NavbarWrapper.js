import styled from "styled-components"


// end of main nav wrapper

// end of the unordered list styling

export const Li=styled.li`
position:relative;
   list-style-type: none;
    padding:.4rem;
    margin-left:3rem;

    &::before{
    content:'';
    position:absolute;
    background:rgb(217, 24, 239)!important;
    height:.08em;
    width:59%;
    transform:scaleX(0.3);
    bottom:0;
    transform-origin:center;
    transition:transform 1.4s  ease-in-out;
}

&:hover::before{
    transform:scaleX(1.1);
    transform-origin:left right;
}
`
// end of the unordered list styling


export const Span=styled.span`
margin-left:7px;
`

export const Dropdown=styled.div`
position:absolute;
width:12rem;
margin-left:6rem;
background-color:wheat;
padding:1rem;
border-radius:2rem;
display:flex;
align-items:center;
color: black;
z-index: 1;


`
