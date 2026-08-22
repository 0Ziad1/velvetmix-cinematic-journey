import { useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export const CONTACT = {
  phones: ["+966 54 100 4444", "+966 54 425 2422"],
  email: "info@salmantradingsa.com",
};

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const { lang, t } = useLang();
  const [sent, setSent] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".ct-reveal", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root, dependencies: [] },
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`VelvetMix — ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\n${String(data.get("email") ?? "")}`,
    );
    setSent(true);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

  return (
    <section
      id="contact"
      ref={root}
      className="grain relative overflow-hidden border-t border-border/50 py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute start-1/4 top-0 h-[60vmin] w-[60vmin] -translate-y-1/3 rounded-full bg-velvet/30 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="ct-reveal eyebrow">{t("contact.eyebrow")}</p>
        <h2 className="ct-reveal display-xl mt-4 max-w-4xl text-[clamp(2.25rem,7vw,6rem)] text-foreground">
          {t("contact.title")}
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="ct-reveal">
            <p className="eyebrow">{t("contact.phone")}</p>
            <div className="mt-4 flex flex-col gap-3">
              {CONTACT.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  dir="ltr"
                  className="font-display text-2xl tracking-tight text-foreground transition-colors hover:text-accent sm:text-4xl"
                >
                  {p}
                </a>
              ))}
            </div>

            <p className="eyebrow mt-12">{t("contact.email")}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              dir="ltr"
              className="mt-4 block break-all font-display text-xl tracking-tight text-foreground transition-colors hover:text-accent sm:text-3xl"
            >
              {CONTACT.email}
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-8 inline-block bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t("contact.emailBtn")}
            </a>
          </div>

          <form className="ct-reveal space-y-4" onSubmit={onSubmit}>
            <input name="name" required placeholder={t("contact.form.name")} className={field} />
            <input
              name="email"
              type="email"
              required
              placeholder={t("contact.form.email")}
              className={field}
            />
            <textarea
              name="message"
              required
              rows={6}
              placeholder={t("contact.form.message")}
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              className="w-full border border-accent px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t("contact.form.submit")}
            </button>
            {sent && <p className="text-xs text-muted-foreground">{t("contact.form.sent")}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
