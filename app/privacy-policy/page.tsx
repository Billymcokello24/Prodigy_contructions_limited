import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Prodigy Construction Limited.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="Placeholder — to be reviewed by Prodigy Construction Limited">
      <h2 className="text-lg font-bold text-ink">Overview</h2>
      <p>
        This Privacy Policy explains how Prodigy Construction Limited ("Prodigy", "we", "us") collects, uses,
        protects and shares personal information when you use this website, submit enquiries, request quotations
        or apply for roles with us.
      </p>
      <h2 className="text-lg font-bold text-ink">Information We Collect</h2>
      <p>We may collect: contact details you provide (name, organization, email, phone); project and quotation
        information you submit; recruitment information; technical data about your visit (such as pages viewed and
        device information); and communications you send us.</p>
      <h2 className="text-lg font-bold text-ink">How We Use Your Information</h2>
      <p>We use your information to respond to enquiries, prepare quotations, deliver projects, process employment
        applications, improve our website, meet legal obligations, and protect our rights.</p>
      <h2 className="text-lg font-bold text-ink">Sharing</h2>
      <p>We do not sell personal information. We share it only where necessary to provide our services, where
        legally required, or with your consent.</p>
      <h2 className="text-lg font-bold text-ink">Security</h2>
      <p>We apply reasonable technical and organizational measures to protect personal information. No method of
        transmission over the internet is completely secure.</p>
      <h2 className="text-lg font-bold text-ink">Your Rights</h2>
      <p>Subject to applicable law, you may request access to, correction of, or deletion of your personal
        information, and may object to or restrict certain processing.</p>
      <h2 className="text-lg font-bold text-ink">Contact</h2>
      <p>For privacy enquiries, contact our team via the Contact page. This is a placeholder policy that must be
        reviewed and finalized by the company before publication.</p>
    </LegalPage>
  );
}