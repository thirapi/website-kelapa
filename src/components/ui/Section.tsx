type Spacing = "default" | "compact" | "none";
type Width = "default" | "narrow" | "wide";

const SPACING: Record<Spacing, string> = {
  // Design System §4.3: antar-section 120–160px desktop
  default: "py-24 md:py-32",
  compact: "py-16 md:py-24",
  none: "",
};

const WIDTH: Record<Width, string> = {
  default: "max-w-7xl",
  // teks panjang / FAQ — readability
  narrow: "max-w-4xl",
  wide: "max-w-[1440px]",
};

type Props = {
  children: React.ReactNode;
  spacing?: Spacing;
  width?: Width;
  className?: string;
  id?: string;
  ariaLabel?: string;
};

// Standar semua section: container max-7xl (1440 wide), padding 24 mobile → 40 desktop.
export function Section({
  children,
  spacing = "default",
  width = "default",
  className = "",
  id,
  ariaLabel,
}: Props) {
  return (
    <section id={id} aria-label={ariaLabel} className={`${SPACING[spacing]} ${className}`}>
      <div className={`mx-auto w-full ${WIDTH[width]} px-6 md:px-10`}>{children}</div>
    </section>
  );
}

export function Container({
  children,
  width = "default",
  className = "",
}: {
  children: React.ReactNode;
  width?: Width;
  className?: string;
}) {
  return <div className={`mx-auto w-full ${WIDTH[width]} px-6 md:px-10 ${className}`}>{children}</div>;
}
