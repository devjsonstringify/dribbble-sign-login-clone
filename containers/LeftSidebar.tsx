import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import DynamicImage from '../components/DynamicImage'

type LeftSidebarProps = {
  isSignedView: boolean
}

const LeftSidebar = ({ isSignedView }: LeftSidebarProps): JSX.Element => {
  const theme = useTheme()

  const bgImage = isSignedView
    ? 'url(/assets/Irina_Valeeva_illustration.jpg)'
    : 'url(/assets/Peter_Tarka_illustration.webp)'

  const accent = isSignedView
    ? theme?.dribbleAccents?.brown
    : theme?.dribbleAccents?.pink

  const href = isSignedView
    ? 'https://dribbble.com/karicca'
    : 'https://dribbble.com/tarka'

  const artist = isSignedView ? 'Irina Valeeva' : 'Peter Tarka'

  return (
    <>
      <DynamicImage
        href={href}
        artist={artist}
        accent={accent}
        bgImage={bgImage}
      />
    </>
  )
}

export default LeftSidebar
