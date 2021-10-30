import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LeftSidebarCtx from '../../containers/LayoutCtx'

const AlreadyMember = () => {
  const LeftSideCtx = React.useContext(LeftSidebarCtx)
  const headerText: string = LeftSideCtx?.isSignedView
    ? 'Sign in to Dribbble'
    : 'Sign up to Dribbble'

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {headerText}
      </Typography>
    </Box>
  )
}

export default AlreadyMember
