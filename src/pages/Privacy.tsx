import PolicyLayout from "@/components/PolicyLayout";

const Privacy = () => (
  <PolicyLayout title="Privacy Policy">
    <p>Vector 8 Labs respects your privacy and is committed to protecting the personal information you share with us.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Information We Collect</h2>
    <p>When you enroll in a workshop, we collect your full name, email address, WhatsApp number, and current professional status. This information is collected solely through our enrollment form.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">How We Use Your Information</h2>
    <p>Your data is used exclusively for workshop communication, including enrollment confirmation, session reminders, and delivery of workshop materials. We do not use your data for unrelated marketing purposes.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Data Sharing</h2>
    <p>We do not sell, share, or distribute your personal information to any third parties. Your data remains strictly with Vector 8 Labs.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Data Security</h2>
    <p>We take reasonable measures to protect your information from unauthorized access or disclosure.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Contact</h2>
    <p>If you have questions about your data, please reach out through our Contact page.</p>
  </PolicyLayout>
);

export default Privacy;
