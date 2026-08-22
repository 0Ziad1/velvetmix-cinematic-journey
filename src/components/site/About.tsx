import { useRef } from "react";
import { useLang } from "@/lib/i18n";
import type { TKey } from "@/lib/i18n";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const pillars: TKey[] = [
  "pillar.quality",
  "pillar.innovation",
  "pillar.products",
  "pillar.local",
  "pillar.international",
  "pillar.export",
];

export function About() {
  const root = useRef<HTMLElement>(null);
  const { lang, t } = useLang();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".ab-line", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 68%" },
      });

      gsap.from(".ab-experience", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ab-experience", start: "top 82%" },
      });

      gsap.from(".ab-pillar", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".ab-pillars", start: "top 82%" },
      });

      gsap.from(".ab-vision", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ab-vision", start: "top 85%" },
      });
    },
    { scope: root, dependencies: [] },
  );

  return (
    <section
      id="about"
      ref={root}
      className="grain relative overflow-hidden border-t border-border/50 bg-velvet-deep/25 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="ab-line eyebrow">{t("about.eyebrow")}</p>

        <h2 className="ab-line display-xl mt-4 max-w-4xl text-[clamp(2.25rem,7vw,6rem)] text-foreground">
          {t("about.title")}
        </h2>

        <p className="ab-line mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("about.body")}
        </p>

        {/* Experience */}
        <div className="ab-experience mt-14 flex items-center gap-6 border-y border-border py-8">
          <span className="font-display text-5xl font-extrabold tracking-tight text-accent sm:text-7xl">
            14+
          </span>

          <div className="h-12 w-px bg-border" />

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground sm:text-base">
              {t("about.experience")}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {t("about.experienceText")}
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="ab-pillars mt-14 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p}
              className="ab-pillar border-b border-border px-1 py-7 sm:px-6 lg:border-e"
            >
              <span className="font-display text-xs tracking-[0.3em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="mt-3 font-display text-xl uppercase tracking-tight text-foreground">
                {t(p)}
              </p>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="ab-vision mt-20 max-w-3xl border-s-2 border-accent ps-6 sm:ps-10">
          <p className="eyebrow">{t("about.visionLabel")}</p>

          <p className="mt-4 font-display text-xl leading-snug text-foreground sm:text-3xl">
            {t("about.vision")}
          </p>
        </div>
      </div>
    </section>
  );
}