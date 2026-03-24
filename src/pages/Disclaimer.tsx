import PolicyLayout from "@/components/PolicyLayout";

const Disclaimer = () => (
  <PolicyLayout title="Disclaimer">
    <p>Vector 8 Labs provides educational workshops focused on teaching practical automation skills. Please read this disclaimer carefully before enrolling.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">No Income Guarantee</h2>
    <p>Vector 8 Labs does not guarantee any specific income, freelance success, job placement, or business growth as a result of attending our workshops. All results depend entirely on individual effort, application, market conditions, and other factors beyond our control.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Educational Purpose</h2>
    <p>Our workshops are designed to teach skills and provide frameworks. The application of these skills and the outcomes achieved are the sole responsibility of the participant.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">No Professional Advice</h2>
    <p>Content presented in our workshops does not constitute professional business, financial, or career advice. Participants should consult appropriate professionals for specific guidance.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Third-Party Tools & Software</h2>
    <p>Any third-party tools or platforms referenced during workshops are subject to their own terms, pricing, and availability. Vector 8 Labs is not responsible for changes to third-party services.</p>
    <p>Vector 8 Labs does not provide any software or tool licenses. Students are responsible for obtaining and setting up all software and tools taught during the course on their own.</p>
  </PolicyLayout>
);

export default Disclaimer;
