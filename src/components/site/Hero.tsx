import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { useLang } from "@/lib/i18n";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { scrollToId } from "./SmoothScroll";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { t, lang } = useLang();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-bg", { scale: 1.18, opacity: 0, duration: 2 })
        .from(
          ".hero-letter",
          { yPercent: 115, opacity: 0, duration: 1.4, stagger: 0.05 },
          "-=1.5",
        )
        .from(".hero-line", { scaleX: 0, duration: 1.2 }, "-=1")
        .from(
          ".hero-fade",
          { y: 26, opacity: 0, duration: 1, stagger: 0.12 },
          "-=0.9",
        );

      gsap.to(".hero-scroll-arrow", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.1,
        ease: "sine.inOut",
      });

      gsap.to(".hero-bg", {
        yPercent: 14,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-inner", {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root, dependencies: [lang] },
  );

  const letters = "VELVETMIX".split("");

  return (
    <section
      id="home"
      ref={root}
      className="grain relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1080}
        className="hero-bg absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--cocoa)_78%)]" />

      <div className="hero-inner relative z-10 w-full max-w-[1400px] px-5 text-center sm:px-8">
        <h1 className="display-xl flex justify-center overflow-hidden text-[clamp(2.75rem,12vw,11rem)] text-foreground">
          {letters.map((c, i) => (
            <span key={i} className="hero-letter inline-block">
              {c}
            </span>
          ))}
        </h1>

        <div className="hero-line mx-auto mt-6 h-px w-40 origin-center bg-accent/70 sm:w-64" />

        <p className="hero-fade mx-auto mt-7 max-w-2xl text-sm uppercase tracking-[0.28em] text-accent sm:text-base">
          {t("hero.subtitle")}
        </p>
        <p className="hero-fade mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t("hero.support")}
        </p>

        <div className="hero-fade mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => scrollToId("products")}
            className="w-full max-w-xs bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
          >
            {t("hero.cta1")}
          </button>
          <button
            onClick={() => scrollToId("about")}
            className="w-full max-w-xs border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            {t("hero.cta2")}
          </button>
        </div>
      </div>

      <div className="hero-fade absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="eyebrow whitespace-nowrap">{t("hero.scroll")}</span>
        <span className="hero-scroll-arrow text-accent">↓</span>
      </div>
    </section>
  );
}
