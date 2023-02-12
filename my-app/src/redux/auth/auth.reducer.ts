import * as types from './auth.types';



import { LoginAction } from "./auth.action";

export interface authReducerStateType{
    loading: boolean;
    error: boolean;
    token: string;
    isAuth: boolean;
}

const initial = {
    loading:false,
    error: false,
    token: '',
    isAuth:false,
}


export const authReducer = (state:authReducerStateType = initial,action:LoginAction) =>{

    const {type} = action;

    switch(type){

        case types.USER_LOGIN_REQUEST: {
            return {...state,loading:true}
        }

        case types.USER_LOGIN_ERROR : {
            return {...state,loading:false,error:true}
        }

        case types.USER_LOGIN_SUCCESS : {
            return {
                ...state,
                loading:false,
                isAuth: true,
                token: action.payload,
            }
        }

        default : {
            return state;
        }
    }
}


