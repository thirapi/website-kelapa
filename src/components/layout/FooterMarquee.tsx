import Image from "next/image";

const PHRASE = "From Katapiang to the World";
const REPEATS = 4;

export function FooterMarquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-b border-cream/10 bg-linear-to-r from-brand-deep via-ember to-palm py-5 md:py-7"
    >
      <div className="marquee-track flex w-max items-center hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {Array.from({ length: REPEATS }).map((_, i) => (
              <span key={i} className="flex shrink-0 items-center">
                <span className="whitespace-nowrap px-6 text-3xl font-extrabold uppercase leading-none tracking-tight text-cream md:px-8 md:text-5xl">
                  {PHRASE}
                </span>
                <Image
                  src="/assets/brand/coco-mark.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 shrink-0 md:h-10 md:w-10"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
