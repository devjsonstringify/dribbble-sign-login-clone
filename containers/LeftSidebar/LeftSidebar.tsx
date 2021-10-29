import * as React from 'react'
import Box from '@mui/material/Box'
import LeftSidebarContent from './LeftSidebarContent'
import LeftSidebarHeader from './LeftSidebarHeader'
import LeftSidebarCtx from '../LayoutCtx'

const LeftSidebar = (): JSX.Element => {
  const LeftSideCtx = React.useContext(LeftSidebarCtx)

  return (
    <Box
      sx={{
        bgcolor: LeftSideCtx?.accentBg,
        display: 'grid',
        gridTemplateRows: '1fr 2fr',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <LeftSidebarHeader />
      <LeftSidebarContent />
    </Box>
  )
}

export default LeftSidebar
