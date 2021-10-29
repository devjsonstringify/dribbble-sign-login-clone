import * as React from 'react'
import Box from '@mui/material/Box'
import RightSidebarHeader from './RightSidebarHeader'

const RightSidebar = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        height: '100%',
      }}
    >
      <RightSidebarHeader />
    </Box>
  )
}

export default RightSidebar
