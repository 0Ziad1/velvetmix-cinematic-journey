# VelvetMix Digital Showcase

Build a premium, modern, highly visual company portfolio website for VelvetMix, a Saudi food manufacturing company specialized in high-quality baking mixes, dessert mixes, and powdered food products.

The website should feel luxurious, elegant, modern, appetizing, and interactive, more like a premium food-brand experience than a traditional corporate website.

1. Core requirements
Website name: VelvetMix
English should be the default language.
Add a highly visible English / العربية language switcher.
When Arabic is selected:
Switch the entire interface to Arabic.
Use proper RTL layout.
Translate all website content.
Preserve the same visual hierarchy and animations.
Make the website fully responsive for:
Desktop
Tablet
Mobile
Use GSAP extensively for high-quality scroll-based animations and transitions.
Use smooth scrolling.
Animations must feel premium and intentional, not excessive or distracting.
The website should have excellent performance despite the animations.
2. Design direction

Use the uploaded VelvetMix 2026 catalog/brochure as the primary visual reference.

Extract the following from the brochure:

Brand colors
Typography style
Visual identity
Product presentation style
Background colors
Decorative elements
Overall premium food aesthetic

Do not invent a completely different color palette.

The website should visually feel like a digital, interactive version of the brochure.

Use the brochure's actual information and terminology wherever possible.

The catalog identifies VelvetMix as a Saudi factory focused on quality, innovation, and supplying local and international markets, with a vision to become a leader across Saudi Arabia, the Middle East, and Africa.

3. Hero section

Create a cinematic full-screen hero section.

Content

Large elegant typography:

VELVETMIX

Subtitle:

High-quality baking & confectionery mixes

Supporting text:

High-quality powdered raw materials specialized in cake, bakery, and confectionery mixes.

Primary CTA:

Explore Our Products

Secondary CTA:

About VelvetMix

Animation

On page load:

Logo/title appears with a smooth GSAP reveal.
Background elements subtly move.
Product-related visual elements enter the scene.
Typography has a subtle cinematic movement.
The hero should transition naturally into the product showcase when the user starts scrolling.

Add a small animated:

SCROLL TO EXPLORE ↓

4. Main interactive product experience

This is the most important section of the website.

Do NOT create a normal grid of product cards.

Instead, create a cinematic horizontal/vertical scroll experience powered by GSAP ScrollTrigger.

The user should feel like they are traveling through the VelvetMix product world.

The concept:

Muffin → Cookies → Sponge Cake → English Cake → Red Velvet → Pancake → Dates Cake → Icing Sugar → Chocolate → Chocolate Chips → Topping Sauces → Cake Fillings

Each category should occupy a major visual section.

As the user scrolls:

The current product becomes the visual focus.
Product imagery moves dynamically.
Images can rotate, scale, translate, and slightly blur/sharpen.
Product names animate into view.
Product descriptions appear progressively.
Background elements transition between product sections.
Previous product elements leave the viewport elegantly.
The next product enters from another direction.
Use pinned sections where appropriate.
Use GSAP timelines and ScrollTrigger to synchronize text, images, and backgrounds.

The transitions should feel similar to a high-end interactive product showcase.

5. First product section — MUFFIN

Start the product experience with:

MUFFIN MIX

Display two product variants:

Vanilla

Muffin Powder Vanilla

Chocolate

Muffin Powder Chocolate

Product description:

Mix for the preparation of muffin products.

Characteristics:

Rich flavor
Moist and cohesive texture
Ready to use
No need for enhancers or additives

Packaging:

10 kg bag
25 kg bag

This information comes directly from the VelvetMix catalog.

Animation

Make the muffin visual initially appear large in the center.

As the user scrolls:

Muffin image scales and rotates.
Text slides in from the side.
Vanilla and Chocolate variants appear sequentially.
Packaging information fades in.
The entire section transforms into the next product.

At the end of the section, use a beautiful GSAP transition where the muffin moves away and Cookies enter the screen.

6. COOKIES section

Create the same interactive experience for:

COOKIES PREMIX

Description:

Mix for the preparation of COOKIES.

Characteristics:

Rich flavor
Ready to use
No need for enhancers or additives

Packaging:

10 kg bag
25 kg bag

Animation

Use a different movement pattern from the muffin section so the website doesn't feel repetitive.

For example:

Cookies enter from multiple directions.
One large cookie becomes the focal point.
Smaller cookie elements move around it.
Product information appears through staggered GSAP animations.
Scrolling transitions into the Sponge Cake section.
7. SPONGE CAKE section
SPONGE CAKE

Description:

Mix for the preparation of Sponge Cake products and swissroll.

Available flavors:

Vanilla
Chocolate

Characteristics:

Ready to use
Stable texture
Moist and airy
Consistent quality and flavor

Packaging:

10 kg bag
25 kg bag

Use an elegant layered cake animation.

8. ENGLISH CAKE
ENGLISH CAKE

Description:

Mix for the preparation of English Cake.

Available flavor:

Vanilla

Characteristics:

Ready to use
Stable texture
Consistent quality and flavor

Packaging:

10 kg bag
25 kg bag

Use a sophisticated horizontal GSAP transition into this section.

9. RED VELVET
RED VELVET CAKE

Description:

Mix for the preparation of Red Velvet Cake.

Characteristics:

Ready to use
Stable texture
Moist and airy
Consistent quality and flavor

Packaging:

10 kg bag
25 kg bag

Make this section visually dramatic and luxurious.

The red velvet section can have a strong visual transition while still respecting the brochure's original brand palette.

10. PANCAKE
PANCAKE

Description:

Mix for the preparation of Pancake products.

Characteristics:

Ready to use
Stable texture
Moist and airy
Consistent quality and flavor

Packaging:

10 kg bag
25 kg bag

Create a playful but premium animation where pancakes stack while scrolling.

11. DATES CAKE
DATES CAKE

Description:

Mix for the preparation of Dates Cake products.

Characteristics:

Ready to use
Stable texture
Moist and airy
Consistent quality and flavor

Packaging:

10 kg bag
25 kg bag

Use a warm, elegant transition into this product.

12. INGREDIENTS & CHOCOLATE COLLECTION

After the cake/mix products, transition into the ingredient collection.

Create a visually distinct section:

PREMIUM INGREDIENTS

Include:

Icing Sugar

Icing Sugar / سكر بودرة

Bulk Chocolate
Milk Chocolate
Dark Chocolate
White Chocolate
Chocolate Chips
Chocolate Chips Granules
White Chocolate Chips
Dark Chocolate Chips

The catalog specifically presents milk, dark, and white bulk chocolate, followed by chocolate-chip variants.

Animation concept

Create a large flowing chocolate animation.

For example:

Chocolate particles move with scroll.
Chocolate products slide horizontally.
Cards expand when they become active.
Use GSAP ScrollTrigger to create a smooth "ingredient journey."
13. TOPPING SAUCES

Create:

TOPPING SAUCES

Products:

Strawberry Topping Sauce
Caramel Topping Sauce
Chocolate Topping Sauce

Use liquid-inspired animations.

The sauces can visually flow or stretch across the screen during scrolling, but keep the implementation performant and tasteful.

14. CAKE FILLINGS

Create:

CAKE FILLINGS

Available flavors:

Strawberry
Chocolate
Caramel

Make this a beautiful final product interaction before transitioning into the company section.

15. About VelvetMix

Create a sophisticated "About Us" section.

Title:

ABOUT VELVETMIX

Use the information from the brochure:

VelvetMix is a Saudi factory specialized in the manufacturing of baking mixes, dessert mixes, and powdered food products, with its headquarters located in the Kingdom of Saudi Arabia.

Highlight:

Quality
Innovation
High-quality products
Local markets
International markets
Export capabilities

Then present the vision:

To become a leader in the food and baking mix industry across Saudi Arabia, the Middle East, and Africa through continuous commitment to quality, development, innovation, and delivering distinctive products.

Keep the wording faithful to the brochure rather than inventing company claims.

Animation

Use a GSAP text reveal where individual lines appear as the user scrolls.

16. Product categories navigation

Add a beautiful floating navigation/menu.

Possible structure:

Products

Muffin
Cookies
Sponge Cake
English Cake
Red Velvet
Pancake
Dates Cake
Icing Sugar
Chocolate
Chocolate Chips
Topping Sauces
Cake Fillings

When clicking a category:

Smoothly scroll to the corresponding section.
Use GSAP ScrollToPlugin if appropriate.
Update the active category indicator.
17. Contact section

Create a premium contact section.

Title:

LET'S CREATE SOMETHING DELICIOUS

Use the brochure's contact information:

Phone

0541004444
0544252422

Email

info@salmantradingsa.com

Add:

Email button
Phone buttons
Contact form
Elegant footer

Do not invent a physical address or social-media accounts because they are not provided in the brochure.

18. Header

Create a minimal transparent header.

Left:

VelvetMix logo/name

Center/right:

Home
About
Products
Contact

Language:

EN | العربية

The header should transition from transparent to a subtle solid/blurred background when scrolling.

19. GSAP requirements

Use GSAP + ScrollTrigger as the primary animation system.

Implement:

Scroll-triggered product animations
Pinning
Horizontal scrolling where appropriate
Image scaling
Rotation
Parallax
Text reveals
Stagger animations
Section transitions
Product entrance/exit animations
Smooth navigation
Page-load timeline

Avoid excessive animation.

Every animation should support the storytelling of the product.

Use will-change carefully and avoid unnecessarily animating expensive properties.

Prefer:

transform
opacity

over expensive layout-triggering properties.

20. Visual interaction concept

The overall experience should feel like:

"Scrolling through a premium VelvetMix catalog."

Instead of:

Section → Card → Section → Card

I want:

Product appears → user scrolls → product transforms → information reveals → product exits → next product emerges → visual world changes → repeat.

The transition between products is the key feature of the website.

21. Typography

Use an elegant modern typography system.

For English:

Modern premium sans-serif
Large editorial headings
Strong typography hierarchy

For Arabic:

Use a modern Arabic font with excellent readability and elegant appearance.

Make sure Arabic and English typography feel like part of the same brand.

22. Images and assets

The uploaded brochure is the source of truth for the products and brand identity.

If product images can be extracted from the uploaded brochure, use them where appropriate.

If high-resolution product images are unavailable:

Create tasteful placeholders that clearly indicate where real product photography should be inserted.
Structure the code so product images can easily be replaced later.
Do not fabricate product packaging or official company logos that don't exist in the source.

Create a centralized product data structure so I can easily replace images later.

Example conceptual structure:

products = [
  {
    name: "Muffin Mix",
    category: "Muffin",
    variants: ["Vanilla", "Chocolate"],
    image: "...",
    description: "...",
    packaging: ["10 kg", "25 kg"]
  }
]
23. Responsive behavior

On desktop:

Full cinematic animations
Large product visuals
Horizontal transitions
Pinned ScrollTrigger sections

On mobile:

Simplify animations where necessary.
Keep the experience smooth.
Avoid extremely large images.
Convert horizontal interactions into vertical interactions when appropriate.
Make text easy to read.
Keep the language switcher accessible.

Respect prefers-reduced-motion.

24. Final quality requirements

The website must NOT look like a generic AI-generated landing page.

Avoid:

Generic gradients
Excessive rounded cards
Random floating blobs
Generic SaaS-style UI
Excessive glassmorphism
Stock-photo-looking layouts
Huge amounts of text

The result should look like a professional premium food-brand website.

The most important aspects are:

Beautiful visual identity based on the VelvetMix brochure
Cinematic GSAP scrolling
Product storytelling
Premium typography
Smooth transitions
English/Arabic support
Responsive design
Fast performance
Clean maintainable React code
Easy product/content management

Before implementing, inspect the uploaded VelvetMix catalog carefully and use its colors, product names, descriptions, packaging information, and company information as the source of truth.

Build the website as a complete polished portfolio, not merely a prototype or wireframe.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://velvetmix-cinematic-journey.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fc248243-f1cd-49c2-bbb3-67cb2e6c2cf4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
