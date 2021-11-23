import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Fade from '@mui/material/Fade'
import { IHasError } from '../../../containers/LayoutCtx'

const HeaderNotification = (props: IHasError): JSX.Element => {
  const { isError, message } = props
  return (
    <Fade in={isError}>
      <Box
        sx={{
          boxSizing: 'border-box',
          backgroundColor: '#f55',
          padding: '0.75rem',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ color: '#fff' }}>{message}</Typography>
        </Container>
      </Box>
    </Fade>
  )
}

export default HeaderNotification
