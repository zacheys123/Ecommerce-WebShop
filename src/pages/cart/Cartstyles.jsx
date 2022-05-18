import {makeStyles} from '@mui/styles'

export default makeStyles(()=>({
    toolbar:{
        height:'5.2rem',
    },
    root:{
        overflowX:'hidden',
        display:'flex',
        background:'rgb(220,245,231)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        maxWidth:'100%',
        minHeight:'100vh',
        boxShadow:'var(--box-shadow)',
    },
    left_sidebar: {
        flex:'.1',
    },
       itemspage: {
        marginLeft:'18rem',
          marginRight:'5rem',
          flex:'.9',
    },
    empty:{
        margin:'10% 10% 20% 33%',
        boxShadow:'var(--box-shadow)',
        minHeight:'5rem',
        padding:'2rem',
        textAlign:'center',
        opacity:'.8',
        width:'30rem',
    },
    shoppingcart:{
        maxWidth:'80%',
       display:'grid',
       gridColumnGap:'4rem'
    }
    
}))