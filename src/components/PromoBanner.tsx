import { Box, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

type PromoBannerData = {
  title: string;
  subtitle: string;
};

export default function PromoBanner({ promoBanner }: { promoBanner: PromoBannerData }) {
  return (
    <Box
      sx={{
        mx: { xs: 3, md: 8 },
        my: 4,
        p: { xs: 3, md: 5 },
        borderRadius: 3,
        bgcolor: '#FBEFE0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          {promoBanner.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6B5A4E' }}>
          {promoBanner.subtitle}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: '#7A1F2B',
          color: '#fff',
          borderRadius: '50%',
          width: 70,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LocalShippingOutlinedIcon />
      </Box>
    </Box>
  );
}