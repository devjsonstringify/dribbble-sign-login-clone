import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { useTheme } from '@mui/material/styles'
import { useForm, Controller, Resolver } from 'react-hook-form'
import TextField from '../TextField'
import TermsAndCondition from '../../TermsAndCondition'

type FormValues = {
  name: string
  username: string
  email: string
  password: string
  isAcceptTerms: boolean
}

const SignUpForm = () => {
  const theme = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      isAcceptTerms: false,
    },
  })

  const onSubmit = handleSubmit((values: FormValues) => {
    console.log('onSubmit')
    alert(JSON.stringify(values, null, 2))
  })

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
            },
            gridColumnGap: '1rem',
            '> .MuiBox-root': {
              mb: '0',
            },
          }}
        >
          <Controller
            control={control}
            name="name"
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="username"
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                error={Boolean(errors.username)}
                helperText={errors.username?.message}
              />
            )}
          />
        </Box>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: 'Email address or password is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              placeholder="6+ characters"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          )}
        />
        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <Controller
            control={control}
            name="isAcceptTerms"
            rules={{ required: 'Terms and condition is required' }}
            render={({ field }) => (
              <Checkbox
                {...field}
                required
                inputProps={{ 'aria-label': 'Terms and conditions' }}
                sx={{
                  color: theme.dribbleAccents.textGrayA,
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
            )}
          />
          <Box sx={{ alignSelf: 'flex-end' }}>
            <TermsAndCondition />
          </Box>
        </Box>
        <Button
          type="submit"
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
      </form>
    </Box>
  )
}

export default SignUpForm
