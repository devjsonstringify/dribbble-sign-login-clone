import * as React from 'react'
import Box from '@mui/material/Box'
import LoginInForm from './LoginInForm'
import SignUpForm from './SignUpForm'
import LayoutCtx from '../../containers/LayoutCtx'

const Forms = () => {
  const LeftSideCtx = React.useContext(LayoutCtx)
  return (
    <Box>{LeftSideCtx?.isSignedView ? <LoginInForm /> : <SignUpForm />}</Box>
  )
}

export default Forms
