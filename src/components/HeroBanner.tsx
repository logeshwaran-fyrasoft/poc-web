import { Box, Typography, Button } from '@mui/material';

type Hero = {
  image: string;
  subtitle: string;
  title: string;
};

export default function HeroBanner({ hero }: { hero: Hero }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 320, md: 460 },
        backgroundImage: `url(${hero.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 3, md: 8 },
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.25)' }} />
      <Box sx={{ position: 'relative', color: '#fff', maxWidth: 480 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {hero.subtitle}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
          {hero.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" sx={{ bgcolor: '#fff', color: '#2B1B14', '&:hover': { bgcolor: '#eee' } }}>
            Shop Now
          </Button>
          <Button variant="outlined" sx={{ borderColor: '#fff', color: '#fff' }}>
            Subscriptions
          </Button>
        </Box>
      </Box>
    </Box>
  );
}