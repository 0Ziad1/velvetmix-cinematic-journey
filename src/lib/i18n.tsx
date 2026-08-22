import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

const dict = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.contact": "Contact",
    "hero.subtitle": "High-quality baking & confectionery mixes",
    "hero.support":
      "High-quality powdered raw materials specialized in cake, bakery, and confectionery mixes.",
    "hero.cta1": "Explore Our Products",
    "hero.cta2": "About VelvetMix",
    "hero.scroll": "Scroll to explore",
    "journey.eyebrow": "The Collection",
    "label.characteristics": "Characteristics",
    "label.packaging": "Packaging",
    "ingredients.title": "Premium Ingredients",
    "ingredients.eyebrow": "Ingredient Journey",
    "sauces.eyebrow": "Finishing Touch",
    "fillings.eyebrow": "The Final Layer",
    "about.title": "About VelvetMix",
    "about.eyebrow": "The Company",
    "about.body":
      "VelvetMix is a Saudi factory specialized in the manufacturing of baking mixes, dessert mixes, and powdered food products, with its headquarters located in the Kingdom of Saudi Arabia.",
    "about.pillars": "Quality · Innovation · High-quality products · Local markets · International markets · Export capabilities",
    "about.visionLabel": "Our Vision",
    "about.vision":
      "To become a leader in the food and baking mix industry across Saudi Arabia, the Middle East, and Africa through continuous commitment to quality, development, innovation, and delivering distinctive products.",
    "pillar.quality": "Quality",
    "pillar.innovation": "Innovation",
    "pillar.products": "High-quality products",
    "pillar.local": "Local markets",
    "pillar.international": "International markets",
    "pillar.export": "Export capabilities",
    "contact.title": "Let's create something delicious",
    "contact.eyebrow": "Contact",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.emailBtn": "Send an email",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.sent": "Thank you — your message is ready to send.",
    "menu.products": "Products",
    "footer.rights": "All rights reserved.",
    "footer.tag": "Saudi manufacturer of baking mixes, dessert mixes and powdered food products.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.products": "المنتجات",
    "nav.contact": "تواصل معنا",
    "hero.subtitle": "خلطات مخابز وحلويات عالية الجودة",
    "hero.support":
      "مواد خام بودرة عالية الجودة متخصصة في خلطات الكيك والمخابز والحلويات.",
    "hero.cta1": "استكشف منتجاتنا",
    "hero.cta2": "عن فلفت ميكس",
    "hero.scroll": "مرّر للاستكشاف",
    "journey.eyebrow": "المجموعة",
    "label.characteristics": "الخصائص",
    "label.packaging": "التعبئة",
    "ingredients.title": "مكونات فاخرة",
    "ingredients.eyebrow": "رحلة المكونات",
    "sauces.eyebrow": "اللمسة الأخيرة",
    "fillings.eyebrow": "الطبقة الأخيرة",
    "about.title": "عن فلفت ميكس",
    "about.eyebrow": "الشركة",
    "about.body":
      "فلفت ميكس مصنع سعودي متخصص في تصنيع خلطات المخابز وخلطات الحلويات والمنتجات الغذائية البودرة، ويقع مقره في المملكة العربية السعودية.",
    "about.pillars": "الجودة · الابتكار · منتجات عالية الجودة · الأسواق المحلية · الأسواق الدولية · قدرات التصدير",
    "about.visionLabel": "رؤيتنا",
    "about.vision":
      "أن نصبح روّاداً في صناعة الأغذية وخلطات المخابز في المملكة العربية السعودية والشرق الأوسط وأفريقيا من خلال الالتزام المستمر بالجودة والتطوير والابتكار وتقديم منتجات مميزة.",
    "pillar.quality": "الجودة",
    "pillar.innovation": "الابتكار",
    "pillar.products": "منتجات عالية الجودة",
    "pillar.local": "الأسواق المحلية",
    "pillar.international": "الأسواق الدولية",
    "pillar.export": "قدرات التصدير",
    "contact.title": "لنصنع شيئاً لذيذاً",
    "contact.eyebrow": "تواصل",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.emailBtn": "أرسل بريداً إلكترونياً",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.sent": "شكراً لك — رسالتك جاهزة للإرسال.",
    "menu.products": "المنتجات",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.tag": "مصنع سعودي لخلطات المخابز والحلويات والمنتجات الغذائية البودرة.",
  },
} as const;

export type TKey = keyof (typeof dict)["en"];

interface Ctx {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (k: TKey) => string;
}

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const el = document.documentElement;

    // Keep the website layout LTR for both languages.
    // Only the language of the document changes.
    el.lang = lang;
    el.dir = "ltr";
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir: "ltr",
      setLang,
      t: (k) => dict[lang][k],
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
