import PolicyLayout from "@/components/PolicyLayout";

const Contact = () => (
  <PolicyLayout title="Contact Us">
    <p>Have questions about the workshop or need assistance? Reach out to us through any of the channels below.</p>
    <div className="bg-card border border-border rounded-lg p-4 sm:p-5 space-y-3">
      <div>
        <p className="text-foreground font-semibold text-sm">Email</p>
        <p><a href="mailto:vector8labs@gmail.com" className="text-primary hover:underline">vector8labs@gmail.com</a></p>
      </div>
      <div>
        <p className="text-foreground font-semibold text-sm">WhatsApp</p>
        <p><a href="https://wa.me/923396503399" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+92 339 650 3399</a></p>
      </div>
      <div>
        <p className="text-foreground font-semibold text-sm">Response Time</p>
        <p>We typically respond within 24 hours during business days.</p>
      </div>
    </div>
  </PolicyLayout>
);

export default Contact;
