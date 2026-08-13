import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const linkColumns = [
  { title: 'Useful Links', links: ['Home', 'Subscriptions', 'Services', 'About us', 'Blogs'] },
  { title: 'Shop by Category', links: ['Pooja Essentials', 'Idols', 'Bespoke', 'Rentals'] },
  { title: 'Services', links: ['Polishing', 'Cleaning', 'Restoration', 'Electroplating'] },
  { title: 'More Information', links: ['Order Tracking', 'Terms & Conditions', 'Privacy Policy', 'FAQ'] },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#2B1B14', color: '#EFE7DE', pt: 6, pb: 3, px: { xs: 3, md: 8 } }}>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", serif', mb: 2 }}>
            CREA
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
            Tel: 0123456789
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            creacontact@gmail.com
          </Typography>
        </Grid>

        {linkColumns.map((col) => (
          <Grid size={{ xs: 6, md: 2 }} key={col.title}>
            <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 700 }}>
              {col.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {col.links.map((l) => (
                <Typography key={l} variant="body2" sx={{ opacity: 0.75, cursor: 'pointer' }}>
                  {l}
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 4 }}>
        <Typography variant="body2" sx={{ minWidth: 220 }}>
          Subscribe to Our Newsletter
        </Typography>
        <TextField
          size="small"
          placeholder="Your email address"
          sx={{ bgcolor: '#fff', borderRadius: 1, flex: 1, maxWidth: 320 }}
        />
        <Button variant="contained" sx={{ bgcolor: '#C79A3D' }}>
          Subscribe
        </Button>
      </Box>

      <Typography variant="caption" sx={{ opacity: 0.6 }}>
        © 2026 CREA. All rights reserved.
      </Typography>
    </Box>
  );
}
