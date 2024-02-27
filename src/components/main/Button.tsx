import { Avatar, Box } from '@mui/material'
import React from 'react'

const Button = ({text, select, setContent}: {text: string, select: string, setContent: (arg: string)=>void}) => {
  const controlImage = () => {
    if(text === "홈"){
      if(select === "홈")return 'images/menu/home-full.png';
      return 'images/menu/home.png';
    }else if(text === "카테고리"){
      if(select === "카테고리")return 'images/menu/category-full.png';
      return 'images/menu/category.png';
    }else if(text === "혜택"){
      if(select === "혜택")return 'images/menu/benefit-full.png';
      return 'images/menu/benefit.png';
    }else if(text === "코디"){
      if(select === "코디")return 'images/menu/coor-full.png';
      return 'images/menu/coor.png';
    }else if(text === "찜"){
      if(select === "찜")return 'images/menu/jjim-full.png';
      return 'images/menu/jjim.png';
    }else if(text === "마이페이지"){
      if(select === "마이페이지")return 'images/menu/my-full.png';
      return 'images/menu/my.png';
    }
  }

  const controlSelect=() => {
    setContent(text);
  }

  return (
    <Box sx={{width: '22%', display: 'flex', justifyContent:'center'}} onClick={controlSelect}>
      <Avatar src={controlImage()}/>
    </Box>
  )
}

export default Button