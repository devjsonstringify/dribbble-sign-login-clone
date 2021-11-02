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
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <RightSidebarHeader />
      </Box>
      <RightSidebarContent />
    </Box>
  )
}

export default RightSidebar
