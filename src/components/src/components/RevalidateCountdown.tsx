"use client";

import { useEffect, useState } from "react";

// Shows how many seconds have passed since this section's data was
// last regenerated — lets you visually see when it crosses the 30s
// revalidate window (still needs a request to actually trigger regen).
export default function RevalidateCountdown({ lastUpdatedISO }: { lastUpdatedISO: string }) {
  const [secondsAgo, setSecondsAgo] = useState(0);

  useEffect(() => {
    const lastUpdatedMs = new Date(lastUpdatedISO).getTime();

    const tick = () => {
      setSecondsAgo(Math.floor((Date.now() - lastUpdatedMs) / 1000));
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [lastUpdatedISO]);

  const isStaleEligible = secondsAgo >= 30;

  return (
    <span style={{ color: isStaleEligible ? "#c0392b" : "#2e7d32", fontWeight: 600 }}>
      {secondsAgo}s since last regenerated {isStaleEligible ? "(eligible for time-based refresh)" : "(within 30s window)"}
    </span>
  );
}