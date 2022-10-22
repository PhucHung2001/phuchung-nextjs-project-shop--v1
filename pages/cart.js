import React, { useContext } from 'react'
import { MainLayout } from '../components/layout/main'
import {
  Box,
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Stack,
  Button,
  Divider,
} from '@mui/material'
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  Card,
  List,
  ListItem,
} from '@mui/material'
import styles from '../styles/Cart.module.css'
import Link from 'next/link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Container } from '@mui/system'
import { Store } from '../utils/Store'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined'
function CartScreen() {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
  } = state
  const backHome = () => {
    router.push('/')
  }
  const checkoutHandler = () => {}

  return (
    <>
      <Box className={styles.pageHeader}>
        <Typography
          component="h1"
          variant="h9"
          sx={{ fontSize: { xs: '22px', sm: '30px' }, fontWeight: '500', letterSpacing: '0.25' }}
        >
          SHOPPING CART
        </Typography>
        <Typography
          component="h3"
          variant="h9"
          sx={{ color: '#c96', fontSize: { xs: '1.1em', sm: '1.3em' }, fontWeight: '400' }}
        >
          Shop
        </Typography>
      </Box>
      <Container>
        <Box style={{ padding: '15px 0px', borderBottom: '1px solid #ddd' }}>
          <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link href="/" passHref>
              <MuiLink underline="hover" color="inherit" href="/" style={{ color: 'black' }}>
                Home
              </MuiLink>
            </Link>

            <Typography color="text.primary">Shopping Cart</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          {cartItems.length === 0 ? (
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '50vh' }}
              spacing={3}
            >
              <ShoppingCartOutlinedIcon style={{ fontSize: '7rem', color: '#666666' }} />
              <Typography style={{ color: '#666666' }}> No products added to the cart. </Typography>
              <Typography>
                <Button
                  variant="contained"
                  style={{ padding: '10px 20px', fontSize: '13px' }}
                  onClick={backHome}
                >
                  Return to shop
                </Button>
              </Typography>
            </Stack>
          ) : (
            <Grid container spacing={1} style={{ marginBottom: '100px' }}>
              <Grid item md={8.5} xs={12}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item._id}>
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={60}
                                  height={60}
                                ></Image>
                              </Link>
                            </NextLink>
                          </TableCell>

                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Typography>{item.name}</Typography>
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell align="right">
                            <Select
                              value={item.quantity}
                              onChange={(e) => updateCartHandler(item, e.target.value)}
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              ))}
                            </Select>
                          </TableCell>
                          <TableCell align="right">${item.price}</TableCell>
                          <TableCell align="right">
                            <Button
                              variant="outlined"
                              color="secondary"
                              onClick={() => removeItemHandler(item)}
                            >
                              x
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item md={3.5} xs={12}>
                <Card
                  style={{ marginLeft: '0px', backgroundColor: '#f9f9f9', padding: '0px 20px' }}
                >
                  <List>
                    <ListItem>
                      <Typography
                        // component="h7"
                        // variant="h7"
                        style={{ fontWeight: '600', fontSize: '1.1rem', color: '#333' }}
                      >
                        Cart total
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <Grid container style={{ marginTop: '10px' }}>
                        <Grid item sm={10}>
                          <Typography>Subtotal:</Typography>
                        </Grid>
                        <Grid item sm={2}>
                          <Typography>
                            ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>Items:{cartItems.reduce((a, c) => a + c.quantity, 0)}</ListItem>

                    <ListItem>
                      <Button
                        onClick={checkoutHandler}
                        variant="outlined"
                        color="primary"
                        fullWidth
                      >
                        Check Out
                      </Button>
                    </ListItem>
                  </List>
                </Card>
                <Button
                  variant="outlined"
                  fullWidth
                  style={{ marginTop: '30px', color: '#333' }}
                  endIcon={<NextPlanOutlinedIcon />}
                  onClick={backHome}
                >
                  Coutinue Shopping
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  )
}
CartScreen.Layout = MainLayout
export default dynamic(() => Promise.resolve(CartScreen), { ssr: false })
