import { Avatar, Box } from '@mui/material'
import React from 'react'

const Ad = () => {
  return (
    <Box sx={{width: '100%', height: '220px', bgcolor: 'yellow', display: 'flex'}}>
        <Box sx={{bgcolor: '#E2E5E2', width: '50%', height: '100%', fontWeight: 'bold', fontSize: '25px', paddingTop: '90px', paddingLeft: '20px'}}>
            새학기 세일!<br/>
            전 상품 25%~ 할인
        </Box>
        <Avatar src={'images/main_banner_model.png'} sx={{width: '50%', height: '100%',borderRadius:'0px'}}/>
    </Box>
  )
}

export default Ad