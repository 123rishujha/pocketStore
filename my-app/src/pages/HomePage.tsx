import { Box, Flex } from '@chakra-ui/react';
import {useState,useEffect} from 'react'
import ProductCard from '../components/ProductCard';
import { getProduct } from '../redux/product/product.action';
import { useAppDispatch, useAppSelector } from '../redux/store'
import { useLocation, useSearchParams } from 'react-router-dom';
import FiltersAndSort from '../components/FiltersAndSort';

const HomePage = () => {
  
  const dispatch = useAppDispatch();
  const data = useAppSelector((store)=>store.productReducer.data);
  console.log(data);
  const location = useLocation();
  const [searchParams] = useSearchParams();


  useEffect(()=>{
    if(data.length===0 || location){

      const getProductParams = {
        params: {
          category: searchParams.getAll('filter')
        }
      }

      dispatch(getProduct(getProductParams));
    }
  },[location.search]);


  return (
    <Flex flexWrap='wrap' width='fit-content'>
      <FiltersAndSort />
      <Flex direction={'column'} justify='center'> 
        {
          data.map((elem)=>{
            return <ProductCard key={elem.id} {...elem} />
          })
        }
      </Flex>
    </Flex>
  )
}

export default HomePage

