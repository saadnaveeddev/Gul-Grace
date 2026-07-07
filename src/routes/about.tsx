import { Link, createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import story from "@/assets/story.jpg";
import packaging from "@/assets/packaging.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Premium Resin Art & Handmade Gifts Pakistan | Gul & Grace" },
      {
        name: "description",
        content:
          "Gul & Grace creates premium handmade resin art in Pakistan — preserving flowers, memories, and love stories in timeless keepsakes, crafted slowly by hand.",
      },
      { property: "og:title", content: "Our Story | Gul & Grace" },
      { property: "og:description", content: "Premium handmade resin art in Pakistan — preserving flowers, memories, and love stories." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="container-luxe py-20 text-center">
        <img src={logo} alt="Gul & Grace logo" width={80} height={80} className="mx-auto h-20 w-20 object-contain" />
        <p className="eyebrow mt-6">Our Story</p>
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-3xl leading-snug sm:text-4xl">
          For People Who Believe Memories Deserve More Than a Photograph
        </h1>
        <div className="divider-gold mt-7" />
      </section>

      <section className="container-luxe grid items-center gap-10 pb-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl gold-border">
          <img src={about} alt="Gul & Grace artisan workspace with dried flowers, resin molds, and gold flakes" width={1024} height={1280} loading="lazy" className="w-full object-cover" />
        </div>
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p className="font-display text-xl text-foreground">
            Gul & Grace was created for people who believe memories deserve
            more than a photograph.
          </p>
          <p>
            Every piece is handcrafted slowly, carefully, and with meaning. A
            flower from a wedding day. A note in someone's handwriting. Petals
            from a garden that no longer blooms. These are the things we work
            with — and the things we protect.
          </p>
          <p>
            "Gul" means flower. Grace is how we treat every single one that
            arrives in our studio. Each bloom is dried over weeks, arranged by
            hand, and cast in crystal-clear resin so it keeps its color, shape,
            and softness for a lifetime.
          </p>
          <p>
            We are based in Pakistan and work with customers across the
            country — brides, daughters, mothers, and friends who trust us
            with the moments they never want to lose.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-luxe grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img src={story} alt="Hands placing dried flowers into resin molds" width={1024} height={768} loading="lazy" className="w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 font-display text-3xl">Made Slowly. Finished Carefully. Preserved Forever.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li><span className="font-medium text-foreground">Slow drying.</span> Flowers are dried naturally over 3–4 weeks to hold their true color.</li>
              <li><span className="font-medium text-foreground">Hand arrangement.</span> Every petal is placed with tweezers, one at a time.</li>
              <li><span className="font-medium text-foreground">Layered pouring.</span> Resin is poured in thin layers over days, never rushed.</li>
              <li><span className="font-medium text-foreground">Careful finishing.</span> Sanded, polished, and inspected before it ever leaves our hands.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-luxe grid items-center gap-10 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">The Unboxing</p>
          <h2 className="mt-3 font-display text-3xl">Packaging That Feels Like a Gift</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every order arrives wrapped in tissue, tied with gold ribbon, and
            sealed with a dried flower sprig — because receiving your memory
            back should feel like a moment of its own.
          </p>
          <Link to="/shop" className="btn-gold mt-7">Explore the Collection</Link>
        </div>
        <div className="overflow-hidden rounded-3xl gold-border">
          <img src={packaging} alt="Premium Gul & Grace gift packaging with gold ribbon and dried flowers" width={768} height={768} loading="lazy" className="w-full object-cover" />
        </div>
      </section>
    </main>
  );
}
