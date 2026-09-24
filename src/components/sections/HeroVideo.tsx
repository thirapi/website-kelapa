"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/content/assets";

// Hero media: poster image (LCP) with looping video layered on top.
// Mobile gets the close-up coconut-crown video (young fruit bunch clearly visible,
// framed natively for portrait screens); desktop keeps the sunset aerial.
// Video plays only when motion is safe, data-saver is off, and hero is visible.
function LoopingVideo({
  enabled,
  poster,
  sources,
  className,
}: {
  enabled: boolean;
  poster: string;
  sources: { src: string; type: string }[];
  className: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

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

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}

export function HeroVideo() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    if (conn?.saveData) return false;
    return true;
  });

  return (
    <>
      {/* Mobile: close-up of coconut crown with young fruit bunch. */}
      <Image
        src={ASSETS["hero-video-poster-mobile"]}
        alt="Close-up of young coconuts in a palm crown"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="h-full w-full object-cover object-center opacity-70 brightness-110 contrast-125 saturate-150 md:hidden"
      />
      <LoopingVideo
        enabled={enabled}
        poster={ASSETS["hero-video-poster-mobile"]}
        sources={[
          { src: "/assets/hero/hero-coconut-crown.webm", type: "video/webm" },
          { src: "/assets/hero/hero-coconut-crown.mp4", type: "video/mp4" },
        ]}
        className="h-full w-full object-cover object-center opacity-70 brightness-110 contrast-125 saturate-150 md:hidden"
      />
      {/* Desktop: sunset aerial. */}
      <Image
        src={ASSETS["hero-video-poster"]}
        alt="Aerial beach and coconut palms at sunset"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="hidden h-full w-full object-cover opacity-50 md:block"
      />
      <LoopingVideo
        enabled={enabled}
        poster={ASSETS["hero-video-poster"]}
        sources={[
          { src: "/assets/hero/hero-grove-aerial.webm", type: "video/webm" },
          { src: "/assets/hero/hero-grove-aerial.mp4", type: "video/mp4" },
        ]}
        className="hidden h-full w-full object-cover opacity-50 md:block"
      />
    </>
  );
}
