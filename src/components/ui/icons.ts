import {
  BadgeCheck,
  BadgePercent,
  CalendarClock,
  Eye,
  FileCheck,
  Flame,
  Handshake,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  MessagesSquare,
  Package,
  Recycle,
  Repeat,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

// Satu-satunya library ikon project (anti-slop gate 30).
export const ICONS = {
  flame: Flame,
  package: Package,
  scale: Scale,
  percent: BadgePercent,
  chat: MessagesSquare,
  calendar: CalendarClock,
  origin: MapPinned,
  fileCheck: FileCheck,
  repeat: Repeat,
  shield: ShieldCheck,
  recycle: Recycle,
  badge: BadgeCheck,
  handshake: Handshake,
  eye: Eye,
  wa: MessageCircle,
  mail: Mail,
  pin: MapPin,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
