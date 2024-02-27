import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router';

const Main = () => {
  const { push } = useRouter();
  const [productId, setProductId] = useState('1');
  const handleClick= () => {
    push(`/detail/${productId}`)
  }
  return (
    <>
    <Button sx={{width: '10px', height: '10px', bgcolor:'black'}} onClick={handleClick}></Button>
    </>
  )
}

export default Main