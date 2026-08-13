'use client';

import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

// -----------------------------------------------------------------------
// This is a CLIENT component ('use client' at the top).
// It runs in the browser, not on the server — useState/useEffect only
// work in client components.
//
// Purpose for the ISR demo:
// This clock keeps ticking every second regardless of whether the page
// HTML was served from ISR cache or freshly rendered. It proves that
// ISR caching the HTML does NOT break client-side interactivity —
// hydration still happens normally on every page load.
// -----------------------------------------------------------------------
export default function LiveClock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    setNow(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ textAlign: 'center', py: 1 }}>
      <Typography variant="h3" sx={{ color: '#7A1F2B', fontWeight: 600 }}>
        Client clock (live, ticks every second): {now ?? '...'}
      </Typography>
    </Box>
  );
}