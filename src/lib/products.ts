import muffinImg from "@/assets/muffin.jpg";
import cookiesImg from "@/assets/cookies.jpg";
import spongeImg from "@/assets/sponge-cake.jpg";
import englishImg from "@/assets/english-cake.jpg";
import redVelvetImg from "@/assets/red-velvet.jpg";
import pancakeImg from "@/assets/pancake.jpg";
import datesImg from "@/assets/dates-cake.jpg";
import icingImg from "@/assets/icing-sugar.jpg";
import chocolateImg from "@/assets/chocolate.jpg";
import chipsImg from "@/assets/chocolate-chips.jpg";
import saucesImg from "@/assets/topping-sauces.jpg";
import fillingsImg from "@/assets/cake-fillings.jpg";
import toastImg from "@/assets/toastLoaf.jpg"
import briocheImg from "@/assets/brioche.jpg"
import kaiserImg from "@/assets/kaiser.jpg"
import croissantImg from "@/assets/croissant.jpg"
import frenchBreadtImg from "@/assets/frenchBread.jpg"
/**
 * Centralized product data.
 * Replace the `image` value of any product with real VelvetMix product
 * photography (drop the file in src/assets and update the import above).
 */

export type Motion =
  | "center-scale"
  | "multi-direction"
  | "layered"
  | "horizontal"
  | "dramatic"
  | "stack"
  | "warm"
  | "flow"
  | "grid-expand"
  | "liquid"
  | "final";

export interface Product {
  id: string;
  image: string;
  motion: Motion;
  /** index label shown in the section eyebrow */
  en: {
    nav: string;
    name: string;
    description: string;
    variants?: string[];
    variantLabel?: string;
    characteristics: string[];
    packaging: string[];
  };
  ar: {
    nav: string;
    name: string;
    description: string;
    variants?: string[];
    variantLabel?: string;
    characteristics: string[];
    packaging: string[];
  };
}

const PACK_EN = ["10 kg bag", "25 kg bag"];
const PACK_AR = ["كيس ١٠ كجم", "كيس ٢٥ كجم"];

export const products: Product[] = [
  {
    id: "muffin",
    image: muffinImg,
    motion: "center-scale",
    en: {
      nav: "Muffin",
      name: "Muffin Mix",
      description: "Mix for the preparation of muffin products.",
      variantLabel: "Flavours",
      variants: ["Muffin Powder Vanilla", "Muffin Powder Chocolate"],
      characteristics: [
        "Rich flavor",
        "Moist and cohesive texture",
        "Ready to use",
        "No need for enhancers or additives",
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "مافن",
      name: "خلطة المافن",
      description: "خلطة لتحضير منتجات المافن.",
      variantLabel: "النكهات",
      variants: ["بودرة مافن فانيليا", "بودرة مافن شوكولاتة"],
      characteristics: [
        "نكهة غنية",
        "قوام رطب ومتماسك",
        "جاهزة للاستخدام",
        "لا تحتاج إلى محسنات أو إضافات",
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "cookies",
    image: cookiesImg,
    motion: "multi-direction",
    en: {
      nav: "Cookies",
      name: "Cookies Premix",
      description: "Mix for the preparation of COOKIES.",
      characteristics: [
        "Rich flavor",
        "Ready to use",
        "No need for enhancers or additives",
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "كوكيز",
      name: "خلطة الكوكيز",
      description: "خلطة لتحضير الكوكيز.",
      characteristics: [
        "نكهة غنية",
        "جاهزة للاستخدام",
        "لا تحتاج إلى محسنات أو إضافات",
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "sponge-cake",
    image: spongeImg,
    motion: "layered",
    en: {
      nav: "Sponge Cake",
      name: "Sponge Cake",
      description: "Mix for the preparation of Sponge Cake products and swissroll.",
      variantLabel: "Available flavors",
      variants: ["Vanilla", "Chocolate"],
      characteristics: [
        "Ready to use",
        "Stable texture",
        "Moist and airy",
        "Consistent quality and flavor",
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "كيك اسفنجي",
      name: "الكيك الإسفنجي",
      description: "خلطة لتحضير منتجات الكيك الإسفنجي والسويسرول.",
      variantLabel: "النكهات المتوفرة",
      variants: ["فانيليا", "شوكولاتة"],
      characteristics: [
        "جاهزة للاستخدام",
        "قوام ثابت",
        "رطب وهش",
        "جودة ونكهة ثابتة",
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "english-cake",
    image: englishImg,
    motion: "horizontal",
    en: {
      nav: "English Cake",
      name: "English Cake",
      description: "Mix for the preparation of English Cake.",
      variantLabel: "Available flavor",
      variants: ["Vanilla"],
      characteristics: ["Ready to use", "Stable texture", "Consistent quality and flavor"],
      packaging: PACK_EN,
    },
    ar: {
      nav: "كيك إنجليزي",
      name: "الكيك الإنجليزي",
      description: "خلطة لتحضير الكيك الإنجليزي.",
      variantLabel: "النكهة المتوفرة",
      variants: ["فانيليا"],
      characteristics: ["جاهزة للاستخدام", "قوام ثابت", "جودة ونكهة ثابتة"],
      packaging: PACK_AR,
    },
  },
  {
    id: "red-velvet",
    image: redVelvetImg,
    motion: "dramatic",
    en: {
      nav: "Red Velvet",
      name: "Red Velvet Cake",
      description: "Mix for the preparation of Red Velvet Cake.",
      characteristics: [
        "Ready to use",
        "Stable texture",
        "Moist and airy",
        "Consistent quality and flavor",
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "ريد فلفت",
      name: "كيك الريد فلفت",
      description: "خلطة لتحضير كيك الريد فلفت.",
      characteristics: [
        "جاهزة للاستخدام",
        "قوام ثابت",
        "رطب وهش",
        "جودة ونكهة ثابتة",
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "pancake",
    image: pancakeImg,
    motion: "stack",
    en: {
      nav: "Pancake",
      name: "Pancake",
      description: "Mix for the preparation of Pancake products.",
      characteristics: [
        "Ready to use",
        "Stable texture",
        "Moist and airy",
        "Consistent quality and flavor",
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "بان كيك",
      name: "البان كيك",
      description: "خلطة لتحضير منتجات البان كيك.",
      characteristics: [
        "جاهزة للاستخدام",
        "قوام ثابت",
        "رطب وهش",
        "جودة ونكهة ثابتة",
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "dates-cake",
    image: datesImg,
    motion: "warm",
    en: {
      nav: "Dates Cake",
      name: "Dates Cake",
      description: "Mix for the preparation of Dates Cake products.",
      characteristics: [
        "Ready to use",
        "Stable texture",
        "Moist and airy",
        "Consistent quality and flavor",
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "كيك التمر",
      name: "كيك التمر",
      description: "خلطة لتحضير منتجات كيك التمر.",
      characteristics: [
        "جاهزة للاستخدام",
        "قوام ثابت",
        "رطب وهش",
        "جودة ونكهة ثابتة",
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "toast",
    image: toastImg,
    motion: "center-scale",
    en: {
      nav: "Toast",
      name: "Toast Mix",
      description: "Soft and light toast bread, ideal for preparing sandwiches and breakfast meals.",

      characteristics: [
        "Soft and spongy texture",
        "uniform slices",
        "mild and delicious taste",
        "high quality and suitable for everyday use",
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "التوست",
      name: "خلطة التوست",
      description: "خبز توست ناعم وخفيف، مثالي لتحضير السندويشات ووجبات الإفطار.",
      characteristics: [
        "ملمس ناعم وإسفنجي",

        "شرائح متساوية",

        "طعم خفيف ولذيذ",

        "جودة عالية ومناسبة للاستخدام اليومي"
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "Brioche",
    image: briocheImg,
    motion: "multi-direction",
    en: {
      nav: "Brioche",
      name: "Brioche Bread ",
      description: "Rich and soft brioche bread with a smooth texture and distinctive flavor, ideal for sandwiches, burgers, and a variety of baked products.",

      characteristics: [
        "Soft and spongy texture",
        "Rich and distinctive flavor",
        "Good spongy texture",
        "High quality",
        "Uniform shape"
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "خبز البريوش",
      name: " خبز البريوش",
      description: "خبز بريوش غني وناعم ذو ملمس ناعم ونكهة مميزة، مثالي للسندويشات والبرغر ومجموعة متنوعة من المخبوزات.",
      characteristics: [
        "قوام ناعم و طري",

        "نكهة غنية ومميزة",

        "ملمس اسفنجي جيد",

        "جودة عالية",
        "شكل متجانس"
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "kaiser",
    image: kaiserImg,
    motion: "layered",
    en: {
      nav: "Kaiser",
      name: "Kaiser Bread",
      description: "Light and well-balanced Kaiser bread with a firm interior texture and distinctive outer crust, ideal for burgers and sandwiches.",

      characteristics: [
        "Light and balanced texture",
        "Distinctive outer crust",
        "Good aeration",
        "Uniform shape",
        "Delicious taste"
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "خبز الكيزر",
      name: " خبز الكيزر",
      description: "خبز كيزر خفيف و متوازن ، يتميز بقوام متماسك من الداخل  وقشرة خارجية  مميزة ، مناسب بشكل خاص لتحضير البرجر والسندوتشات",
      characteristics: ["قوام خفيف ومتوازن",

        "قشرة خارجية مميزة",

        "تهوية جيدة",

        "شكل متجانس",

        "مذاق لذيذ"
      ],
      packaging: PACK_AR,
    },
  },
  {
    id: "Croissant",
    image: croissantImg,
    motion: "horizontal",
    en: {
      nav: "Croissant",
      name: "Croissant Bread",
      description: "A premium mix for preparing croissant products, delivering a light and flaky texture with well-defined layers and a rich, distinctive flavor.",

      characteristics: [
        "Light and flaky texture",
        "Well-defined layers",
        "Good aeration",
        "Rich and delicious flavor",
        "Consistent size and shape"
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "خبز الكرواسون",
      name: " خبز الكرواسون",
      description: "مزيج فاخر لتحضير منتجات الكرواسون، يمنحها قوامًا خفيفًا ومقرمشًا مع طبقات محددة جيدًا ونكهة غنية ومميزة.",
      characteristics: ["قوام خفيف ومتفتت",

        "طبقات واضحة المعالم",

        "تهوية جيدة",

        "نكهة غنية ولذيذة",

        "حجم وشكل متناسقان"
      ],
      packaging: PACK_AR,
    },
  },
    {
    id: "frenchBread",
    image: frenchBreadtImg,
    motion: "dramatic",
    en: {
      nav: "French Bread",
      name: "French Bread",
      description: "Soft and light Samoli bread, ideal for preparing sandwiches and quick meals.",

      characteristics: [
        "Soft and airy texture",
        "good aeration",
        "delicious taste, high quality",
        "Rich and delicious flavor",
        "suitable for various fillings"
      ],
      packaging: PACK_EN,
    },
    ar: {
      nav: "خبز الصامولي",
      name: " خبز الصامولي",
      description: "خبز صامولي ناعم وخفيف، مثالي لتحضير السندويشات والوجبات السريعة",
      characteristics: [
        "قوام ناعم وخفيف",

        "تهوية جيدة",

        "مذاق لذيذ وجودة عالية",

        "نكهة غنية ولذيذة",

        "مناسب لحشوات متنوعة"
      ],
      packaging: PACK_AR,
    },
  },
];

export interface IngredientGroup {
  id: string;
  image: string;
  en: { nav: string; name: string; items: string[] };
  ar: { nav: string; name: string; items: string[] };
}

export const ingredients: IngredientGroup[] = [
  {
    id: "icing-sugar",
    image: icingImg,
    en: { nav: "Icing Sugar", name: "Icing Sugar", items: ["Icing Sugar"] },
    ar: { nav: "سكر بودرة", name: "سكر بودرة", items: ["سكر بودرة"] },
  },
  {
    id: "chocolate",
    image: chocolateImg,
    en: {
      nav: "Chocolate",
      name: "Bulk Chocolate",
      items: ["Milk Chocolate", "Dark Chocolate", "White Chocolate"],
    },
    ar: {
      nav: "شوكولاتة",
      name: "شوكولاتة سائبة",
      items: ["شوكولاتة بالحليب", "شوكولاتة داكنة", "شوكولاتة بيضاء"],
    },
  },
  {
    id: "chocolate-chips",
    image: chipsImg,
    en: {
      nav: "Chocolate Chips",
      name: "Chocolate Chips",
      items: ["Chocolate Chips Granules", "White Chocolate Chips", "Dark Chocolate Chips"],
    },
    ar: {
      nav: "رقائق الشوكولاتة",
      name: "رقائق الشوكولاتة",
      items: ["حبيبات رقائق الشوكولاتة", "رقائق شوكولاتة بيضاء", "رقائق شوكولاتة داكنة"],
    },
  },
];

export const sauces = {
  id: "topping-sauces",
  image: saucesImg,
  en: {
    nav: "Topping Sauces",
    name: "Topping Sauces",
    items: ["Strawberry Topping Sauce", "Caramel Topping Sauce", "Chocolate Topping Sauce"],
  },
  ar: {
    nav: "صوصات التزيين",
    name: "صوصات التزيين",
    items: ["صوص فراولة", "صوص كراميل", "صوص شوكولاتة"],
  },
};

export const fillings = {
  id: "cake-fillings",
  image: fillingsImg,
  en: { nav: "Cake Fillings", name: "Cake Fillings", items: ["Strawberry", "Chocolate", "Caramel"] },
  ar: { nav: "حشوات الكيك", name: "حشوات الكيك", items: ["فراولة", "شوكولاتة", "كراميل"] },
};

export const heroImage = "/src/assets/hero.jpg";
