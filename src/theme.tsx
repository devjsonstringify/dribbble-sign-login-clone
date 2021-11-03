import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    dribbleAccents: {
      brown: string
      pink: string
      textPink: string
      yellow: string
      textYellow: string
      textGrayA: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    dribbleAccents?: {
      brown?: string
      pink?: string
      textPink?: string
      yellow?: string
      textYellow?: string
      textGrayA?: string
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
    textPink: '#865c6c',
    yellow: '#f2d184',
    textYellow: '#866118',
    textGrayA: '#6e6d7a',
  },
})

export default theme
