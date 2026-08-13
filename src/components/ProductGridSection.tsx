import { Box, Typography, Card, CardMedia, CardContent, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  mrp: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  deliveryDate: string;
};

export default function ProductGridSection({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  return (
    <Box sx={{ px: { xs: 3, md: 8 }, py: 5 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
        {title}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {products.map((p) => (
          <Card key={p.id} elevation={0} sx={{ border: '1px solid #eee' }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" image={p.image} alt={p.title} sx={{ height: 180, objectFit: 'cover' }} />
              {p.discountPercent && (
                <Chip
                  label={`${p.discountPercent}% OFF`}
                  size="small"
                  sx={{ position: 'absolute', top: 8, left: 8, bgcolor: '#7A1F2B', color: '#fff' }}
                />
              )}
            </Box>
            <CardContent>
              <Typography variant="caption" sx={{ color: '#888' }}>
                Expected Delivery {p.deliveryDate}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, my: 0.5 }}>
                {p.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} sx={{ fontSize: 14, color: i < p.rating ? '#C79A3D' : '#ddd' }} />
                ))}
                <Typography variant="caption" sx={{ color: '#888' }}>
                  ({p.reviewCount})
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  ₹{p.price}
                </Typography>
                <Typography variant="caption" sx={{ textDecoration: 'line-through', color: '#999' }}>
                  ₹{p.mrp}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
