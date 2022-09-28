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
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import * as React from 'react'
import { ROUTES_LIST } from './routes'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import InstagramIcon from '@mui/icons-material/Instagram'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import logoShop from '../../../assets/images/PHMovie__1___1___1_-removebg-preview.png'
const HeaderMain = dynamic(() => import('../header/headerMain'), { ssr: false })
export function HeaderDesktop() {
  const router = useRouter()
  const submitHandler = (e) => {
    e.preventDefault()
  }
  const goToLogin = () => {
    router.push('/login')
  }
  const goToCart = () => {
    router.push('/cart')
  }
  // const circleOfNumbers = (n, firstNumber) => {
  //   return (firstNumber + n / 2) % n
  // }
  // circleOfNumbers(10, 2)
  // console.log(circleOfNumbers(10, 2))
  const queryChangeHandler = (e) => {}
  return (
    <>
      <Box
        sx={{
          display: { xs: 'block', sm: 'block' },
          fontSize: '13px',
          textDecoration: 'none',
        }}
        py={1}
        style={{
          backgroundColor: '#fff',
        }}
      >
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            style={{ borderBottom: '1px solid #ddd', paddingBottom: '5px' }}
          >
            <Box
              className="header-firt-left"
              style={{ fontWeight: '300', color: '#7a7876' }}
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <LocalPhoneOutlinedIcon style={{ fontSize: '17px', marginRight: '5px' }} />
                <Typography style={{ fontSize: '13px' }}>Call: +0123 456 789</Typography>
              </Stack>
            </Box>
            <Box className="header-firt-right" style={{ fontWeight: '300', color: '#7a7876' }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box style={{ marginRight: '10px' }}>
                  <FacebookOutlinedIcon style={{ fontSize: '17px', marginRight: '10px' }} />
                  <TwitterIcon style={{ fontSize: '17px', marginRight: '10px' }} />
                  <PinterestIcon style={{ fontSize: '17px', marginRight: '10px' }} />
                  <InstagramIcon style={{ fontSize: '17px', marginRight: '10px' }} />
                </Box>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography style={{ fontSize: '13px' }}>Welcome to the PHSHOP</Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', sm: 'block' },
        }}
        py={0}
        style={{
          backgroundColor: '#fff',
        }}
      >
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box
              sx={{
                display: { xs: 'block', sm: 'block' },
              }}
            >
              <form onSubmit={submitHandler} style={{ marginLeft: '-10px' }}>
                <IconButton
                  type="submit"
                  aria-label="search"
                  sx={{
                    display: { xs: 'none', sm: 'inline-block' },
                  }}
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  name="query"
                  placeholder="Search products"
                  fontSize="11px"
                  onChange={queryChangeHandler}
                />
              </form>
            </Box>
            <Box>
              <Link href="/" passHref>
                <MuiLink>
                  <Image src={logoShop} width={150} height={80} />
                </MuiLink>
              </Link>
            </Box>

            <Box
              className="header-firt-right"
              style={{
                fontWeight: '300',
                color: '#7a7876',
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={goToLogin}
                  style={{ cursor: 'pointer' }}
                >
                  <Box>
                    <AccountCircleOutlinedIcon
                      style={{ fontSize: '25px', marginRight: '5px', marginTop: '5px' }}
                    />
                  </Box>
                  <Box>
                    <Typography style={{ fontSize: '15px' }}>Login</Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                  onClick={goToCart}
                >
                  <Box>
                    <Badge badgeContent={4} color="primary">
                      <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                  </Box>
                  <Box style={{ marginLeft: '10px' }}>
                    <Typography style={{ fontSize: '15px' }}>Cart</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <HeaderMain />
    </>
  )
}
