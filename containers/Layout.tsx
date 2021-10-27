import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Logo from '../components/Logo'

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
          sx={{ display: { sm: 'none', md: 'block' }, height: '100%' }}
        >
          <Box
            sx={{
              bgcolor: theme?.dribbleAccents?.pink,
              display: 'grid',
              gridTemplateRows: '1fr 2fr',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box sx={{ padding: '4rem 4rem 0' }}>
              <Box
                sx={{
                  height: 'auto',
                  minWidth: '3.75rem',
                  maxWidth: '5.625rem',
                  marginBottom: '1.875rem',
                }}
              >
                <Link href="https://dribbble.com/">
                  <Logo
                    ariaLabel="dribble-logo"
                    fill={theme?.dribbleAccents?.brown}
                    role="image"
                  />
                </Link>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme?.dribbleAccents?.brown,
                }}
              >
                Discover the world’s top Designers & Creatives.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                height: '100%',
                paddingBottom: '2rem',
              }}
            >
              <LeftBgImage />
              <Typography
                sx={{
                  paddingLeft: '4rem',
                  color: theme?.dribbleAccents?.brown,
                }}
              >
                Art by{' '}
                <Link
                  href="https://dribbble.com/karicca"
                  sx={{ color: theme?.dribbleAccents?.brown }}
                >
                  {' '}
                  Irina Valeeva
                </Link>
              </Typography>
            </Box>
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

/**
 * @todo
 * 1. set color via global theme, incorrect text color
 */

const LeftBgImage = styled(Box)({
  backgroundImage: `url(/assets/procrastination.jpg)`,
  flexGrow: 1,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
})
