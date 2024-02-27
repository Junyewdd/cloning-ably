import { Avatar, Box } from '@mui/material'
import { controlImage } from '../../util/controlButtonImage'
import React from 'react'

const Button = ({text, select, setContent}: {text: string, select: string, setContent: (arg: string)=>void}) => {

  const controlSelect=() => {
    setContent(text);
  }

  return (
    <Box sx={{width: '22%', display: 'flex', justifyContent:'center'}} onClick={controlSelect}>
      <Avatar src={controlImage({text, select})}/>
    </Box>
  )
}

export default Button