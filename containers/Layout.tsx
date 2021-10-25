import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  const theme = useTheme()
  return (
    <Box sx={{ height: '100%' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid
          item
          md={3}
          sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}
        >
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              height: '100%',
            }}
          >
            left sidebar
          </Box>
        </Grid>
        <Grid item xs={12} md={9} sx={{ height: '100%' }}>
          <Box
            sx={{
              bgcolor: theme.palette.primary.light,
              height: '100%',
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout
