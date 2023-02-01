import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiGrid: {
      styleOverrides: {
        root: {
          background: '#1E2126',
          height: '100%',
          width: '100%'
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          maxHeight: '57px',
          alignItems: 'center'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#ffffffd6',
          gap: '5px',
          textTransform: 'none',
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
          border: '1px solid rgb(36 37 48)',
          maxHeight: '57px',
          alignItems: 'center',
          transition: 'all 0.3s',
          ':hover': {
            background: 'rgb(36 37 48)',
            transition: 'all 0.3s'
          }
        }
      }
    }
  },
});