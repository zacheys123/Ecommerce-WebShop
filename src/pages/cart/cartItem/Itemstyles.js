import {makeStyles} from '@mui/styles'


export default makeStyles(()=>({
    root: {
width:'15rem',
height:'15rem'
    },
    media:{
    height:100,
    backgroundPosition:'center'
    },
    content:{display:'flex',
    justifyContent:'space-between'
},
cardActions:{display:'flex',
justifyContent:'center'
},
buttons:{display:'flex',
alignItems: 'center'
}

}))