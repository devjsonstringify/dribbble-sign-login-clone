import * as React from 'react'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import LeftSidebarCtx from './LeftSidebarCtx'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  const theme = useTheme()
  const [isSignedView, setIsSignedView] = React.useState<boolean>(true)

  const accentText = isSignedView
    ? theme?.dribbleAccents?.textPink
    : theme?.dribbleAccents?.textYellow

  const accentBg = isSignedView
    ? theme?.dribbleAccents?.pink
    : theme?.dribbleAccents?.yellow

  const onHandleToggleView = () => setIsSignedView((prev) => !prev)

  const LeftSidebarAPI = React.useMemo(
    () => ({ onHandleToggleView, accentText, accentBg, isSignedView }),
    [isSignedView]
  )

  return (
    <Box sx={{ height: '100%' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid
          item
          md={3}
          sx={{ display: { sm: 'none', md: 'block' }, height: '100%' }}
        >
          <LeftSidebarCtx.Provider value={LeftSidebarAPI}>
            <LeftSidebar />
          </LeftSidebarCtx.Provider>
        </Grid>
        <Grid item xs={12} md={9} sx={{ height: '100%' }}>
          <Box
            sx={{
              bgcolor: theme.palette.primary.light,
              height: '100%',
            }}
          >
            <button onClick={onHandleToggleView}>click me </button>
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
