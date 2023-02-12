import { Product } from '../../utils/types';
import { AppAction } from './product.action';
import * as types from './product.types';


export interface IproductState{
    loading: boolean,
    error: boolean,
    data: Product[]
}

const inital = {
    loading: false,
    error: false,
    data: [],
}


export const productReducer = (state:IproductState = inital,action:AppAction) => {

    const {type} = action;

    switch(type){

        case types.PRODUCT_REQUEST : {
            return {...state,loading:true}
        }

        case types.PRODUCT_ERROR : {
            return {...state,loding:false,error:true}
        }

        case types.GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading:false,
                data: action.payload,
            }
        }

        default: {
            return state
        }
    }
}
