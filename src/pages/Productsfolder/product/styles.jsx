import { makeStyles } from '@mui/styles';

export default makeStyles((theme)=>({
    root:{
        flexGrow:1,
        transform:'Scale(1)',
        transition:'all .7s ease-in-out',
        cursor:'pointer',
        '&:hover':{
            transform:'Scale(1.1)',
        },
        [theme.breakpoints.down('md','sm')]:{
           maxWidth:'98%',
           marginLeft:'.5rem',
            transform:'Scale(1)',
         '&:hover':{
           transform:'Scale(1)',
         }

        },    
    },
    cardContent: {
        display:'flex',
        justifyContent: 'space-between'
    },
    cardActions:{
        display:'flex',
        justifyContent: 'space-between'
    }
}))