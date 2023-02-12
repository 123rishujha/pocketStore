import { LoginType } from '../../utils/types';
import { AppDispatch } from '../store';
import { loginAPI } from './auth.api';
import * as types from './auth.types';


export interface actionFuncloginRequest{
    type: typeof types.USER_LOGIN_REQUEST;
}

export interface actionFuncloginError{
    type: typeof types.USER_LOGIN_ERROR;
}

export interface actionFuncloginsuccess{
    type: typeof types.USER_LOGIN_SUCCESS;
    payload: string;
}


export type LoginAction = actionFuncloginError | actionFuncloginRequest | actionFuncloginsuccess;


export const loginRequest = ():actionFuncloginRequest =>{
    return {type: types.USER_LOGIN_REQUEST}
}


export const loginError = ():actionFuncloginError =>{
    return {type: types.USER_LOGIN_ERROR}
}


export const userLoginSuccess = (token:string):actionFuncloginsuccess =>{
    return {type: types.USER_LOGIN_SUCCESS,payload:token}
}

export const loginSuccess = (payload:LoginType):any => async (dispatch:AppDispatch) =>{
    dispatch(loginRequest());
    try{
        let data = await loginAPI(payload);
        if(data){
            dispatch(userLoginSuccess(data));
        }
    }
    catch(e){
        dispatch(loginError());
    }
}
