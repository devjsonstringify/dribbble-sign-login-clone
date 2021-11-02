import * as React from 'react'
import Box from '@mui/material/Box'
import LoginInForm from './LoginInForm'
import SignedInForm from './SignedInForm'
import LayoutCtx from '../../containers/LayoutCtx'

const Forms = () => {
  const LeftSideCtx = React.useContext(LayoutCtx)
  return (
    <Box>{LeftSideCtx?.isSignedView ? <LoginInForm /> : <SignedInForm />}</Box>
  )
}

export default Forms
