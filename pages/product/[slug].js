import { useRouter } from 'next/router'
import Head from 'next/head'
import {
  Button,
  Container,
  Grid,
  Link as MuiLink,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'
import { useSnackbar } from 'notistack'
import React from 'react'
import axios from 'axios'
import { MainLayout } from '../../components/layout/main'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import data from '../../utils/data'
import Link from 'next/link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Image from 'next/image'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import db from '../../utils/db'
import Product from '../../models/Product'
import { useContext } from 'react'
import { Store } from '../../utils/Store'
export default function ProductScreen(props) {
  const { product } = props
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { slug } = router.query
  const { state, dispatch } = useContext(Store)
  // const product = data.products.find((a) => a.slug === slug)
  if (!product) {
    return <div>Not found</div>
  }
  console.log(state.cart)
  const addToCartHandle = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
      setLoading(false)
      enqueueSnackbar('Sorry.Product out of stock', { variant: 'error' })

      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    enqueueSnackbar('Product added to cart', { variant: 'success' })
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
                <Typography style={{ color: '#777' }}>{product.description}</Typography>
              </ListItem>
              <ListItem style={{ borderBottom: '1px solid #ddd', paddingBottom: '30px' }}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" style={{ padding: '10px' }} onClick={addToCartHandle}>
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
export async function getServerSideProps(context) {
  const { params } = context
  const { slug } = params

  await db.connect()
  const product = await Product.findOne({ slug }, '-reviews').lean()
  await db.disconnect()
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  }
}
