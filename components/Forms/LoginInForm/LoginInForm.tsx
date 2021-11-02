import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import TextField from '../TextField'
import Button from '@mui/material/Button'

const LoginInForm = () => {
  return (
    <Box>
      <TextField label="Username or Email Address" />
      <Box sx={{ position: 'relative' }}>
        <Link
          href="/"
          sx={{
            color: 'secondary.main',
            textDecoration: 'underline',
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          Forgot password?
        </Link>
        <TextField label="Password" />
      </Box>
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{
          borderRadius: '0.5rem',
          textTransform: 'inherit',
          minWidth: '12.5rem',
          marginTop: '0.635rem',
          width: { xs: '100%', md: 'auto' },
        }}
      >
        Sign In
      </Button>
    </Box>
  )
}

export default LoginInForm
