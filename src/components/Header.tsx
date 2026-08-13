'use client';

import { Toolbar, Box, Typography, InputBase, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';

const navLinks = ['Subscriptions', 'Categories', 'Services', 'Bespoke', 'About us', 'Festival Calendar'];

export default function Header() {
  return (
    <Box component="header" sx={{ bgcolor: '#fff', borderBottom: '1px solid #eee' }}>
      <Box sx={{ bgcolor: '#7A1F2B', color: '#fff', textAlign: 'center', fontSize: 12, py: 0.5 }}>
        Free Delivery on Order over ₹999
      </Box>

      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, py: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#7A1F2B', fontFamily: '"Playfair Display", serif' }}>
          CREA
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: 2,
            px: 1,
            flex: 1,
            maxWidth: 420,
          }}
        >
          <SearchIcon fontSize="small" sx={{ color: '#999' }} />
          <InputBase placeholder="Search Statue, Puja Items" sx={{ ml: 1, flex: 1, fontSize: 14 }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button size="small" variant="outlined" sx={{ borderColor: '#ddd', color: '#333' }}>
            Pincode
          </Button>
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 3,
          justifyContent: 'center',
          py: 1,
          borderTop: '1px solid #f0f0f0',
          flexWrap: 'wrap',
        }}
      >
        {navLinks.map((link) => (
          <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: '#333' }}>
            {link}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
