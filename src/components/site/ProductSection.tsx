import { useRef } from "react";
import type { Product } from "@/lib/products";
import { useLang } from "@/lib/i18n";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const motionFrom: Record<string, gsap.TweenVars> = {
  "center-scale": { scale: 1.35, rotate: 0, xPercent: 0, yPercent: 0, filter: "blur(6px)" },
  "multi-direction": { scale: 0.7, rotate: 14, xPercent: 26, yPercent: 18, filter: "blur(5px)" },
  layered: { scale: 0.85, rotate: -3, yPercent: 26, filter: "blur(4px)" },
  horizontal: { scale: 0.9, rotate: 2, xPercent: -34, filter: "blur(5px)" },
  dramatic: { scale: 1.5, rotate: -8, filter: "blur(9px)" },
  stack: { scale: 0.8, yPercent: 34, rotate: 0, filter: "blur(5px)" },
  warm: { scale: 1.2, rotate: 5, xPercent: 12, filter: "blur(6px)" },
};

const motionTo: Record<string, gsap.TweenVars> = {
  "center-scale": { scale: 1, rotate: -4, filter: "blur(0px)" },
  "multi-direction": { scale: 1, rotate: -3, xPercent: 0, yPercent: 0, filter: "blur(0px)" },
  layered: { scale: 1, rotate: 1, yPercent: 0, filter: "blur(0px)" },
  horizontal: { scale: 1, rotate: -1, xPercent: 0, filter: "blur(0px)" },
  dramatic: { scale: 1, rotate: 2, filter: "blur(0px)" },
  stack: { scale: 1, yPercent: 0, rotate: -2, filter: "blur(0px)" },
  warm: { scale: 1, rotate: -2, xPercent: 0, filter: "blur(0px)" },
};

export function ProductSection({ product, index }: { product: Product; index: number }) {
  const root = useRef<HTMLElement>(null);
  const { lang, t } = useLang();
  const copy = product[lang];

  useGSAP(
  () => {
    if (prefersReducedMotion()) return;

    const rtl = lang === "ar";
    const dirSign = rtl ? -1 : 1;

    const from = { ...motionFrom[product.motion] };

    if (typeof from.xPercent === "number") {
      from.xPercent *= dirSign;
    }

    // Product enters and settles into its position
    gsap.fromTo(
      ".p-visual",
      from,
      {
        ...motionTo[product.motion],
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "center center",
          scrub: 0.6,
        },
      },
    );

    // Text reveal
    gsap.from(".p-reveal", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: {
        trigger: root.current,
        start: "top 62%",
      },
    });

    // Section number
    gsap.from(".p-index", {
      xPercent: 30 * dirSign,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    });

    // Glow
    gsap.fromTo(
      ".p-glow",
      { opacity: 0.15, scale: 0.8 },
      {
        opacity: 0.5,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  },
  { scope: root, dependencies: [ product.id] },
);

  return (
    <section
      id={product.id}
      ref={root}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden border-t border-border/50 py-24 sm:py-28"
    >
      <div className="p-glow pointer-events-none absolute start-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-velvet/45 blur-[110px]" />

      <span className="p-index pointer-events-none absolute end-2 top-16 select-none font-display text-[22vw] font-extrabold leading-none text-foreground/[0.04] sm:end-6">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <div className="p-visual relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden will-change-transform">
            <img
              src={product.image}
              alt={copy.name}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
          </div>
        </div>

        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
          <p className="p-reveal eyebrow">{t("journey.eyebrow")}</p>
          <h2 className="p-reveal display-xl mt-4 text-[clamp(2.25rem,6.5vw,5rem)] text-foreground">
            {copy.name}
          </h2>
          <p className="p-reveal mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {copy.description}
          </p>

          {copy.variants && (
            <div className="p-reveal mt-8">
              <p className="eyebrow">{copy.variantLabel}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {copy.variants.map((v) => (
                  <span
                    key={v}
                    className="border border-border px-4 py-2 text-xs tracking-wide text-foreground"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="p-reveal mt-8">
            <p className="eyebrow">{t("label.characteristics")}</p>
            <ul className="mt-3 space-y-2">
              {copy.characteristics.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-reveal mt-8">
            <p className="eyebrow">{t("label.packaging")}</p>
            <div className="mt-3 flex flex-wrap gap-6">
              {copy.packaging.map((p) => (
                <span key={p} className="font-display text-xl text-accent">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
