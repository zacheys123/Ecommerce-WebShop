import { makeStyles } from '@mui/styles';

export default makeStyles(()=>({
    root:{
        flexGrow:1,
        transform:'Scale(1)',
        transition:'all .7s ease-in-out',
        cursor:'pointer',
        '&:hover':{
            transform:'Scale(1.1)',
        }
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