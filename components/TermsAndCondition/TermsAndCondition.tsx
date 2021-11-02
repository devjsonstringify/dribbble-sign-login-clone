import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const TermsAndCondition = () => {
  return (
    <Box>
      <Typography variant="body2">
        Creating an account means you’re okay with our{' '}
        <Link underline="none" color="secondary.main">
          {' '}
          Terms of Service
        </Link>
        ,{' '}
        <Link underline="none" color="secondary.main">
          Privacy Policy,
        </Link>{' '}
        and our default{' '}
        <Link underline="none" color="secondary.main">
          {' '}
          Notification Settings.
        </Link>
      </Typography>
    </Box>
  )
}

export default TermsAndCondition
