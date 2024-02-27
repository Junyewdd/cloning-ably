import { Avatar, Box, Button } from '@mui/material'
import React from 'react'

const Head = () => {
  return (
    <Box sx={{width: '500px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid black'}}>
      <Box sx={{width: '10%'}}/>
      <Avatar
        src='images/ably.png'
        alt='ably'
        sx={{width: '250px', height: '50px',borderRadius: '0',}}/>
      <Avatar
        src='images/Icons/shopping_bag.png'
        alt='ably'
        sx={{width: '33px', height: '35px',borderRadius: '0', marginRight: '5px'}}/>
            
    </Box>
  )
}

export default Head