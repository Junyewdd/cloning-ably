import { product_gallery } from '@/data/product_gallery';
import { Box, Button } from '@mui/material';
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
    <Box>
      {
      product && 
      product.name
      }
    </Box>
  )
}

export default Product;