import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions of use for the Prodigy Construction Limited website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="Placeholder — to be reviewed by Prodigy Construction Limited">
      <h2 className="text-lg font-bold text-ink">Acceptance of Terms</h2>
      <p>By accessing this website you agree to these Terms & Conditions and all applicable laws and regulations.
        If you do not agree, please do not use the website.</p>
      <h2 className="text-lg font-bold text-ink">Website Content</h2>
      <p>The content on this website is provided for general information about Prodigy Construction Limited and its
        services. It does not constitute an offer, quotation or contractual commitment. Professional advice should
        be obtained before relying on website content.</p>
      <h2 className="text-lg font-bold text-ink">Intellectual Property</h2>
      <p>All content, branding, text, imagery and design on this website belong to Prodigy Construction Limited or
        its licensors and may not be reproduced without permission.</p>
      <h2 className="text-lg font-bold text-ink">Liability</h2>
      <p>To the extent permitted by law, Prodigy Construction Limited accepts no liability for loss arising from use
        of this website or reliance on its content.</p>
      <h2 className="text-lg font-bold text-ink">Quotations and Contracts</h2>
      <p>No quotation, project or commercial arrangement is binding unless confirmed in writing by an authorized
        representative of Prodigy Construction Limited.</p>
      <h2 className="text-lg font-bold text-ink">Contact</h2>
      <p>Questions about these terms can be directed to our team via the Contact page.</p>
    </LegalPage>
  );
}