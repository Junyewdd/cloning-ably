import { Box } from '@mui/material'
import React, { useState } from 'react'
import Button from './Button'

const Bottom = () => {
  const [select, setSelect] = useState("홈");
  return (
    <Box sx={{display: 'flex', height: '60px', width: '100%', justifyContent: 'center', alignItems:'center', alignContent: 'center'}}>
      <Button text={"홈"} select={select} setContent={setSelect}/>
      <Button text={"카테고리"} select={select} setContent={setSelect}/>
      <Button text={"혜택"} select={select} setContent={setSelect}/>
      <Button text={"코디"} select={select} setContent={setSelect}/>
      <Button text={"찜"} select={select} setContent={setSelect}/>
      <Button text={"마이페이지"} select={select} setContent={setSelect}/>
    </Box>
  )
}

export default Bottom
