import * as React from 'react'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import LayoutCtx from './LayoutCtx'
import RightSidebar from './RightSidebar'

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
    <LayoutCtx.Provider value={LeftSidebarAPI}>
      <Box sx={{ height: '100%', overflow: 'hidden' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid
            item
            md={3}
            sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}
          >
            <LeftSidebar />
          </Grid>
          <Grid item xs={12} md={9} sx={{ height: '100%' }}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Box>
    </LayoutCtx.Provider>
  )
}

export default Layout
