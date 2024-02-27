import { product_gallery } from '@/data/product_gallery';
import { Avatar, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type ProductType = {
  image: string,
  sale: string,
  price: string, 
  company: string,
  name: string,
}

const Product = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [product, setProduct] = useState<ProductType>(product_gallery[Number(0)]);

  useEffect(() => {
    if(id !== undefined){
      setProduct(product_gallery[Number(id)]);
    }
  }, [id]);

  return (
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      {
      product && 
      <>
      <Avatar src={product.image} sx={{borderRadius: '7px', width: '97%', height: '330px',}}/>
      
      <Box sx={{width: '100%', height: '70px', borderBottom: '1px solid grey', padding: '10px', fontWeight: 'bold'}}>
        {product.company}<br/>
        #캐주얼 #캠퍼스룩
      </Box>
      <Box sx={{fontWeight:'bold', fontSize: '20px', display: 'flex', justifyContent:'flex-start'}}>
        {product.name}
      </Box>
      </>
      }
    </Box>
  )
}

export default Product;