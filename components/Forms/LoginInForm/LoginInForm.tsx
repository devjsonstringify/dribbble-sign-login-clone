import * as React from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useForm, Controller, Resolver } from 'react-hook-form'
import TextField from '../TextField'
import Button from '@mui/material/Button'
import { sleep } from '../../../utils/helper'

type FormValues = {
  username: string
  password: string
}

const LoginInForm = () => {
  const router = useRouter()
  const redirectToDribbbleSignInScreen = 'https://dribbble.com/session/new'
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit((values: FormValues) => {
    sleep(1000)
    if (values) {
      // redirect to actual dribbble site
      router.push(redirectToDribbbleSignInScreen)
    }
  })

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username or Email Address"
              error={Boolean(errors.username)}
            />
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
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                error={Boolean(errors.password)}
              />
            )}
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

// 09359183021 -
