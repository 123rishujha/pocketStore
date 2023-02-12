import React from 'react'
import { useState,useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/product/product.action';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { Product } from '../utils/types';


const useCurrentParamProduct = () => {
 const {productId} = useParams();
 const dispatch = useAppDispatch();
 const data = useAppSelector((store)=>store.productReducer.data);
//  const [currentProduct,setCurrentProduct] = useState<Product>();
const currentProduct = data.find((elem)=>elem.id===Number(productId))
 

 useEffect(()=>{
    if(data.length===0){
        dispatch(getProduct());
    }
 },[]);

//  useEffect(()=>{
//     if(data && productId){
//         let product = data.find((elem)=>elem.id===Number(productId)); 
//         setCurrentProduct(product);
//     }
//  },[])

return {currentProduct,productId};

}

export default useCurrentParamProduct
