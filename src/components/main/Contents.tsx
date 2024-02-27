import { Box } from '@mui/material'
import React from 'react'
import Ad from './Ad'

const Contents = () => {
  return (
    <Box sx={{width: '100%',height: '590px', overflow: 'scroll'}}>
    <Ad/>
    <Box sx={{width: '100%', height: '400px', bgcolor: 'green'}}></Box>
    </Box>
  )
}

export default Contents;