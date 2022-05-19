import {makeStyles} from '@mui/styles'

export default makeStyles((theme)=>({
    container:{
display:'flex',
justifyContent:'space-between',
background:'linear-gradient(black,blue)',
      [theme.breakpoints.down('md','sm')]:{
         maxWidth:'98vw',
         margin:'-.8rem 1rem',
         background:'linear-gradient(azure,green)',
         fontWeight:'bold',
         opacity:'.8',
        },
    },
    navbrand:{
        fontSize:'9rem',
        fontWeight:'900',
        marginLeft:'1rem',
        marginRight:'-3rem',
        textShadow:'1px 1px 1px rgba(115, 215, 255, 0.5), -1px -1px 2px yellow,1px 1px 1px violet',
    },
    text:{
        [theme.breakpoints.down('sm')]:{
     display:'none'
        },
    },
    menu:{
    [theme.breakpoints.down('sm')]:{
     display:'block',
     width:'30px',
     height:'30px'
        },

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

        menu:{
                  [theme.breakpoints.down('md','sm')]:{
                    display:'none'
        },
        },
}))