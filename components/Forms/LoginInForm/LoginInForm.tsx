import * as React from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useForm, Controller, Resolver } from 'react-hook-form'
import TextField from '../TextField'
import Button from '@mui/material/Button'
import { sleep } from '../../../utils/helper'
import LayoutCtx from '../../../containers/LayoutCtx'

type FormValues = {
  username: string
  password: string
}

const LoginInForm = () => {
  const layoutAPI = React.useContext(LayoutCtx)

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
    const result = window.prompt(
      `Form login details "\n"` +
        JSON.stringify(values, null, 2) +
        `"\n" Would you like to redirect to actual dribbble.com site?  type "Y" otherwise click cancel.`
    )

    if (typeof result === 'string' && result.toLocaleLowerCase() === 'y') {
      // redirect to actual dribbble site
      router.push(redirectToDribbbleSignInScreen)
    }
  })

  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      layoutAPI?.onHandleError({
        isError: true,
        message:
          'We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.',
      })
    } else {
      layoutAPI?.onHandleError({
        isError: false,
        message: '',
      })
    }
  }, [errors])

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Controller
          control={control}
          name="username"
          rules={{ required: 'Email address or username is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username or Email Address"
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
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
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
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
