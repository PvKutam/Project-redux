import {Fetch_User_Request,Fetch_User_Success,Fetch_User_Failuer} from "./Actiontype"

const initalState={
    Loading:false,
    data:[],
    error:''
}

 export const Reducer =(state=initalState,action)=>{
    switch(action.type){
        case Fetch_User_Request:
            return{
                ...state,
                Loading:true
            }
            case Fetch_User_Success:
                return{
                    Loading:false,
                    data:action.payload,
                    error:''
                }
                case Fetch_User_Failuer:
                    return{
                        Loading:false,
                        data:[],
                        error:action.payload
                    }
    }
}