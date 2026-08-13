import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#7A1F2B' }, // deep maroon
    secondary: { main: '#C79A3D' }, // gold
    background: { default: '#FFF9F0', paper: '#FFFFFF' },
    text: { primary: '#2B1B14', secondary: '#6B5A4E' },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: { fontFamily: '"Playfair Display", serif' },
    h2: { fontFamily: '"Playfair Display", serif' },
    h3: { fontFamily: '"Playfair Display", serif' },
  },
  shape: { borderRadius: 8 },
});

export default theme;
