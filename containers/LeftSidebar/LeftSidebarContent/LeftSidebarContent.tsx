import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import DynamicImage from '../../../components/DynamicImage'
import Box from '@mui/material/Box'
import LeftSidebarCtx from '../../LayoutCtx'

const LeftSidebarContent = (): JSX.Element => {
  const theme = useTheme()
  const LeftSideCtx = React.useContext(LeftSidebarCtx)

  const bgImage = LeftSideCtx?.isSignedView
    ? 'url(/assets/Irina_Valeeva_illustration.jpg)'
    : 'url(/assets/Peter_Tarka_illustration.webp)'

  const accent = LeftSideCtx?.isSignedView
    ? theme?.dribbleAccents?.textPink
    : theme?.dribbleAccents?.textYellow

  const href = LeftSideCtx?.isSignedView
    ? 'https://dribbble.com/karicca'
    : 'https://dribbble.com/tarka'

  const artist = LeftSideCtx?.isSignedView ? 'Irina Valeeva' : 'Peter Tarka'

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        paddingBottom: '2rem',
      }}
    >
      <DynamicImage
        href={href}
        artist={artist}
        accent={accent}
        bgImage={bgImage}
      />
    </Box>
  )
}

export default LeftSidebarContent
