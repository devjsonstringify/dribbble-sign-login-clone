import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Logo from '../../../components/Logo'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import LeftSidebarCtx from '../../LayoutCtx'

const LeftSidebarHeader = (): JSX.Element => {
  const theme = useTheme()
  const LeftSideCtx = React.useContext(LeftSidebarCtx)

  return (
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
            fill={LeftSideCtx?.accentText}
            role="image"
          />
        </Link>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: LeftSideCtx?.accentText,
        }}
      >
        Discover the world’s top Designers & Creatives.
      </Typography>
    </Box>
  )
}

export default LeftSidebarHeader
