import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    dribbleAccents: {
      brown: string
      pink: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    dribbleAccents?: {
      brown?: string
      pink?: string
    }
  }
}

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
  dribbleAccents: {
    brown: '#865c6c',
    pink: '#F1CDD7',
  },
})

export default theme
