import {makeStyles} from '@mui/styles'

export default makeStyles((theme)=>({
    container:{
display:'flex',
position:'fixed',
width:'96vw',
 zIndex:'1',
margin:'.1rem  .6rem -.8rem 1rem',
justifyContent:'space-between',
alignItems: 'center',
background:'linear-gradient(black,white)',
      [theme.breakpoints.down('md','sm')]:{
         width:'93vw',
         margin:'.8rem  2rem -.8rem -.1rem',
        background:'linear-gradient(black,white,to right)',
         position:'fixed',
          zIndex:'1',
         padding:'1rem',
         fontWeight:'bold',
        },
         [theme.breakpoints.only('xs')]:{
         width:'80vw',
         margin:'.8rem  1rem -.8rem 1rem',
        background:'linear-gradient(black,white,to right)',
         position:'fixed',
          zIndex:'1',
         padding:'1rem',
         fontWeight:'bold',
        },
    },
    navbrand:{
        fontSize:'9rem',
        fontWeight:'900',
        textShadow:'1px 1px 1px rgba(115, 215, 255, 0.5), -1px -1px 2px yellow,1px 1px 1px violet',
    },
    img:{
        marginLeft:'2rem',
     [theme.breakpoints.down('md','sm')]:{
          width:'50px',
          height:'50px',
          marginLeft:'-.7rem'
        },
    },
    text:{
        textShadow:'3px 1px 1px rgba(1235, 215, 225, 0.7), -1px -1px 2px red,1px 1px 1px violet',
        fontWeight:'bold',
        fontFamily:'apple-system,sans',
          listStyle:'none',
        '&:hover':{
            listStyle:'none',
               textShadow:'2px 1px 1px rgba(123, 215, 255, 0.5), -1px -1px 2px violet,2px 1px 1px yellow',
        },
        [theme.breakpoints.down('md','sm')]:{
     display:'none',
        },
    },
    menu:{
        position:'relative',
     marginRight:'2rem',
    [theme.breakpoints.down('md','sm')]:{
     display:'block',
        },
            [theme.breakpoints.down('md','sm')]:{
          display:'none'
        },

    },  
    settings: {
     
        borderRadius:'10px',
        height:'6rem',
        width:'6rem',
        fontFamily:'Helvetica Neue',
        marginTop:'1rem',
        marginLeft:'-3rem',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'1.3rem',
        position:'absolute',
         background:'grey',
         opacity:'0.9',
         zIndex:'1',
    },
    item:{
            padding:'1rem',
            position:'relative',
            listStyle:'none',
         [theme.breakpoints.down('md','sm')]:{
      display:'none',
      maxWidth:'100vw'
        },
    '&::before':{
            content:'',
            position:'absolute',
            background:'rgb(217, 24, 239)!important',
            height:'.08em',
            width:'59%',
            color:'violet',
            transform:'scaleX(0.3)',
            bottom:'0',
            transformOrigin:'center',
            transition:'transform 1.4s  ease-in-out',
    
},

'&:hover::before':{
    transform:'scaleX(1.1)',
    transformorigin:'left right'
}
        },

        time:{
        [theme.breakpoints.down('md')]:{
          display:'none'
        },
        },
        modalopen:{
                [theme.breakpoints.down('md','sm')]:{
        'marginLeft':'2rem',
        'marginRight':'1rem',
        'cursor':'pointer',
        display:'block',
        fontSize:'1.6rem',
        padding:'.01em .6rem .2rem .6rem',
  
        '&:hover':{
            opacity:'.8',
        background:'grey',
        borderRadius:'50%',
        }
    },
    display:'none',
        },

}))