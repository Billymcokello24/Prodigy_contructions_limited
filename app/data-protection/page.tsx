import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Data Protection Notice",
  description: "Data protection notice for Prodigy Construction Limited.",
  path: "/data-protection",
});

export default function DataProtectionPage() {
  return (
    <LegalPage title="Data Protection Notice" updated="Placeholder — to be reviewed by Prodigy Construction Limited">
      <h2 className="text-lg font-bold text-ink">Purpose</h2>
      <p>This notice explains how Prodigy Construction Limited processes personal data collected through this
        website, including enquiries, quotations, recruitment applications and document downloads.</p>
      <h2 className="text-lg font-bold text-ink">Lawful Bases</h2>
      <p>We process personal data on the basis of consent (where you provide information to us), the performance of
        a contract (where we prepare quotations or deliver projects) and legitimate interests (such as improving our
        services), as well as to comply with legal obligations.</p>
      <h2 className="text-lg font-bold text-ink">Retention</h2>
      <p>Personal data is retained only as long as necessary for the purposes described or as required by law, then
        securely deleted or anonymized.</p>
      <h2 className="text-lg font-bold text-ink">Your Rights</h2>
      <p>Depending on applicable law (including the Kenya Data Protection Act), you may request access, correction,
        deletion, restriction, portability or withdrawal of consent. Contact us via the Contact page to exercise
        these rights.</p>
    </LegalPage>
  );
}