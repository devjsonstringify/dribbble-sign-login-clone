import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SignedInToDribbble from '../../../components/SignedInToDribbble'

const RightSidebarContent = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Container maxWidth="sm" sx={{ margin: 'auto' }}>
        <SignedInToDribbble />
        <Box sx={{ my: '2rem' }}>
          <Divider>Or</Divider>
        </Box>
      </Container>
    </Box>
  )
}

export default RightSidebarContent
