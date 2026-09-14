import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How Prodigy Construction Limited uses cookies on its website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="Placeholder — to be reviewed by Prodigy Construction Limited">
      <h2 className="text-lg font-bold text-ink">What Are Cookies?</h2>
      <p>Cookies are small text files placed on your device when you visit a website. They help the site remember
        your preferences and understand how it is used.</p>
      <h2 className="text-lg font-bold text-ink">Cookies We Use</h2>
      <p>We intend to use essential cookies (required for site function), analytics cookies (to understand site
        usage — subject to your consent) and, where configured, advertising/remarketing cookies from providers such
        as Google and Meta.</p>
      <h2 className="text-lg font-bold text-ink">Consent</h2>
      <p>A cookie consent banner allows you to accept or decline non-essential cookies. Essential cookies do not
        require consent. You can change your preferences at any time.</p>
      <h2 className="text-lg font-bold text-ink">Managing Cookies</h2>
      <p>Most browsers let you block or delete cookies through browser settings. Blocking cookies may affect how the
        website functions.</p>
    </LegalPage>
  );
}