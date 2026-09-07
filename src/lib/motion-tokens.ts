export const EASE_SIGNATURE = "cubic-bezier(0.16, 1, 0.3, 1)";

export const DURATION = {
  micro: 0.2,
  reveal: 0.6,
  section: 1.0,
} as const;

export const STAGGER = {
  default: 0.08,
} as const;

export const MOTION_TOKENS = {
  ease: EASE_SIGNATURE,
  duration: DURATION,
  stagger: STAGGER,
} as const;
