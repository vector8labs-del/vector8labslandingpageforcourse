import PolicyLayout from "@/components/PolicyLayout";

const Terms = () => (
  <PolicyLayout title="Workshop Terms">
    <p>By enrolling in a Vector 8 Labs workshop, you agree to the following terms:</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Scheduling</h2>
    <p>Batch start dates may vary based on enrollment volume or operational factors. Vector 8 Labs reserves the right to adjust the workshop schedule as needed.</p>
    <p>Individual sessions may be rescheduled due to technical difficulties, emergencies, or other unforeseen circumstances. Participants will be notified promptly of any changes.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Participation</h2>
    <p>Workshop access is granted to the registered individual only and is non-transferable unless approved by management.</p>
    <p>Participants are expected to maintain professional conduct during all live sessions.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Intellectual Property</h2>
    <p>All workshop content, templates, and materials are the property of Vector 8 Labs and are provided for personal use only. Redistribution or resale is prohibited.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Modifications</h2>
    <p>Vector 8 Labs reserves the right to update these terms at any time. Continued participation constitutes acceptance of any modifications.</p>
  </PolicyLayout>
);

export default Terms;
