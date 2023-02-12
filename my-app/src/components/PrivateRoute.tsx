import { Navigate,useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store"



const PrivateRoute = ({children}:{children:JSX.Element}) => {
    const auth = useAppSelector((store)=>store.authReducer.isAuth);
    const location = useLocation();

    if(!auth){
       return <Navigate to='/login' replace state={{data:location.pathname}} />
    }
  
    return children;
  
}

export default PrivateRoute

