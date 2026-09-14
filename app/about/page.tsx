import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { content } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { teammembers } from "@/lib/data-team";
import { aboutContent } from "@/lib/content-defaults";

type AboutShape = typeof aboutContent;

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Prodigy Construction Limited is a professional construction and engineering company committed to delivering high-quality built environments and infrastructure across Kenya and East Africa.",
  path: "/about",
});

const pillars = [
  "Integrity",
  "Excellence",
  "Safety",
  "Accountability",
  "Innovation",
  "Teamwork",
  "Client Focus",
  "Sustainability",
];

export default function AboutPage() {
  const c = content<AboutShape>("about");
  const team = teammembers.slice(0, 4);
  return (
    <>
      <PageHero eyebrow={c.pageKicker} title={c.pageTitle} subtitle={c.pageText} image={c.pageImage} />

      {/* Who we are */}
      <section className="border-b border-line bg-paper py-24">
        <div className="page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-index">{c.whoWeAreIndex}</p>
            <h2 className="display-sm mt-5 max-w-lg">{c.whoWeAreTitle}</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted">{c.whoWeAreText}</p>
            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              {[
                "Government & county institutions",
                "Corporations & developers",
                "NGOs & international organisations",
                "Commercial, industrial & residential clients",
              ].map((s) => (
                <div key={s} className="bg-paper px-5 py-4 font-mono text-[0.65rem] uppercase tracking-wider">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-b border-line bg-graphite text-paper py-24">
        <div className="page grid gap-16 lg:grid-cols-2">
          <div className="border-l-2 border-orange pl-8">
            <p className="kicker text-orange">{c.visionTitle}</p>
            <h2 className="display-md mt-4">{c.visionText}</h2>
          </div>
          <div className="border-l-2 border-paper/20 pl-8">
            <p className="kicker text-paper/50">{c.missionTitle}</p>
            <h2 className="display-md mt-4 text-paper/85">{c.missionText}</h2>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line bg-paper py-24">
        <div className="page">
          <div className="mb-12 grid grid-cols-[220px_1fr] items-end gap-8">
            <p className="section-index">{c.valuesIndex}</p>
            <h2 className="display-sm max-w-xl">{c.valuesTitle}</h2>
          </div>
          <ul className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {pillars.map((v, i) => (
              <li key={v} className="bg-paper p-7">
                <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-4 block font-display text-xl font-semibold uppercase">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-line bg-limestone py-24">
        <div className="page">
          <div className="mb-12 grid grid-cols-[220px_1fr] items-end gap-8">
            <p className="section-index">{c.leadershipIndex}</p>
            <div>
              <h2 className="display-sm max-w-xl">{c.leadershipTitle}</h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">{c.leadershipNote}</p>
            </div>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {team.length > 0 ? (
              team.map((m) => (
                <div key={m.slug} className="bg-paper p-7">
                  <div className="flex h-40 items-center justify-center border border-line bg-limestone">
                    {m.name.includes("placeholder") ? (
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-smoke">
                        [CMS: Photo]
                      </span>
                    ) : (
                      <span className="font-display text-6xl font-bold text-smoke/40">
                        {m.name.slice(0, 1)}
                      </span>
                    )}
                  </div>
                  <p className="kicker mt-4 text-smoke">{m.role}</p>
                  <p className="font-mono mt-1 text-sm text-graphite">{m.name}</p>
                </div>
              ))
            ) : (
              <>
                {["Managing Director", "Director", "Senior Engineer", "Project Manager"].map((role) => (
                  <div key={role} className="bg-paper p-7">
                    <div className="flex h-40 items-center justify-center border border-line bg-limestone">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-smoke">
                        [CMS: Photo]
                      </span>
                    </div>
                    <p className="kicker mt-4 text-smoke">{role}</p>
                    <p className="font-mono mt-1 text-sm text-graphite">[CMS: Name — placeholder]</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
