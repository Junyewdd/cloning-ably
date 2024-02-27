import { IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Search = () => {
  return (
    <Paper component="form" sx={barStyle()}>
    <InputBase
      sx={{ ml: 1, flex: 1, }}
      placeholder="Search"
      inputProps={{ 'aria-label': 'search' }}
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
  )
}

export default Search;

const barStyle= () => ({
  p: '0px 4px', 
  display: 'flex', 
  alignItems: 'center', 
  width: 370,
  bgcolor: '#E2E2E2',
  borderRadius: 2,
  // margin: ,
})