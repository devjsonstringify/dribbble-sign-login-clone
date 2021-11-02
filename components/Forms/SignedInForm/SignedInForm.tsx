import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import TextField from '../TextField'
import TermsAndCondition from '../../TermsAndCondition'

const SignedInForm = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: '1rem',
          '> .MuiBox-root': {
            mb: '0',
          },
        }}
      >
        <TextField label="Name" />
        <TextField label="Username" />
      </Box>
      <TextField label="Email" />
      <TextField label="Password" placeholder="6+ characters" />
      <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
        <Checkbox
          color="default"
          inputProps={{ 'aria-label': 'Checkbox demo' }}
          sx={{
            py: '0',
            pl: '0',
            ':hover': {
              backgroundColor: 'rgba(0,0,0,0)',
            },
            '&.Mui-checked': {
              color: '#4f3cc9',
            },
          }}
        />
        <Box sx={{ alignSelf: 'flex-end' }}>
          <TermsAndCondition />
        </Box>
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
        Create Account
      </Button>
    </Box>
  )
}

export default SignedInForm
