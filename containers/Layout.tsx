import * as React from 'react'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import LeftSidebar from './LeftSidebar'
import LeftSidebarHeader from '../components/LeftSidebarHeader'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  const theme = useTheme()
  const [isSignedView, setIsSignedView] = React.useState<boolean>(true)
  const accent = isSignedView
    ? theme?.dribbleAccents?.pink
    : theme?.dribbleAccents?.yellow

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
              bgcolor: accent,
              display: 'grid',
              gridTemplateRows: '1fr 2fr',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box
              sx={{
                padding: {
                  xs: '3rem 2rem 0',
                  sm: '3rem 3rem 0',
                  md: '3rem 3rem 0',
                  lg: '4rem 4rem 0',
                  xl: '4rem 4rem 0',
                },
              }}
            >
              <LeftSidebarHeader isSignedView={isSignedView} />
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
              <LeftSidebar isSignedView={isSignedView} />
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
            <button onClick={() => setIsSignedView((prev) => !prev)}>
              click me{' '}
            </button>
            <pre>{JSON.stringify(isSignedView, null, 2)}</pre>
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
