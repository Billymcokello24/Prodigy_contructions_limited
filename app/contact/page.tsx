import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";
import PageHero from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Section";
import ContactForm from "@/components/forms/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: "Contact Prodigy Construction Limited for construction, engineering and infrastructure enquiries in Kenya and East Africa.",
  path: "/contact",
});

const channels = [
  { icon: MapPin, label: "Office", value: site.streetAddress, sub: site.officeAddress },
  { icon: Phone, label: "Phone", value: site.phone, sub: site.workingHours, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, sub: "Mon–Fri response within 1 business day", href: `mailto:${site.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: `+${site.whatsapp}`, sub: "Message us anytime", href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Prodigy Construction Limited, I would like to discuss a construction/project requirement.")}`, external: true },
  { icon: Clock, label: "Working Hours", value: site.workingHours, sub: "Emergency contact available to clients" },
  { icon: PhoneCall, label: "Emergency", value: site.emergencyContact, sub: "For active project issues", href: site.phoneHref },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Remarkable"
        subtitle="Tell us about your project and we'll respond with a clear, considered path forward."
        image="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {channels.map((c) => (
              <div key={c.label} className="flex gap-4 rounded-2xl border border-slate-200 bg-concrete/50 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wide text-muted">{c.label}</h2>
                  {c.href ? (
                    <a href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} className="mt-0.5 block text-base font-bold text-ink hover:text-accent">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-base font-bold text-ink">{c.value}</p>
                  )}
                  <p className="mt-0.5 text-xs text-muted">{c.sub}</p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              <iframe
                title="Prodigy Construction Limited office location"
                src={site.mapEmbed}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card lg:p-9">
            <h2 className="text-2xl font-bold text-ink">Send a Project Enquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Fill in the form and our project team will get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}