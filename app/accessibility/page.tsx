import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Accessibility statement for the Prodigy Construction Limited website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" updated="Placeholder — to be reviewed by Prodigy Construction Limited">
      <h2 className="text-lg font-bold text-ink">Our Commitment</h2>
      <p>Prodigy Construction Limited is committed to making its website accessible to the widest possible
        audience, including people with disabilities, in line with WCAG principles.</p>
      <h2 className="text-lg font-bold text-ink">What We've Built In</h2>
      <p>The website is designed with keyboard navigation, visible focus states, sufficient color contrast,
        descriptive alternative text, accessible forms and screen-reader-friendly structure.</p>
      <h2 className="text-lg font-bold text-ink">Feedback</h2>
      <p>If you encounter an accessibility barrier, please contact us via the Contact page and we will address it
        promptly.</p>
    </LegalPage>
  );
}