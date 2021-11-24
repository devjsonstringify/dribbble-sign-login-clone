import * as React from 'react'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import LayoutCtx, { IHasError } from './LayoutCtx'
import RightSidebar from './RightSidebar'
import HeaderNotification from '../components/Notifications/HeaderNotification'
import ReminderNotification from '../components/Notifications/ReminderNotification'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  const theme = useTheme()
  const [isSignedView, setIsSignedView] = React.useState<boolean>(true)
  const [openReminder, setOpenReminder] = React.useState<boolean>(true)
  const [hasError, setHasError] = React.useState<IHasError>({
    isError: false,
    message: '',
  })

  const accentText = isSignedView
    ? theme?.dribbleAccents?.textPink
    : theme?.dribbleAccents?.textYellow

  const accentBg = isSignedView
    ? theme?.dribbleAccents?.pink
    : theme?.dribbleAccents?.yellow

  const onHandleToggleView = () => setIsSignedView((prev) => !prev)
  const onHandleOpenReminder = () => setOpenReminder((prev) => !prev)
  const onHandleError = (value: IHasError) =>
    setHasError((prev) => ({
      ...prev,
      isError: value.isError,
      message: value.message,
    }))

  const LeftSidebarAPI = React.useMemo(
    () => ({
      onHandleToggleView,
      accentText,
      accentBg,
      isSignedView,
      onHandleError,
      onHandleOpenReminder,
      hasError,
      openReminder,
    }),
    [isSignedView, hasError, openReminder]
  )

  console.log(openReminder)

  return (
    <LayoutCtx.Provider value={LeftSidebarAPI}>
      {hasError.isError && (
        <HeaderNotification
          isError={hasError.isError}
          message={hasError.message}
        />
      )}
      {openReminder && <ReminderNotification />}

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
