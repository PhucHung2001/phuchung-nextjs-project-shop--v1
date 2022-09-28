import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'John',
      email: 'phuchung123@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Printed Sweatshirt',
      slug: 'printed-sweatshirt',
      category: 'Shirts',
      image: '/assets/images/product_1_1_300x408_1f662c0197.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,t',
    },
    {
      name: 'Fine -knit Sweater',
      slug: 'fine-knit-sweater',
      category: 'Shirts',
      image: '/assets/images/product_1_2_300x408_53bf0b96dd.jpg',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description:
        'Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,t',
    },
    {
      name: 'Biker Jacket',
      slug: 'biker-jacket',
      category: 'Shirts',
      image: '/assets/images/product_4_1_300x408_5d955e425b.jpg',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Small Bucket Bag',
      slug: 'small-bucket-bag',
      category: 'Pants',
      image: '/assets/images/product_6_1_300x408_0ecfb374f2.jpg',
      price: 90,
      brand: 'Oliver',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Denim Jacket',
      slug: 'denim-jacket',
      category: 'Pants',
      image: '/assets/images/product_7_2_300x408_22bf0655ad.jpg',
      price: 95,
      brand: 'Zara',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Linen-blend Trousers',
      slug: 'linen-blend-trousers',
      category: 'Pants',
      image: '/assets/images/product_8_1_300x408_d451a2ae2b.jpg',
      price: 75,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Sandals',
      slug: 'Sandals',
      category: 'Pants',

      image: '/assets/images/product_12_1_300x408_f2de20153a.jpg',
      price: 75,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Short wrap dress',
      slug: 'short-wrap-dress',
      category: 'Pants',
      image: '/assets/images/product11.jpg',
      price: 75,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
  ],
}
export default data
