import { Product } from '../utils/types';
import { Box, Flex,Image,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const ProductCard = ({id,title,price,image}:Product) => {
  return (
    <Flex maxWidth='md'>
        <Link to={`/product/${id}`}>
            <Box w='small'>
                <Image src={image} width={'200px'} h={'400px'} />
                <Text as={'h3'}>{title}</Text>
                <Text as={'h3'}>{price}</Text>
            </Box>
        </Link>
    </Flex>
  )
}

export default ProductCard


