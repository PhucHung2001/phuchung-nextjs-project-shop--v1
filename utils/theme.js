import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  overrides: {
    PrivateNotchedOutline: {
      legend: {
        width: '265px !important',
      },
    },
  },

  palette: {
    primary: {
      main: '#cc9966',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#79b0bc',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '620px',

          '@media (min-width: 620px)': {
            maxWidth: '620px',
          },
        },
        maxWidthMd: {
          maxWidth: '1260px',

          '@media (min-width: 1200px)': {
            maxWidth: '1260px',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',

          '&:hover': {
            color: '#77777',
          },
          '&.active': {
            borderBottom: '1px solid #cc9966',
            paddingBottom: '5px',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        },
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            color: 'white',
            backgroundColor: '#142850',
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
      ],
    },
  },
})

export default theme
