// Marquee — CSS infinite loop (motion ringan, bukan scroll-scrub).
// Dua salinan identik untuk loop mulus; hover pause; reduced-motion diam.
export function Marquee({
  items,
  renderItem,
  className = "",
  label = "Marquee",
}: {
  items: readonly string[];
  renderItem: (item: string, key: string) => React.ReactNode;
  className?: string;
  label?: string;
}) {
  const row = (prefix: string, hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((it, i) => renderItem(it, `${prefix}-${i}`))}
    </div>
  );

  return (
    <div aria-label={label} className={`overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row("a", false)}
        {row("b", true)}
      </div>
    </div>
  );
}
