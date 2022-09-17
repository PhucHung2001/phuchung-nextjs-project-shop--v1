import Head from 'next/head'
import React from 'react'
import Box from '@mui/material/Box'
import { MainLayout } from '../components/layout/main'
import Carousel from 'react-material-ui-carousel'
import HeroBannerImg from '../components/common/heroBannerImg'
import slider1 from '../assets/images/slide-1.jpg'
import slider2 from '../assets/images/slide-2.jpg'
import Image from 'next/image'
import { Typography } from '@mui/material'
export default function Home() {
  const IMAGE_BANNER = [
    {
      src: slider1,
    },
    {
      src: slider2,
    },
  ]
  return (
    <Box>
      <Head>
        <title>PHSHOP | HOME</title>
        <meta name="description" content="User CRUD app" />
      </Head>

      <Box className="banner" style={{ width: '100%', position: 'relative' }}>
        <Box component="section">
          <Carousel
            animation="slide"
            navButtonsAlwaysVisible={true}
            stopAutoPlayOnHover={true}
            swipe={true}
            indicators={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'transparent',
                border: '1px solid white',
                borderRadius: '50%',
                color: 'white',
                margin: '0px 50px',
              },
            }}
          >
            {IMAGE_BANNER.map((item, index) => {
              return (
                <Box key={index}>
                  <Image src={item.src} alt="image-banner-hero" height={750} />
                </Box>
              )
            })}
          </Carousel>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          <Box
            className="home__content"
            style={{
              position: 'absolute',
              top: '-350px',
              bottom: 0,
              height: '100%',
              left: '10%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              zIndex: '10',
            }}
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <h2
                style={{
                  color: 'white',
                  fontSize: '3em',
                  fontWeight: '500',
                }}
              >
                Buy 2 Get
              </h2>
              <span
                style={{
                  padding: '10px',
                  backgroundColor: '#fff',
                  margin: '0px 10px',
                  textAlign: 'center',
                  width: '150px',
                  height: '40px',
                  color: '#26c',
                  fontFamily: 'Segoe Script',
                  fontSize: '2.4em',
                  display: 'flex',
                  justifyContent: 'center',
                  lineHeight: '.7',
                  alignItems: 'center',
                }}
              >
                1 Free
              </span>
            </Box>
            <Box style={{ marginTop: '-50px' }}>
              <h2
                style={{
                  fontSize: '2em',
                  fontFamily: 'Poppins,sans-serif',
                  color: '#fff',
                }}
              >
                Fashionable
              </h2>
            </Box>

            <Box>
              <Typography
                variant="h2"
                style={{
                  fontWeight: '400',
                  fontFamily: 'Poppins,sans-serif',
                  color: '#fff',
                  fontSize: '1em',
                  paddingTop: '10px',
                }}
              >
                Get Free Shipping on all orders over $99.00
              </Typography>
            </Box>
            <Box>
              <a href="#container">
                <button
                  type="submit"
                  style={{
                    width: '135px',
                    height: '50px',
                    border: 'none',
                    background: '#cc9966',
                    margin: '10px 0',
                    fontSize: '1.2vmax',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                  className="Home__button"
                >
                  SHOP NOW
                </button>
              </a>
            </Box>
          </Box>
        </Box>
        <HeroBannerImg />
      </Box>
    </Box>
  )
}
Home.Layout = MainLayout
