import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { scrollToId } from "./SmoothScroll";
import logo from "@/assets/logo.png";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { key: Parameters<typeof t>[0]; id: string }[] = [
    { key: "nav.home", id: "home" },
    { key: "nav.about", id: "about" },
    { key: "nav.products", id: "products" },
    { key: "nav.contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:h-20 sm:px-8">
        
        {/* Logo */}
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="VelvetMix"
            className="h-13 w-auto object-contain sm:h-12"
          />
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-accent"
            >
              {t(l.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em]">
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-1 transition-colors ${
              lang === "en"
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>

          <span className="text-border">|</span>

          <button
            onClick={() => setLang("ar")}
            className={`px-2 py-1 text-sm normal-case tracking-normal transition-colors ${
              lang === "ar"
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            العربية
          </button>
        </div>
      </div>
    </header>
  );
}