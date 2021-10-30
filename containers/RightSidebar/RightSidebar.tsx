import * as React from 'react'
import Box from '@mui/material/Box'
import RightSidebarHeader from './RightSidebarHeader'
import RightSidebarContent from './RightSidebarContent'

const RightSidebar = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        height: '100%',
      }}
    >
      <RightSidebarHeader />
      <RightSidebarContent />
    </Box>
  )
}

export default RightSidebar
