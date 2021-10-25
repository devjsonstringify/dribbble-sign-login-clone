import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ea4c89',
    },
    secondary: {
      main: '#403AB3',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
