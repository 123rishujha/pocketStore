import axios, {AxiosResponse} from 'axios';
import { Product } from '../../utils/types';



export const getProductAPI = async (getProductParams?:{params:{category:string[]}}) =>{
    try{
        let res: AxiosResponse<Product[]> = await axios.get(`http://localhost:8080/products`,getProductParams);
        return res.data;
    }
    catch(e){
        console.log("error in getProductAPI",e);
    }
}


