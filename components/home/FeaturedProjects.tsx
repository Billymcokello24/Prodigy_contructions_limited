import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { getCollection } from "@/lib/cms";
import SectionIntro from "@/components/sections/SectionIntro";

const codeMap: Record<string, string> = {
  commercial: "Commercial",
  "roads-infrastructure": "Infrastructure",
  institutional: "Institutional",
};

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const home = getCollection("home") as { projectsTitle?: string; projectsText?: string; projectsIndex?: string; projectsLinkLabel?: string };
  return (
    <section className="border-b border-line bg-paper py-24">
      <div className="page">
        <SectionIntro
          index={home.projectsIndex ?? "03 / Selected work"}
          title={home.projectsTitle ?? "Projects shaped by purpose."}
          text={home.projectsText}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => {
            const code = codeMap[p.category] ?? p.category;
            return (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="pcard group relative block min-h-[460px] overflow-hidden bg-graphite text-paper">
                <img
                  src={p.image}
                  alt={p.name}
                  className="pcard-img absolute inset-0 h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="kicker text-orange">
                    {code} {p.location ? `· ${p.location}` : "· [CMS: Verified location]"}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold uppercase leading-tight">{p.name}</h3>
                  <p className="kicker mt-2 text-paper/60">
                    {p.status === "Completed" ? "Completed project" : `Portfolio record — status: ${p.status.toLowerCase()}`}
                  </p>
                </div>
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center bg-orange text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 flex justify-end">
          <Link href="/projects" className="arrow-link">
            <span>{home.projectsLinkLabel ?? "Explore the project portfolio"}</span>
            <ArrowUpRight className="arr h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
