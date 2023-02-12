import axios, { AxiosResponse } from "axios";
import { LoginType } from "../../utils/types";


export const loginAPI = async(data:LoginType) =>{
    try{
        let res: AxiosResponse<{token: string;}> = await axios.post(`https://reqres.in/api/login`,data);
        return res.data.token;
    }
    catch(e){
        console.log('error in login api',e);
    }
}