import { useRouter } from 'next/router'
import Head from 'next/head'
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Link as MuiLink,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { MainLayout } from '../../components/layout/main'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import data from '../../utils/data'
import Link from 'next/link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Image from 'next/image'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
export default function ProductScreen() {
  const router = useRouter()
  const { slug } = router.query
  const product = data.products.find((a) => a.slug === slug)
  if (!product) {
    return <div>Not found</div>
  }
  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '30px' }}>
      <Head>
        <title>PHSHOP | PRODUCT</title>
        <meta name="description" content="User CRUD app" />
      </Head>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
          <Link href="/" passHref>
            <MuiLink underline="hover" color="inherit" href="/" style={{ color: 'black' }}>
              Home
            </MuiLink>
          </Link>
          <Typography color="text.primary">Products</Typography>

          <Typography color="text.primary">Product Detail</Typography>
        </Breadcrumbs>
        <Grid container spacing={1} style={{ marginTop: '15px' }}>
          <Grid item md={5} xs={12}>
            <Image src={product.image} alt={product.name} width={450} height={540} />
          </Grid>
          <Grid item md={7} xs={12}>
            <List style={{ marginTop: '-20px' }}>
              <ListItem>
                <Typography component="h2" variant="h5" style={{ fontWeight: '500' }}>
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component="h3" variant="h7" style={{ color: '#777' }}>
                  {product.brand} - {product.category}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component="h2" variant="h5" style={{ fontWeight: '500' }}>
                  Rating
                </Typography>
              </ListItem>

              <ListItem>
                <Typography
                  component="h2"
                  variant="h5"
                  style={{ fontSize: '20px', color: '#ef837b' }}
                >
                  ${product.price}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component="h2"
                  variant="h5"
                  style={{ fontSize: '20px', color: '#ef837b' }}
                >
                  {product.countInStock < 0 ? 'Out Stock' : 'In Stock'}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography style={{ color: '#777' }}>${product.description}</Typography>
              </ListItem>
              <ListItem style={{ borderBottom: '1px solid #ddd', paddingBottom: '30px' }}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" style={{ padding: '10px' }}>
                    <AddShoppingCartIcon />
                    <Typography style={{ fontSize: '15px', marginLeft: '5px' }}>
                      ADD TO CART
                    </Typography>
                  </Button>
                  <Button variant="contained">BUY NOW</Button>
                </Stack>
              </ListItem>
              <ListItem>
                <Typography style={{ color: '#777' }}>Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography style={{ color: '#777' }}>Brand: {product.brand}</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
ProductScreen.Layout = MainLayout
