import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Box sx={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%', 
      height: '100%',
    }}>
      <Box component="main">
        {children}
      </Box>
    </Box>
  )
}

export default Layout;