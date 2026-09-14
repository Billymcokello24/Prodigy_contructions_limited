import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  description: "Website disclaimer for Prodigy Construction Limited.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="Placeholder — to be reviewed by Prodigy Construction Limited">
      <h2 className="text-lg font-bold text-ink">General Information</h2>
      <p>The information on this website is provided for general information purposes only and does not constitute
        professional advice, an offer, or a contractual commitment by Prodigy Construction Limited.</p>
      <h2 className="text-lg font-bold text-ink">Accuracy</h2>
      <p>We aim to keep information accurate and current, but we make no warranties regarding completeness,
        accuracy or suitability for any purpose. Details such as statistics, project figures, certifications and
        team profiles will be updated as verified information becomes available.</p>
      <h2 className="text-lg font-bold text-ink">Third-Party Content</h2>
      <p>Logos, imagery and external references are displayed with authorization where applicable. External links
        are provided for convenience and do not imply endorsement.</p>
      <h2 className="text-lg font-bold text-ink">No Reliance</h2>
      <p>You should obtain professional advice before relying on any content on this website.</p>
    </LegalPage>
  );
}