import { Box } from '@mui/material'
import React from 'react'

type ProductType = {
  image: string,
  sale: string,
  price: string, 
  company: string,
  name: string,
}

const ContentCard = ({product}: {product: ProductType}) => {
  return (
    <Box sx={{width: '100%', height: '300px', border: '1px solid black'}}>
      {product.name}
    </Box>
  )
}

export default ContentCard