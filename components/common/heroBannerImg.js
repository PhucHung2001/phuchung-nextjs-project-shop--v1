import { Container, Box, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import banner1 from '../../assets/images/slider1 (1).jpg'
import banner2 from '../../assets/images/slider2.jpg'
import styles from '../../styles/Home.module.css'
export default function HeroBannerImg() {
  const IMAGE_BANNER = [
    {
      src: banner1,
    },
    {
      src: banner2,
    },
  ]
  return (
    <Box>
      <Container>
        <Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            spacing={3}
            className="hero-image-banner"
          >
            {IMAGE_BANNER.map((item, index) => {
              return (
                <Box key={index}>
                  <Image
                    src={item.src}
                    alt="image-banner-hero"
                    className={styles.imagebannehero}
                    style={{ height: '50%' }}
                  />
                </Box>
              )
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
