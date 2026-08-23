import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Flame,
  ShoppingBag,
  Leaf,
  Gift,
  Star,
  Instagram,
  Camera,
  Mail,
  Droplet,
} from "lucide-react";
import coconutCandle from "@/assets/coconut-candle.jpg";
import candleBouquet from "@/assets/candle-bouquet.jpg";
import oceanCandle from "@/assets/ocean-candle.jpg";
import woodCandle from "@/assets/wood-candle.jpg";
import latteCandle from "@/assets/latte-candle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waxelle Candles: Handmade Soy Candles by Mahy" },
      {
        name: "description",
        content:
          "Hand-poured 100% soy wax candles from Amman: coconut husk pours, candle bouquets and iced coffee candles. Small batches, free gift over 20 JOD.",
      },
      { property: "og:title", content: "Waxelle Candles: Handmade Soy Candles by Mahy" },
      {
        property: "og:description",
        content:
          "Coconut husk candles, candle bouquets and iced coffee pours. 100% soy wax, hand-poured in small batches.",
      },
    ],
  }),
  component: Index,
});

const MARQUEE =
  "Coconut Husk Candles back in stock • 100% Soy Wax • Poured by hand in small batches • Free gift on orders over 20 JOD";

const NAV = [
  { label: "Candles", href: "#collection" },
  { label: "Bouquets", href: "#collection" },
  { label: "Our Story", href: "#process" },
  { label: "Reviews", href: "#reviews" },
];

const PRODUCTS = [
  {
    name: "The Coconut Husk Candle",
    price: "18 JOD",
    badge: "BESTSELLER",
    badgeClass: "bg-coral text-cream",
    bg: "bg-mint",
    img: coconutCandle,
    note: "Toasted coconut and vanilla, poured in a real husk",
    span: "lg:col-span-2",
  },
  {
    name: "Artisanal Candle Bouquet",
    price: "25 JOD",
    badge: "GIFT READY",
    badgeClass: "bg-mustard text-espresso",
    bg: "bg-blush",
    img: candleBouquet,
    note: "Sculpted wax petals, wrapped in kraft paper",
    span: "",
  },
  {
    name: "Ocean Horizon Glass",
    price: "15 JOD",
    badge: null,
    badgeClass: "",
    bg: "bg-paper",
    img: oceanCandle,
    note: "Sea salt and driftwood in poured glass",
    span: "",
  },
  {
    name: "Rustic Wood Bark Candle",
    price: "20 JOD",
    badge: null,
    badgeClass: "",
    bg: "bg-cream",
    img: woodCandle,
    note: "Cedar, amber and a little woodsmoke",
    span: "",
  },
  {
    name: "Iced Coffee Candle",
    price: "14 JOD",
    badge: "NEW POUR",
    badgeClass: "bg-mint text-espresso",
    bg: "bg-mustard",
    img: latteCandle,
    note: "Oat latte and brown sugar, layered by hand",
    span: "",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Hand-Poured Soy Wax",
    body: "Every batch is melted, stirred and poured by hand in our small home studio in Amman.",
    Icon: Droplet,
  },
  {
    n: "2",
    title: "Infused Premium Oils",
    body: "Skin-safe, phthalate-free fragrance oils blended and cured until the scent throws evenly.",
    Icon: Leaf,
  },
  {
    n: "3",
    title: "Packed by Hand",
    body: "Wrapped in kraft paper with a trimmed wick and a handwritten card in every box.",
    Icon: Gift,
  },
];

const REVIEWS = [
  {
    quote: "The coconut husk candle made my whole apartment smell like a beach holiday.",
    name: "Layla H.",
    color: "bg-mustard",
    tilt: "-2deg",
  },
  {
    quote: "Bought the bouquet as a gift and almost kept it for myself. Sorry mum.",
    name: "Omar K.",
    color: "bg-mint",
    tilt: "3deg",
  },
  {
    quote: "Burns clean, no tunnelling, and the jar looks great on my shelf. Third order already.",
    name: "Dana S.",
    color: "bg-blush",
    tilt: "-3deg",
  },
  {
    quote: "The iced coffee candle fooled two of my friends. Worth every fils.",
    name: "Yousef A.",
    color: "bg-coral",
    tilt: "2deg",
  },
];

const GALLERY = [
  { img: coconutCandle, caption: "batch no. 42" },
  { img: latteCandle, caption: "iced, always" },
  { img: candleBouquet, caption: "gift season" },
  { img: oceanCandle, caption: "sea salt pour" },
  { img: woodCandle, caption: "cozy corner" },
];

function Index() {
  const [cart, setCart] = useState(2);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-espresso bg-mustard py-2.5">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="px-6 font-display text-sm font-semibold tracking-wide text-espresso sm:text-base"
            >
              {`${MARQUEE}   ${MARQUEE}`}
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 px-3 pt-4 sm:px-6">
        <nav className="brut mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-full bg-paper px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-espresso bg-coral text-cream">
              <Flame className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="font-display text-2xl font-bold text-espresso">Waxelle</span>
          </a>

          <ul className="order-3 flex w-full flex-wrap justify-center gap-2 md:order-none md:w-auto">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-block rounded-full border-[1.5px] border-espresso px-3 py-1.5 text-sm font-semibold text-espresso transition-colors hover:bg-mustard"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#collection"
              className="brut brut-hover rounded-full bg-mint px-4 py-2 font-display text-sm font-semibold text-espresso"
            >
              Order Now
            </a>
            <button
              onClick={() => setCart((c) => c + 1)}
              aria-label="Open cart"
              className="brut brut-hover relative rounded-full bg-paper px-3 py-2 text-espresso"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-espresso bg-mustard text-xs font-bold text-espresso">
                {cart}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="brut inline-flex -rotate-2 items-center gap-2 rounded-full bg-coral px-4 py-1.5 font-display text-sm font-semibold text-cream">
              <Flame className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              100% HAND-POURED SOY WAX
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] text-espresso sm:text-6xl lg:text-7xl">
              Life is Better
              <br />
              With{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Aesthetic</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 rounded-full bg-mint" />
              </span>
              <br />
              Candles!
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Waxelle by Mahy pours 100% soy wax candles by hand in batches of twenty: coconut husk
              pours, sculpted bouquets and iced coffee candles that look a little too real.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="brut-lg brut-hover rounded-full bg-mustard px-7 py-3.5 font-display text-lg font-semibold text-espresso"
              >
                Shop the Pours
              </a>
              <a
                href="#footer"
                className="brut-lg brut-hover rounded-full bg-mint px-7 py-3.5 font-display text-lg font-semibold text-espresso"
              >
                Custom Order
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="brut-lg rotate-2 rounded-3xl bg-paper p-4 pb-16">
              <img
                src={coconutCandle}
                alt="Handmade coconut husk soy wax candle surrounded by dried flowers"
                width={1024}
                height={1024}
                className="w-full rounded-2xl border-[1.5px] border-espresso object-cover"
              />
              <p className="absolute bottom-5 left-0 right-0 text-center font-display text-lg text-espresso">
                the coconut husk pour
              </p>
            </div>
            <span
              className="brut floaty absolute -left-4 top-6 -rotate-6 rounded-full bg-mustard px-3 py-1.5 font-display text-sm font-semibold text-espresso"
              style={{ ["--tilt" as string]: "-6deg" }}
            >
              Best Seller
            </span>
            <span
              className="brut floaty absolute -bottom-4 right-0 rotate-3 rounded-full bg-mint px-3 py-1.5 font-display text-sm font-semibold text-espresso"
              style={{ ["--tilt" as string]: "3deg", animationDelay: "1s" }}
            >
              40 hour burn time
            </span>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-bold text-espresso sm:text-5xl">
            Pick Your Little Treat
          </h2>
          <svg
            viewBox="0 0 300 16"
            className="mx-auto mt-2 h-4 w-64 text-coral"
            aria-hidden="true"
          >
            <path
              d="M4 11 C 70 2, 130 15, 296 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Small batch, big personality. Every candle is poured, trimmed and wrapped by hand.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className={`brut flex flex-col rounded-3xl p-4 transition-transform duration-150 ${
                i % 2 ? "hover:rotate-1" : "hover:-rotate-1"
              } ${p.bg} ${p.span}`}
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className={`w-full rounded-2xl border-[1.5px] border-espresso object-cover ${
                    p.span ? "aspect-[16/10]" : "aspect-square"
                  }`}
                />
                {p.badge && (
                  <span
                    className={`brut absolute -left-2 -top-3 -rotate-3 rounded-full px-3 py-1 font-display text-xs font-bold tracking-wide ${p.badgeClass}`}
                  >
                    {p.badge}
                  </span>
                )}
                <span className="brut absolute -bottom-3 right-2 rounded-full bg-paper px-3 py-1 font-display text-sm font-bold text-espresso">
                  {p.price}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-espresso">{p.name}</h3>
              <p className="mt-1 text-sm text-espresso/70">{p.note}</p>
              <button
                onClick={() => setCart((c) => c + 1)}
                className="brut brut-hover mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-4 py-2.5 font-display text-sm font-semibold text-cream"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Add to Bag
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="border-y-2 border-espresso bg-mint px-4 py-14 sm:px-6 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-4xl font-bold text-espresso sm:text-5xl">
            How It&apos;s Made
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-espresso/80">
            No factories and no shortcuts. Just soy wax, fragrance oils and a very patient Mahy.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="brut rounded-3xl bg-cream p-6"
                style={{ transform: `rotate(${i === 1 ? 1.5 : i === 0 ? -1.5 : 2}deg)` }}
              >
                <span className="brut flex h-12 w-12 items-center justify-center rounded-full bg-mustard font-display text-xl font-bold text-espresso">
                  {s.n}
                </span>
                <s.Icon
                  className="mt-4 h-7 w-7 text-espresso"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="mt-2 font-display text-xl font-semibold text-espresso">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="text-center font-display text-4xl font-bold text-espresso sm:text-5xl">
          Notes From Our People
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className={`brut relative rounded-sm p-5 ${r.color}`}
              style={{ transform: `rotate(${r.tilt})` }}
            >
              <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-[1.5px] border-espresso bg-espresso" />
              <div className="flex gap-0.5 text-espresso" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} className="h-4 w-4 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              <blockquote className="mt-3 font-display text-base leading-snug text-espresso">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold text-espresso/80">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:pb-20">
        <div className="brut-lg rounded-3xl bg-paper p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 font-display text-3xl font-bold text-espresso">
              <Camera className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              @waxelle_candles
            </h2>
            <a
              href="#footer"
              className="brut brut-hover inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2 font-display text-sm font-semibold text-cream"
            >
              <Instagram className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Follow Along
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {GALLERY.map((g, i) => (
              <figure
                key={g.caption}
                className={`brut overflow-hidden rounded-2xl bg-cream p-2 transition-transform duration-150 ${
                  i % 2 ? "hover:rotate-1" : "hover:-rotate-1"
                }`}
                style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
              >
                <img
                  src={g.img}
                  alt={g.caption}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-[4/5] w-full rounded-xl border-[1.5px] border-espresso object-cover"
                />
                <figcaption className="pb-1 pt-2 text-center font-display text-xs text-espresso">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t-2 border-espresso bg-mustard px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
              Get 10% off your
              <br />
              first cozy order
            </h2>
            <p className="mt-3 max-w-sm text-espresso/80">
              Scent drops, restocks and small-batch news. No spam, only wax.
            </p>
            <form
              className="brut mt-6 flex max-w-md items-center gap-2 rounded-full bg-paper p-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Mail className="ml-3 h-5 w-5 shrink-0 text-espresso/60" aria-hidden="true" />
              <input
                type="email"
                required
                placeholder="your@email.com"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full bg-transparent px-1 py-2 text-sm text-espresso outline-none placeholder:text-espresso/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full border-[1.5px] border-espresso bg-mint px-5 py-2 font-display text-sm font-semibold text-espresso transition-transform duration-150 active:translate-x-0.5 active:translate-y-0.5"
              >
                Join
              </button>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
            <div>
              <h3 className="font-display text-xl font-bold text-espresso">Waxelle by Mahy</h3>
              <p className="mt-2 max-w-xs text-sm text-espresso/80">
                Handmade soy wax candles, poured in small batches in Amman, Jordan. Free gift on
                orders over 20 JOD.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-espresso">Say Hi</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {["Instagram", "TikTok", "WhatsApp", "Email"].map((s) => (
                  <li key={s}>
                    <a
                      href="#footer"
                      className="brut brut-hover inline-block rounded-full bg-cream px-4 py-1.5 text-sm font-semibold text-espresso"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl border-t-[1.5px] border-espresso pt-5 text-center text-sm font-semibold text-espresso/70">
          © {new Date().getFullYear()} Waxelle Candles · Poured by hand in Amman
        </p>
      </footer>
    </div>
  );
}
