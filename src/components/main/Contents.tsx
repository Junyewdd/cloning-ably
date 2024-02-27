import { Box } from '@mui/material'
import React from 'react'
import Ad from './Ad'
import { product_gallery } from '@/data/product_gallery'
import ContentCard from './ContentCard'


const Contents = () => {
  return (
    <Box sx={{width: '100%',height: '590px', overflow: 'scroll'}}>
      <Ad/> 
      <Box sx={{width: '100%', height: '400px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {product_gallery.map(product => <ContentCard product={product}/>)}
      </Box>
    </Box>
  )
}

export default Contents;