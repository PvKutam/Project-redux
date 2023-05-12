 import axios from "axios"
 
 export const Fetch_User_Request= "Fetch_User_Request"
 export const Fetch_User_Success = "Fetch_User_Success"
 export const Fetch_User_Failuer = "Fetch_User_Failuerx"
 export const FetchUserRequest=()=>{
    return{
        type:Fetch_User_Request
    }
 }
 export const FetchUserSuccess=user=>{
    return{
        type:Fetch_User_Success,
        payload:user
    }
 }
 export const FetchUserFailuer= error =>{
    return{
        type:Fetch_User_Failuer,
        payload:error
    }
 }

 export const fetchDetails=(payload)=>{
    return(dispatch)=>{
        dispatch(FetchUserRequest)
        axios.get( `https://api.github.com/users/${payload}`)
        .then(responce =>{
            const user=responce.data
            dispatch(FetchUserSuccess(user))
        })
        .catch(error =>{
            const errorMSG=error.message
            dispatch(FetchUserFailuer(errorMSG))
        })


    }
 }