import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useForm, Controller } from 'react-hook-form'
import TextField from '../TextField'
import Button from '@mui/material/Button'

type FormValues = {
  username: string
  password: string
}

const LoginInForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = (values: unknown) => alert(JSON.stringify(values))

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextField {...field} label="Username or Email Address" />
          )}
        />
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
          <Controller
            control={control}
            name="password"
            render={({ field }) => <TextField {...field} label="Password" />}
          />
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
          Sign In
        </Button>
      </form>
    </Box>
  )
}

export default LoginInForm
