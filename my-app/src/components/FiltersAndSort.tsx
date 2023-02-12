import { Checkbox, CheckboxGroup, VStack,Stack } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';


const FiltersAndSort = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  let initalParams = searchParams.getAll('filter');
  const [filterValue,setFilterValue] = useState<string[]>(initalParams || []);

  useEffect(()=>{
    let params:{filter?: string[]} = {};

    if(filterValue.length){
      params.filter = filterValue;
    }
    setSearchParams(params);
  },[filterValue]);


  const handleChange = (value:string[]) =>{
    setFilterValue(value);
  }


  return (
    <div>
      <CheckboxGroup colorScheme='green' value={filterValue} onChange={handleChange}>
        <VStack spacing={[1, 5]} direction={['column', 'row']} >
          <Checkbox value="men's clothing">mens</Checkbox>
          <Checkbox value='electronics'>electronics</Checkbox>
          <Checkbox value="women's clothing">Womens</Checkbox>
          <Checkbox value='jewelery'>jewelery</Checkbox>
        </VStack >
      </CheckboxGroup>
    </div>
  )
}

export default FiltersAndSort


