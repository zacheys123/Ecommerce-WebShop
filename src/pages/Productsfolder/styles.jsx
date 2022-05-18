import {makeStyles} from '@mui/styles'

export default makeStyles((theme)=>({
        content:{
            flexGrow:1,
            padding:'1rem',
            backgroundColor:'red',
            marginBottom:'7rem',
        },
        prodpage:{
        [theme.breakpoints.down('md')]:{
            maxWidth:'93vw'
        }
        },
    root:{
        flexGrow:1,
        marginBottom:'-1rem'
    },
    toolbar:{
        height:'5.2rem',
    },
    sidebar:{
        [theme.breakpoints.down('md')]:{
            display:'none',
            maxWidth:'5rem'
        }
    }
}));