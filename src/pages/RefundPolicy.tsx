import PolicyLayout from "@/components/PolicyLayout";

const RefundPolicy = () => (
  <PolicyLayout title="Refund Policy">
    <p>Please review our refund policy before making your payment.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Refund Eligibility</h2>
    <p>If you wish to request a refund, you may do so <strong className="text-foreground">before the end of the first session</strong>. To initiate a refund, contact us via one of the following channels:</p>
    <div className="bg-card border border-border rounded-lg p-4 sm:p-5 space-y-2">
      <p><span className="text-foreground font-semibold">WhatsApp:</span> <a href="https://wa.me/923396503399" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+92 339 650 3399</a></p>
      <p><span className="text-foreground font-semibold">Email:</span> <a href="mailto:vector8labs@gmail.com" className="text-primary hover:underline">vector8labs@gmail.com</a></p>
    </div>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">No Refunds After First Session</h2>
    <p>Once the first session has ended, no refund requests will be accepted. By completing payment, you acknowledge and accept this policy.</p>
    <h2 className="text-foreground font-semibold text-sm sm:text-base mt-4 sm:mt-6">Cancellation by Vector 8 Labs</h2>
    <p>In the unlikely event that Vector 8 Labs cancels a workshop batch, enrolled participants will receive a full refund or the option to transfer to a future batch.</p>
  </PolicyLayout>
);

export default RefundPolicy;
