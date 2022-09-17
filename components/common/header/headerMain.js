import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material'
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { useRef } from 'react'
import clsx from 'clsx'
import { ROUTES_LIST } from './routes'

export default function HeaderMain() {
  const router = useRouter()
  return (
    <Box
      sx={{ display: { xs: 'block', sm: 'block' } }}
      py="13px"
      style={{
        backgroundColor: '#323030',
        position: 'sticky',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            {ROUTES_LIST.map((route) => (
              <Link key={route.path} href={route.path} passHref>
                <MuiLink
                  sx={{
                    mr: 4,
                    fontWeight: 'medium',
                    color: 'white',
                    fontSize: { xs: '10px', sm: '15px' },
                    fontWeight: '500',
                    letterSpacing: 0.7,
                  }}
                  className={clsx({ active: router.pathname === route.path })}
                >
                  {route.label}
                </MuiLink>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <LightbulbCircleIcon style={{ color: 'cc9966', marginRight: '10px' }} />
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Typography style={{ color: 'white', fontSize: '15px' }}>
                  CLEARANCE UP TO 30% OFF
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
