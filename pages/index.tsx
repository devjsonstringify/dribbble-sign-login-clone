import * as React from 'react'
import Box from '@mui/material/Box'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home(): JSX.Element {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      dsfasd
    </Box>
  )
}

export default Home
