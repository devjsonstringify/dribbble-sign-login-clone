import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

type DynamicImageProps = {
  href: string
  artist: string
  accent: string
  bgImage: string
}

const DynamicImage = ({
  href,
  artist,
  accent,
  bgImage,
}: DynamicImageProps): JSX.Element => {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          backgroundImage: bgImage,
          flexGrow: 1,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Typography
        sx={{
          paddingLeft: '4rem',
          color: accent,
        }}
      >
        Art by{' '}
        <Link href={href} sx={{ color: accent }}>
          {' '}
          {artist}
        </Link>
      </Typography>
    </>
  )
}

export default DynamicImage
