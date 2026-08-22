import { useEffect, useState } from "react";
import { products, ingredients, sauces, fillings } from "@/lib/products";
import { useLang } from "@/lib/i18n";
import { scrollToId } from "./SmoothScroll";

export function ProductNav() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);

  const entries = [
    ...products.map((p) => ({ id: p.id, label: p[lang].nav })),
    ...ingredients.map((g) => ({ id: g.id, label: g[lang].nav })),
    { id: sauces.id, label: sauces[lang].nav },
    { id: fillings.id, label: fillings[lang].nav },
  ];

  useEffect(() => {
    const ids = entries.map((e) => e.id);
    const observer = new IntersectionObserver(
      (obs) => {
        const hit = obs.find((o) => o.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div
      className={`fixed bottom-6 end-5 z-50 transition-all duration-500 sm:end-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {open && (
        <div className="mb-3 max-h-[60vh] w-56 overflow-y-auto border border-border bg-background/90 p-2 backdrop-blur-xl">
          {entries.map((e) => (
            <button
              key={e.id}
              onClick={() => {
                scrollToId(e.id);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-3 py-2 text-start text-xs uppercase tracking-[0.18em] transition-colors ${
                active === e.id
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all ${active === e.id ? "w-5 bg-accent" : "w-2 bg-border"}`}
              />
              {e.label}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="ms-auto flex items-center gap-3 border border-border bg-background/85 px-5 py-3 text-[0.65rem] uppercase tracking-[0.24em] text-foreground backdrop-blur-xl transition-colors hover:border-accent hover:text-accent"
      >
        {t("menu.products")}
        <span className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
    </div>
  );
}
