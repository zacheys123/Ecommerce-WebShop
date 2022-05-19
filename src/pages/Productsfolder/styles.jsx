import {makeStyles} from '@mui/styles'

export default makeStyles((theme)=>({
        content:{
            flexGrow:1,
            padding:'1rem',
            marginBottom:'7rem',
            [theme.breakpoints.down('md')]:{
                maxWidth:'96%',
                marginLeft:'.5rem',
        }
        },
        prodpage:{
             maxWidth:'96%',
        [theme.breakpoints.down('md','sm')]:{
             marginLeft:'-16rem',
             maxWidth:'100%',
             zIndex:'1',
             marginTop:'.7rem'
        },
          [theme.breakpoints.only('xs')]:{
             marginLeft:'-19rem',
             maxWidth:'100%'
        },
        },
    root:{
        flexGrow:1,
        marginBottom:'-1rem'
    },
    toolbar:{
        height:'5.2rem',
    },
         [theme.breakpoints.down('md')]:{
                height:'5.2rem',
        },
    sidebar:{
        [theme.breakpoints.down('md')]:{
            display:'none',
           position:'absolute',
        }
    }
}));