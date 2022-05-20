import {makeStyles} from '@mui/styles'

export default makeStyles(()=>({
    toolbar:{
        
    },
    root:{
        overflowX:'hidden',
        background:'rgb(244,245,231)',
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
        marginTop:'7rem',
    },
    empty:{
        margin:'5% 10% 40% 27%',
        boxShadow:'var(--box-shadow)',
        minHeight:'2rem',
        padding:'2rem',
        textAlign:'center',
        opacity:'.8',
        width:'30rem',
    },
    shoppingcart:{
        padding:'1rem',
        marginLeft:'1rem',
        width:'50vw',
        flex:'.6',
        height:'90vh',
       display:'grid',

       background:'white',
       gridColumnGap:'1rem'
    },
    overview:{
        marginLeft:'1rem'
    },
    maincontainer:{
        display:'flex',
        width:'95vw'
    },
        left__sidebar:{
        flex:'.2',
        
    },
        right__sidebar:{
        flex:'.2',
    },
    
}))