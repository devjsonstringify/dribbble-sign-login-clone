import * as React from 'react'
import Box from '@mui/system/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LayoutCtx from '../../LayoutCtx'

const RightSidebarHeader = () => {
  const LeftSideCtx = React.useContext(LayoutCtx)
  const alreadyMember = LeftSideCtx?.isSignedView
    ? 'Not a member'
    : ' Already a member'
  const buttonText = LeftSideCtx?.isSignedView ? 'Sign up now' : 'Login'

  return (
    <Box sx={{ display: 'block', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1.563rem 1.563rem 0',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{alreadyMember}</Typography>
          <Button
            color="secondary"
            disableRipple
            variant="text"
            onClick={LeftSideCtx?.onHandleToggleView}
            sx={{
              fontWeight: '400',
              textTransform: 'inherit',
              ':hover': {
                backgroundColor: 'rgba(0,0,0,0)',
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RightSidebarHeader
