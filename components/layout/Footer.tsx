import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, footerNav } from "@/lib/site";
import { siteContent } from "@/lib/content-defaults";

const year = new Date().getFullYear();

const legal = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-paper">
      {/* Statement band */}
      <div className="border-b border-white/10">
        <div className="page py-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="kicker text-orange">PRODIGY CONSTRUCTION LIMITED</p>
              <h2 className="display-md mt-4 max-w-2xl">
                Built on clarity. <span className="text-paper/40">Delivered with discipline.</span>
              </h2>
            </div>
            <Link href="/contact" className="btn btn-moss flex items-center gap-2">
              Discuss a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold uppercase tracking-wide">
              PRODIGY
            </span>
            <span className="font-mono text-[0.5rem] uppercase tracking-[0.28em] text-paper/50">
              CONSTRUCTION
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
            {site.description}
          </p>
          <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-widest text-paper/40">
            {siteContent.footerRegion}
          </p>
        </div>

        <nav aria-label="Company">
          <h3 className="kicker mb-4 text-paper/40">Company</h3>
          <ul className="space-y-2.5">
            {footerNav.company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 transition-colors hover:text-orange"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Explore">
          <h3 className="kicker mb-4 text-paper/40">Explore</h3>
          <ul className="space-y-2.5">
            <li><Link href="/services" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">Services</Link></li>
            <li><Link href="/projects" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">Projects</Link></li>
            <li><Link href="/industries" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">Industries</Link></li>
            <li><Link href="/insights" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">Insights</Link></li>
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h3 className="kicker mb-4 text-paper/40">Resources</h3>
          <ul className="space-y-2.5">
            <li><Link href="/faqs" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">FAQs</Link></li>
            <li><Link href="/downloads" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">Downloads</Link></li>
            <li><Link href="/technology" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">Technology</Link></li>
            <li><Link href="/equipment" className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/75 hover:text-orange">Equipment</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="kicker mb-4 text-paper/40">Contact</h3>
          <ul className="space-y-2.5 font-mono text-[0.65rem] uppercase tracking-wider text-paper/75">
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-orange">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-orange">{site.email}</a>
            </li>
            <li className="normal-case tracking-normal text-paper/55">{site.streetAddress}</li>
            <li>
              <Link href="/contact" className="text-orange underline-offset-4 hover:underline">
                Contact form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page flex flex-col gap-3 py-6 font-mono text-[0.55rem] uppercase tracking-widest text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Prodigy Construction Limited</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-orange">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}