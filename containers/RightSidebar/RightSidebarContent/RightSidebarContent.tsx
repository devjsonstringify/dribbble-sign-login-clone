import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SignedInToDribbble from '../../../components/SignedInToDribbble'
import RightSidebarHeader from '../RightSidebarHeader'
import Forms from '../../../components/Forms'

const RightSidebarContent = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Container maxWidth="sm" sx={{ margin: 'auto' }}>
        <SignedInToDribbble />
        <Box sx={{ m: '1.875rem 3.75rem  0' }}>
          <Divider>Or</Divider>
        </Box>
        <Forms />
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <RightSidebarHeader />
        </Box>
      </Container>
    </Box>
  )
}

export default RightSidebarContent
