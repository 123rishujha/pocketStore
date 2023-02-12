import { Product } from '../../utils/types';
import { AppDispatch } from '../store';
import { getProductAPI } from './api';
import * as types from './product.types';


export interface actionFuncRequestReturn{
    type: typeof types.PRODUCT_REQUEST;
}

export interface actionfuncErrorReturn{
    type: typeof types.PRODUCT_ERROR;
}

export interface actionfuncGetProductSuccess{
    type : typeof types.GET_PRODUCT_SUCCESS,
    payload: Product[]
}

export type AppAction = actionFuncRequestReturn | actionfuncErrorReturn | actionfuncGetProductSuccess;



export const productRequest = (): actionFuncRequestReturn =>{
    return {type: types.PRODUCT_REQUEST}
}

export const productError = (): actionfuncErrorReturn =>{
    return {type: types.PRODUCT_ERROR}
}

export const getProductSuccess = (data:Product[]): actionfuncGetProductSuccess =>{
    return {type: types.GET_PRODUCT_SUCCESS,payload:data}
}


export const getProduct = (getProductParams?:{params:{category:string[]}}):any => async (dispatch:AppDispatch) =>{
    dispatch(productRequest());
    try{
        let data = await getProductAPI(getProductParams);
        if(data){
            dispatch(getProductSuccess(data));
        }
    }
    catch(e){
        dispatch(productError());
    }
}


