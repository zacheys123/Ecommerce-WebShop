export const reducer=(state,action) =>{
    if(action==='SHOW_FORM'){
        return {
            ...state,
            isSign:false,
        }
    }
        if(action==='HIDE_FORM'){
        return {
            ...state,
            isSign:true,
        }
    }

    if(action.type==='ADD_USER'){
        if(action.payload.password !== action.payload.confirmPassword){
        return {
            ...state,
            userData:[],
            isModal:true,
            modalContent:'Passwords do not match'
        }
    }
    else{
        const user=[...state.userData,action.payload.newUser];
        return {
            ...state,
            useData:user,
            isModal:true,
            modalContent:`Welcome user`,
         }
        }
    }
        if(action=='COOKIE'){
        return {
            ...state,
            isCookie:true,
         }
    }
          if(action=='REMOVE_COOKIE'){
        return {
            ...state,
            isCookie:false,
         }
    }
    
    if(action==="SHOW_PASSWORD"){
        return {
            ...state,
            ispassword:true
        }
    }
        if(action==="SHOW_CONFIRMPASSWORD"){
        return {
            ...state,
            ispassword:true
        }
    }
       if(action==="ERROR"){
        return {
            ...state,
           isModal:true,
           modalContent:'Empty inputs are not allowed'
        }
    }
    if(action==='closeModal'){
        return {...state,
        isModal:false
    }
}
throw new Error('No matching action');

}