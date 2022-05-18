import { makeStyles } from '@mui/styles';

export default makeStyles(()=>({
    root:{
        flexGrow:1
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