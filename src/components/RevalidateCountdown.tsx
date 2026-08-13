"use client";

import { useEffect, useState } from "react";

const REVALIDATE_WINDOW = 30;

// Floating fixed widget showing a repeating 30s countdown loop based
// on how long ago this section's data was last regenerated. Lets you
// see, at a glance, whether refreshing now would land BEFORE or AFTER
// the 30s revalidate window closes for the currently-cached version.
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

  const secondsWithinCurrentWindow = secondsAgo % REVALIDATE_WINDOW;
  const secondsLeftInWindow = REVALIDATE_WINDOW - secondsWithinCurrentWindow;
  const windowNumber = Math.floor(secondsAgo / REVALIDATE_WINDOW) + 1;
  const isPastFirstWindow = secondsAgo >= REVALIDATE_WINDOW;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,
        background: "#1a1a1a",
        color: isPastFirstWindow ? "#ff6b5b" : "#4ade80",
        padding: "10px 16px",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 600,
        fontFamily: "monospace",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        border: `1px solid ${isPastFirstWindow ? "#ff6b5b" : "#4ade80"}`,
        maxWidth: 260,
        lineHeight: 1.4,
      }}
    >
      <div>ISR Window #{windowNumber}</div>
      <div>{secondsLeftInWindow}s left</div>
      <div style={{ fontSize: 11, fontWeight: 400, color: "#aaa", marginTop: 4 }}>
        {isPastFirstWindow ? "Refresh now → triggers regen" : "Refresh now → still cached"}
      </div>
    </div>
  );
}