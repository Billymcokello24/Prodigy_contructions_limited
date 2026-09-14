import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import { insights } from "@/lib/data-insights";
import { Container } from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
  });
}

export default async function InsightArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);
  if (!post) notFound();

  const related = insights
    .filter((i) => i.category === post.category && i.slug !== post.slug)
    .slice(0, 3);

  const paragraphs = post.excerpt && post.excerpt.length > 0 ? [post.excerpt] : [];

  return (
    <>
      <article className="bg-charcoal pt-28 lg:pt-32">
        <Container className="max-w-4xl pb-10 pt-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: post.title },
            ]}
          />
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-accent">{post.category}</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-accent" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> {post.readMinutes} min read</span>
            <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-accent" /> {post.author}</span>
          </div>
        </Container>
      </article>

      <div className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <img src={post.image} alt={post.title} className="-mt-6 w-full aspect-[21/9] rounded-2xl object-cover shadow-lift" />
          <div className="mx-auto max-w-3xl py-12">
            <p className="text-lg leading-relaxed text-ink">{post.excerpt}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">
              The full article will be published here by the Prodigy editorial team. Content is structured so that
              complete articles, author bios and imagery can be added without redesign.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-concrete/50 p-6 text-sm text-muted">
              <p><strong className="text-ink">Category:</strong> {post.category}</p>
              <p className="mt-1"><strong className="text-ink">Author:</strong> {post.author}</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="bg-concrete py-14">
          <Container>
            <h2 className="text-2xl font-bold text-ink">Related Articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <img src={p.image} alt={p.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-medium text-accent">{p.category}</p>
                    <h3 className="mt-1.5 text-base font-bold text-ink group-hover:text-accent">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTABanner />
    </>
  );
}