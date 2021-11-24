import * as React from 'react'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Collapse from '@mui/material/Collapse'
import LayoutCtx from '../../../containers/LayoutCtx'

const ReminderNotification = () => {
  const layoutAPI = React.useContext(LayoutCtx)

  return (
    <Collapse in={layoutAPI?.openReminder}>
      <Alert
        variant="filled"
        severity="info"
        action={
          <IconButton
            aria-label="reminder"
            color="inherit"
            size="small"
            onClick={() => layoutAPI?.onHandleOpenReminder()}
          >
            <CloseIcon />
          </IconButton>
        }
        sx={{ borderRadius: 0, textAlign: 'center' }}
      >
        Reminder: please don't use your real dribble account details.
      </Alert>
    </Collapse>
  )
}

export default ReminderNotification
