import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Search from './Search';
import Contents from './Contents';
import Bottom from './Bottom';

const Main = () => {
  const { push } = useRouter();
  const [productId, setProductId] = useState('1');
  const handleClick= () => {
    push(`/detail/${productId}`)
  }
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', width: '500px', alignItems:'center'}}>
      <Search/>
      <Contents/>
      <Bottom/>
      {/* <Button sx={{width: '10px', height: '10px', bgcolor:'black'}} onClick={handleClick}></Button> */}
    </Box>
  )
}

export default Main