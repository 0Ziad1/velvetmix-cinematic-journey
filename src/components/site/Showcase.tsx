import { useRef } from "react";
import { useLang } from "@/lib/i18n";
import type { TKey } from "@/lib/i18n";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

interface ShowcaseData {
  id: string;
  image: string;
  en: { nav: string; name: string; items: string[] };
  ar: { nav: string; name: string; items: string[] };
}

/** Shared cinematic section for Topping Sauces + Cake Fillings. */
export function Showcase({
  data,
  eyebrowKey,
  variant,
}: {
  data: ShowcaseData;
  eyebrowKey: TKey;
  variant: "liquid" | "final";
}) {
  const root = useRef<HTMLElement>(null);
  const { lang, t } = useLang();
  const copy = data[lang];

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const dir = lang === "ar" ? -1 : 1;

      gsap.fromTo(
        ".sc-visual",
        variant === "liquid"
          ? { scale: 1.3, yPercent: 12 }
          : { scale: 0.82, rotate: 6 * dir},
        {
          scale: 1,
          rotate: 0,
          yPercent: 0,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "center center",
            scrub: 0.6,
          },
        },
      );

      gsap.to(".sc-visual", {
        yPercent: -10,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "center center",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.from(".sc-reveal", {
        y: 44,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
    },
    { scope: root, dependencies: [ data.id] },
  );

  return (
    <section
      id={data.id}
      ref={root}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden border-t border-border/50 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[50vmin] bg-velvet/25 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="sc-visual relative aspect-[5/4] w-full overflow-hidden will-change-transform">
          <img
            src={data.image}
            alt={copy.name}
            loading="lazy"
            width={1280}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
        </div>

        <div>
          <p className="sc-reveal eyebrow">{t(eyebrowKey)}</p>
          <h2 className="sc-reveal display-xl mt-4 text-[clamp(2.25rem,6.5vw,5rem)] text-foreground">
            {copy.name}
          </h2>
          <ul className="mt-8 space-y-4">
            {copy.items.map((i) => (
              <li
                key={i}
                className="sc-reveal flex items-center gap-4 border-b border-border pb-4 font-display text-xl uppercase tracking-tight text-foreground/90 sm:text-2xl"
              >
                <span className="h-px w-8 bg-accent" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
