import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Logo from '../Logo'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

type LeftSidebarProps = {
  isSignedView: boolean
}

const LeftSidebarHeader = ({ isSignedView }: LeftSidebarProps): JSX.Element => {
  const theme = useTheme()

  const accent = isSignedView
    ? theme?.dribbleAccents?.textPink
    : theme?.dribbleAccents?.textYellow

  return (
    <>
      <Box
        sx={{
          height: 'auto',
          minWidth: '3.75rem',
          maxWidth: '5.625rem',
          marginBottom: '1.875rem',
        }}
      >
        <Link href="https://dribbble.com/">
          <Logo ariaLabel="dribble-logo" fill={accent} role="image" />
        </Link>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: accent,
        }}
      >
        Discover the world’s top Designers & Creatives.
      </Typography>
    </>
  )
}

export default LeftSidebarHeader
