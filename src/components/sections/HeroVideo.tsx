"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/content/assets";

// Shared hero media (mobile + desktop): poster image (LCP) with looping video layered on top.
// Video plays only when motion is safe, data-saver is off, and hero is visible.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    if (conn?.saveData) return false;
    return true;
  });

  useEffect(() => {
    if (!enabled) return;
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [enabled]);

  return (
    <>
      <Image
        src={ASSETS["hero-video-poster"]}
        alt="Aerial beach and coconut palms at sunset"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="h-full w-full object-cover opacity-50"
      />
      {enabled && (
        <video
          ref={ref}
          className="h-full w-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={ASSETS["hero-video-poster"]}
          aria-hidden
        >
          <source src="/assets/hero/hero-grove-aerial.webm" type="video/webm" />
          <source src="/assets/hero/hero-grove-aerial.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
