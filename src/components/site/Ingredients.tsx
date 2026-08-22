import { useRef } from "react";
import { ingredients } from "@/lib/products";
import { useLang } from "@/lib/i18n";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export function Ingredients() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const mm = gsap.matchMedia();

      // Title animation
      gsap.from(".ing-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 65%",
          once: true,
        },
      });

      // Desktop: horizontal pinned journey
      mm.add("(min-width: 1024px)", () => {
        const el = track.current;

        if (!el) return;

        const distance = Math.max(
          0,
          el.scrollWidth - window.innerWidth + 96,
        );

        if (distance === 0) return;

        /*
         * The track starts shifted to the left.
         * As the user scrolls DOWN, the track moves RIGHT
         * until it reaches its natural position.
         */
        const scrollTween = gsap.fromTo(
          el,
          {
            x: -distance,
          },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: `+=${distance + window.innerHeight * 0.6}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          },
        );

        // Image zoom animation while cards move horizontally
        gsap.utils.toArray<HTMLElement>(".ing-card").forEach((card) => {
          const image = card.querySelector("img");

          if (!image) return;

          gsap.fromTo(
            image,
            {
              scale: 1.2,
            },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });

      // Mobile: normal vertical animation
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".ing-card", {
          y: 70,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: track.current,
            start: "top 78%",
            once: true,
          },
        });
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: root,
      dependencies: [],
    },
  );

  return (
    <section
      id="premium-ingredients"
      ref={root}
      className="grain relative overflow-hidden border-t border-border/50 bg-velvet-deep/30 py-24 lg:h-[100svh] lg:py-0"
    >
      <div className="mx-auto max-w-[1400px] px-5 pt-0 sm:px-8 lg:pt-28">
        <p className="ing-title eyebrow">
          {t("ingredients.eyebrow")}
        </p>

        <h2 className="ing-title display-xl mt-4 text-[clamp(2.25rem,7vw,6rem)] text-foreground">
          {t("ingredients.title")}
        </h2>
      </div>

      <div
        ref={track}
        className="
    mt-12
    flex
    flex-col
    items-center
    gap-8
    px-5
    sm:px-8
    lg:mt-16
    lg:w-max
    lg:flex-row
    lg:items-stretch
    lg:gap-10
    lg:ps-[max(2rem,calc((100vw-1400px)/2+2rem))]
  "
      >
        {ingredients.map((group) => {
          const copy = group[lang];

          return (
            <article
              key={group.id}
              id={group.id}
              className="
  ing-card
  group
  relative
  w-full
  max-w-[540px]
  shrink-0
  overflow-hidden
  border
  border-border
  lg:w-[38vw]
"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={group.image}
                  alt={copy.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover will-change-transform"
                />
              </div>

              <div className="bg-card/70 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="font-display text-2xl uppercase tracking-tight text-foreground sm:text-3xl">
                  {copy.name}
                </h3>

                <ul className="mt-4 space-y-2">
                  {copy.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="h-px w-5 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}