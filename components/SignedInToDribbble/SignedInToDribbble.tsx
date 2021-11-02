import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GoogleLogin from 'react-google-login'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import LeftSidebarCtx from '../../containers/LayoutCtx'
import AlreadyMember from '../AlreadyMember'
import Logo from '../../components/Logo'

const SignedInToDribbble = () => {
  const LeftSideCtx = React.useContext(LeftSidebarCtx)

  const googleButtonText: string = LeftSideCtx?.isSignedView
    ? 'Sign in with Dribbble'
    : 'Sign up with Dribbble'

  return (
    <Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          height: 'auto',
          minWidth: '3.75rem',
          maxWidth: '5.625rem',
          marginBottom: '1.875rem',
        }}
      >
        <Logo ariaLabel="logo-right-sidebar" role="image" />
      </Box>
      <AlreadyMember />
      <Box
        sx={{
          display: 'flex',
          marginTop: '1.625rem',
          'button:first-child': {
            border: '2px solid #1a73e8 !important',
            backgroundColor: '#1a73e8 !important',
            borderRadius: '5px !important',
            minWidth: '15rem',
            height: '2.875rem',
            boxShadow: 0,

            span: {
              color: '#ffffff',
              textAlign: 'center',
              width: '100%',
            },
          },
        }}
      >
        <GoogleLogin
          clientId="xxxxxxxx"
          buttonText={googleButtonText}
          onSuccess={() => console.log('onSuccess')}
          onFailure={() => console.log('onFailure')}
          icon={true}
          cookiePolicy={'single_host_origin'}
        />
        <IconButton
          sx={{
            border: '2px solid rgba(0,0,0,0)',
            backgroundColor: '#f2f2f2',
            borderRadius: '20%',
            padding: '1rem',
            height: '2.875rem',
            ml: '1rem',
            '.MuiSvgIcon-root': {
              width: '.7em',
              height: '.7em',
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SignedInToDribbble
