import { Avatar, Box } from '@mui/material'
import Image from 'next/image'
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
    <Box sx={{width: '100%', height: '420px', display: 'flex', paddingTop: '5px', flexDirection: 'column', alignItems: 'center',padding: '3px'}}>
      <Avatar src={product.image} sx={{borderRadius: '7px', width: '97%', height: '330px'}}/>
      <Box sx={{display: 'flex', alignContent: 'flex-start', color: 'grey', alignSelf: 'flex-start'}}>
        <Box sx={{color: 'red', fontWeight: 'normal', marginRight: '5px'}}>
        {product.sale}
        </Box>
        <Box sx={{color: 'black', fontWeight: 'bold'}}>
          {product.price}
        </Box>
      </Box>

      <Box sx={{display: 'flex', alignContent: 'flex-start', color: 'grey', alignSelf: 'flex-start', marginTop: '5px'}}>
        {product.company}
      </Box>
      <Box sx={{display: 'flex', alignContent: 'flex-start', color: 'grey', alignSelf: 'flex-start'}}>
        {product.name}
      </Box>
    </Box>
  )
}

export default ContentCard