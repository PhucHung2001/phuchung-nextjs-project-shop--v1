import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Container, Grid, Icon, List, ListItem, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import imageFooter from '../../assets/images/payments.png'
import logoShop from '../../assets/images/PHMovie__1___1___1_-removebg-preview.png'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://google.com' },
    { icon: Instagram, url: 'https://google.com' },
    { icon: Twitter, url: 'https://google.com' },
    { icon: LinkedIn, url: 'https://google.com' },
  ]

  return (
    <Box component="footer" py={2} style={{ backgroundColor: '#222222', color: 'white' }}>
      <Container style={{ padding: '30px 0px' }}>
        <Grid
          container
          spacing={1}
          style={{ borderBottom: '1px solid #444', paddingBottom: '15px' }}
        >
          <Grid item md={3} xs={12}>
            <Box>
              <List>
                <ListItem>
                  <Typography component="h4" variant="h8">
                    ABOUT PHSHOP
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>
                    Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
                    vulputate magna eros eu erat.
                  </Typography>
                </ListItem>
              </List>
              <Stack direction="row" justifyContent={{ xs: 'start', sm: 'start' }}>
                {socialLinks.map((item, idx) => (
                  <Box
                    key={idx}
                    component="a"
                    p={2}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon component={item.icon} sx={{ fontSize: 20 }} style={{ color: 'White' }} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <List>
                <ListItem>
                  <Typography component="h4" variant="h8">
                    USEFUL LINKS
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>About Molla</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>
                    How to shop on Molla
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>FAQ</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>Contact Us</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>Login</Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <List>
                <ListItem>
                  <Typography component="h4" variant="h8">
                    CUSTOMER SERVICE
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>
                    Payment Methods
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>
                    Money-back guarantee!
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>Returns</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>Shipping</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>
                    Terms and conditions
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>
                    Privacy Policy
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <List>
                <ListItem>
                  <Typography component="h4" variant="h8">
                    MY ACCOUNT
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>Sign in</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>View cart</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>My order</Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ opacity: '0.4', fontSize: '13px' }}>Help</Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
        <Stack direction="column" alignItems="center" marginTop="30px">
          <Image src={imageFooter} />
          <Typography component="h3" variant="h7" style={{ marginTop: '20px' }}>
            PHSHOP
          </Typography>
          <Typography style={{ fontSize: '13px', opacity: '0.4', marginTop: '10px' }}>
            Copyright ©{new Date().getFullYear()} All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
