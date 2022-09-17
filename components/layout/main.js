import { Container } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { Footer } from '../common/footer'
import { Header } from '../common/header/index'

export function MainLayout({ children }) {
  return (
    <Stack minHeight="100vh" direction="column">
      <Header />

      <Box component="main" flexGrow="1" style={{ zIndex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
