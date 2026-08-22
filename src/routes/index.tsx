import { createFileRoute } from "@tanstack/react-router";

import { LanguageProvider } from "@/lib/i18n";
import { products, sauces, fillings } from "@/lib/products";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ProductSection } from "@/components/site/ProductSection";
import { Ingredients } from "@/components/site/Ingredients";
import { Showcase } from "@/components/site/Showcase";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ProductNav } from "@/components/site/ProductNav";

const title = "VelvetMix — Premium Saudi Baking & Dessert Mixes";
const description =
  "VelvetMix is a Saudi factory specialized in baking mixes, dessert mixes and powdered food products — muffin, cookies, sponge cake, red velvet, chocolate and more.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <Header />
        <main>
          <Hero />
          <div id="products">
            {products.map((p, i) => (
              <ProductSection key={p.id} product={p} index={i} />
            ))}
          </div>
          <Ingredients />
          <Showcase data={sauces} eyebrowKey="sauces.eyebrow" variant="liquid" />
          <Showcase data={fillings} eyebrowKey="fillings.eyebrow" variant="final" />
          <About />
          <Contact />
        </main>
        <Footer />
        <ProductNav />
      </SmoothScroll>
    </LanguageProvider>
  );
}
