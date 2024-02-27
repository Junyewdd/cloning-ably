import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Search from './Search';
import Contents from './Contents';
import Bottom from './Bottom';

const Main = () => {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', width: '500px', alignItems:'center'}}>
      <Search/>
      <Contents/>
      <Bottom/>
    </Box>
  )
}

export default Main