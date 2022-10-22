import Head from 'next/head'
import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import { MainLayout } from '../components/layout/main'
import Carousel from 'react-material-ui-carousel'
import HeroBannerImg from '../components/common/heroBannerImg'
import slider1 from '../assets/images/slide-1.jpg'
import slider2 from '../assets/images/slide-2.jpg'
import Slider from 'react-slick'
import Image from 'next/image'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import bg1 from '../assets/images/bg-1.jpg'
import product1 from '../assets/images/product_1_1_300x408_3ab4983c1d-removebg-preview.png'
import product2 from '../assets/images/product_2_1_300x408_2061def759-removebg-preview.png'
import { Container } from '@mui/system'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import slick1 from '../assets/images/1.png'
import slick2 from '../assets/images/2.png'
import slick3 from '../assets/images/3.png'
import slick4 from '../assets/images/4.png'
import slick5 from '../assets/images/5.png'
import slick6 from '../assets/images/6.png'
import slick7 from '../assets/images/7.png'
import slick8 from '../assets/images/8.png'
import slick9 from '../assets/images/9.png'
import post1 from '../assets/images/post_1_4324bd5309.jpg'
import post2 from '../assets/images/post_2_15815069af.jpg'
import post3 from '../assets/images/post_3_0a6ccce5a4.jpg'
import data from '../utils/data'
import NextLink from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import db from '../utils/db'
import Product from '../models/Product'
import { Store } from '../utils/Store'
import axios from 'axios'
import styles from '../styles/HomePage.module.css'
export default function Home(props) {
  const { featuredProducts, topRatedProducts } = props
  const IMAGE_BANNER = [
    {
      src: slider1,
    },
    {
      src: slider2,
    },
  ]
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 500,
    rows: 1,
  }
  const slickImage = [
    { path: slick1 },
    { path: slick2 },
    { path: slick3 },
    { path: slick4 },
    { path: slick5 },
    { path: slick6 },
    { path: slick7 },
    { path: slick8 },
    { path: slick9 },
  ]

  const { state, dispatch } = useContext(Store)
  const { cart } = state
  // const addToCartHandle = async () => {
  //   const existItem = state.cart.cartItems.find((x) => x._id === product._id)
  //   const quantity = existItem ? existItem.quantity + 1 : 1
  //   const { data } = await axios.get(`/api/products/${product._id}`)
  //   if (data.countInStock < quantity) {
  //     setLoading(false)
  //     enqueueSnackbar('Sorry.Product out of stock', { variant: 'error' })

  //     return
  //   }
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
  //   enqueueSnackbar('Product added to cart', { variant: 'success' })
  // }

  return (
    <Box>
      <Head>
        <title>PHSHOP | HOME</title>
        <meta name="description" content="User CRUD app" />
      </Head>

      <Box className="banner">
        <Box component="section" style={{ width: '100%', position: 'relative' }}>
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
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          >
            <Box
              className="home__content"
              style={{
                position: 'absolute',
                top: '200px',
                bottom: 0,
                height: '20%',
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
                <Button
                  variant="contained"
                  style={{
                    width: '135px',
                    height: '50px',
                    margin: '20px 0',

                    color: '#fff',
                    cursor: 'pointer',
                  }}
                  sx={{ fontSize: { xs: '15px', sm: '18px' } }}
                  className="Home__button"
                >
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <HeroBannerImg />
        <Box style={{ marginTop: '50px', marginBottom: '100px' }}>
          <Container>
            <Stack direction="row" justifyContent="center" style={{ marginBottom: '50px' }}>
              <Typography component="h2" variant="h5" style={{ fontWeight: 'bold' }}>
                FEATURED PRODUCTS
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {featuredProducts.map((product) => (
                <Grid item md={3} xs={6} key={product.name}>
                  <Card>
                    <NextLink href={`/product/${product.slug}`} passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={product.image}
                          title={product.name}
                          sx={{ height: { xs: '230px', sm: '350px' } }}
                        ></CardMedia>
                      </CardActionArea>
                    </NextLink>

                    <CardContent>
                      <Stack direction="column" alignItems="center">
                        <Typography style={{ fontSize: '13px', opacity: '0.5' }}>
                          {product.category}
                        </Typography>
                        <Typography
                          sx={{ fontSize: { xs: '14px', sm: '17px' }, fontWeight: 'bold' }}
                        >
                          {product.name}
                        </Typography>
                        <CardActions>${product.price}</CardActions>
                        <Button size="small" variant="text">
                          Add to cart
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box className={styles.deal}>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              zIndex: '10',
            }}
          >
            <Box display={{ xs: 'block', sm: 'block', md: 'block', textAlign: 'center' }}>
              <Typography component="h5" variant="h8" color="#c96" fontWeight="300">
                LIMITED QUANTITIES.
              </Typography>
              <Typography component="h2" variant="h5" marginTop="20px" fontWeight="bold">
                DEAL OF THE DAY
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                marginTop="20px"
                fontWeight="bold"
                color="#c96"
              >
                00 : 00 : 00
              </Typography>
              <Typography component="h2" variant="h5" marginTop="20px" fontWeight="bold">
                SHOP NOW
              </Typography>
              <Stack direction="row" spacing={1} padding="0px 20px">
                <Stack direction="column" alignItems="center">
                  <Image src={product1} width={250} height={300} />
                  <Box style={{ marginTop: '-20px' }}>
                    <Typography>Fine -knit Sweater</Typography>
                    <Typography>$8.89</Typography>
                    <Button variant="text">Shop Now</Button>
                  </Box>
                </Stack>
                <Stack direction="column" alignItems="center">
                  <Image src={product2} width={250} height={300} />
                  <Box style={{ marginTop: '-20px' }}>
                    <Typography>Elasticated shorts</Typography>
                    <Typography>$8.89</Typography>
                    <Button variant="text">Shop Now</Button>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box style={{ backgroundColor: '#222222', color: 'white', marginTop: '80px' }}>
          <Container>
            <Grid container spacing={2} style={{ padding: '40px 0px' }}>
              <Grid item md={3} xs={12}>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <LocalShippingOutlinedIcon style={{ fontSize: '35px', color: '#c96' }} />
                  <Typography component="h3" variant="h7">
                    Payment & Delivery
                  </Typography>
                  <Typography style={{ fontSize: '13px', opacity: '0.4' }}>
                    Free shipping for orders over $50
                  </Typography>
                </Stack>
              </Grid>
              <Grid item md={3} xs={12} textAlign="center">
                <Stack direction="column" alignItems="center" spacing={1}>
                  <RotateRightOutlinedIcon style={{ fontSize: '35px', color: '#c96' }} />
                  <Typography component="h3" variant="h7">
                    Return & Refund
                  </Typography>
                  <Typography style={{ fontSize: '13px', opacity: '0.4' }}>
                    Free 100% money back guarantee
                  </Typography>
                </Stack>
              </Grid>
              <Grid item md={3} xs={12} textAlign="center">
                <Stack direction="column" alignItems="center" spacing={1}>
                  <LockOpenOutlinedIcon style={{ fontSize: '35px', color: '#c96' }} />
                  <Typography component="h3" variant="h7">
                    Secure Payment
                  </Typography>
                  <Typography style={{ fontSize: '13px', opacity: '0.4' }}>
                    100% secure payment
                  </Typography>
                </Stack>
              </Grid>
              <Grid item md={3} xs={12} textAlign="center">
                <Stack direction="column" alignItems="center" spacing={1}>
                  <HeadphonesOutlinedIcon style={{ fontSize: '35px', color: '#c96' }} />
                  <Typography component="h3" variant="h7">
                    Quality Support
                  </Typography>
                  <Typography style={{ fontSize: '13px', opacity: '0.4' }}>
                    Alway online feedback 24/7
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box style={{ margin: '50px 0px' }}>
          <Container>
            <Stack direction="row" justifyContent="center" style={{ marginBottom: '50px' }}>
              <Typography component="h2" variant="h5" style={{ fontWeight: 'bold' }}>
                TOP RATED PRODUCTS
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {topRatedProducts.map((product) => (
                <Grid item md={3} xs={6} key={product.name}>
                  <Card>
                    <NextLink href={`/product/${product.slug}`} passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={product.image}
                          title={product.name}
                          sx={{ height: { xs: '230px', sm: '350px' } }}
                        ></CardMedia>
                      </CardActionArea>
                    </NextLink>

                    <CardContent>
                      <Stack direction="column" alignItems="center">
                        <Typography style={{ fontSize: '13px', opacity: '0.5' }}>
                          {product.category}
                        </Typography>
                        <Typography
                          sx={{ fontSize: { xs: '14px', sm: '17px' }, fontWeight: 'bold' }}
                        >
                          {product.name}
                        </Typography>
                        <CardActions>${product.price}</CardActions>
                        <Button size="small" variant="text">
                          Add to cart
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container style={{ marginBottom: '50px' }}>
            <Stack direction="column" alignItems="center" style={{ marginBottom: '50px' }}>
              <Typography component="h2" variant="h5" style={{ fontWeight: 'bold' }}>
                SHOP BY BRANDS
              </Typography>
            </Stack>
            <Slider {...settings}>
              {slickImage.map((item) => (
                <Box key={item.path}>
                  <Image src={item.path} />
                </Box>
              ))}
            </Slider>
          </Container>
        </Box>
        <Box>
          <Container style={{ marginBottom: '50px' }}>
            <Stack direction="column" alignItems="center" style={{ marginBottom: '50px' }}>
              <Typography component="h2" variant="h5" style={{ fontWeight: 'bold' }}>
                FROM OUR BLOG
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction={{ xs: 'column', sm: 'row', md: 'row' }}
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Image src={post1} />
                <Stack
                  spacing={1}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ marginTop: '15px' }}
                >
                  <Typography style={{ fontSize: '14px', opacity: '0.6' }}>
                    May 28,2022 | 3 Comments
                  </Typography>
                  <Typography
                    component="h3"
                    variant="h8"
                    style={{ fontWeight: 'bold', fontSize: '18px' }}
                  >
                    SED ADIPOSDBCING ORNARE
                  </Typography>
                  <Typography style={{ fontSize: '14px', opacity: '0.6' }}>
                    COUNTINUE READING
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Image src={post2} />
                <Stack
                  spacing={1}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ marginTop: '15px' }}
                >
                  <Typography style={{ fontSize: '14px', opacity: '0.6' }}>
                    May 28,2022 | 3 Comments
                  </Typography>
                  <Typography
                    component="h3"
                    variant="h8"
                    style={{ fontWeight: 'bold', fontSize: '18px' }}
                  >
                    AENAEN DIGISSIM PELLSWENSQUE
                  </Typography>
                  <Typography style={{ fontSize: '14px', opacity: '0.6' }}>
                    COUNTINUE READING
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Image src={post3} />
                <Stack
                  spacing={1}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ marginTop: '15px' }}
                >
                  <Typography style={{ fontSize: '14px', opacity: '0.6' }}>
                    May 28,2022 | 3 Comments
                  </Typography>
                  <Typography
                    component="h3"
                    variant="h8"
                    style={{ fontWeight: 'bold', fontSize: '18px' }}
                  >
                    QUSQUE VOLUTPADBT MATTIS
                  </Typography>
                  <Typography style={{ fontSize: '14px', opacity: '0.6' }}>
                    COUNTINUE READING
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
Home.Layout = MainLayout
export async function getServerSideProps() {
  await db.connect()
  const featuredProductsDocs = await Product.find({ isFeatured: true }, '-reviews').lean().limit(4)
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(4)
  await db.disconnect()
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  }
}
