import React from 'react'
import Box from '@mui/material/Box'
import MuiTextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

type TexTFieldProps = {
  label?: string
  rightText?: JSX.Element
}

const TextField = ({ label, rightText }: TexTFieldProps): JSX.Element => {
  const rightTextStyles = {
    display: rightText ? 'flex' : 'block',
    justifyContent: rightText ? 'space-between' : 'unset',
  }
  return (
    <Box sx={{ margin: '0.75rem 0 1rem' }}>
      <Box>
        <Typography
          color="InfoText"
          variant="body2"
          sx={{ fontWeight: '800', mb: '0.5rem' }}
        >
          {label}
        </Typography>
        {rightText && rightText}
      </Box>
      <MuiTextField
        fullWidth
        sx={{
          '.MuiOutlinedInput-root': {
            borderRadius: '0.5rem',
            transition:
              'background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease',
            ':hover': {
              boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)',
              '.MuiOutlinedInput-notchedOutline': {
                border: '1px solid #f3f3f4',
              },
              '.MuiOutlinedInput-input': {
                border: '1px solid #f3f3f4',
                backgroundColor: 'rgba(0,0,0,0)',
              },
            },
          },
          '.MuiOutlinedInput-input': {
            boxSizing: 'border-box',
            backgroundColor: '#f3f3f4',
            border: '1px solid #f3f3f4',

            height: '2.5rem',
            padding: '0.625rem 1rem',
          },
        }}
      />
    </Box>
  )
}

export default TextField
