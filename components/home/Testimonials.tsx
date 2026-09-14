import { testimonials } from "@/lib/data-testimonials";

export default function Testimonials() {
  const items = testimonials.filter((t) => t.approved).slice(0, 2);
  if (items.length === 0) return null;
  return (
    <section className="border-b border-line bg-paper py-24">
      <div className="page">
        <div className="mb-12 grid grid-cols-[220px_1fr] items-end gap-8">
          <p className="section-index">Testimonials</p>
          <h2 className="display-sm max-w-xl">What clients say about delivery.</h2>
        </div>
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {items.map((t) => (
            <figure key={t.slug} className="flex flex-col justify-between gap-10 bg-paper p-10">
              <blockquote className="text-xl leading-relaxed text-graphite">
                “{t.quote}”
              </blockquote>
              <figcaption>
                <p className="font-display text-lg font-semibold uppercase">{t.name}</p>
                <p className="kicker mt-1 text-smoke">
                  {t.position} · {t.organization}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
