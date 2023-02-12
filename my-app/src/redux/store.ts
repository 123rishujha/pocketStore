import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/product.reducer";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
    productReducer,
    authReducer,
})



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState> 

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

