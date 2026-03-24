import { Link } from "react-router-dom";
import logo from "@/assets/logo-white.png";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-lg mx-auto py-8 sm:py-12 px-4">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Link to="/"><img src={logo} alt="Vector 8 Labs" className="h-14 sm:h-16" /></Link>
        </div>

        {/* Value Summary */}
        <div className="bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8 mb-4">
          <h1 className="text-base sm:text-lg font-bold mb-4">You Are Enrolling In:</h1>
          <p className="text-sm text-primary font-semibold mb-3">You're 1 Step Away from Building Real AI Systems</p>
          <div className="space-y-2 mb-4">
            {[
              "Live Bootcamp Sessions (n8n + Lovable)",
              "10+ Automation Templates",
              "AI Prompt Pack",
              "Lifetime Recording Access",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-xs sm:text-sm text-muted-foreground mb-1">
              Total Value: <span className="line-through">PKR 16,000+</span>
            </p>
            <p className="text-xl sm:text-2xl font-extrabold text-foreground">
              Today: PKR 5,000 <span className="text-sm font-normal text-muted-foreground">(One-Time)</span>
            </p>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8 mb-4">
          <h2 className="text-base sm:text-lg font-bold mb-2">Secure Manual Bank Transfer</h2>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">Follow these steps to confirm your seat:</p>

          <div className="space-y-3 sm:space-y-4">
            {[
              "Send PKR 5,000 to the bank account below.",
              "Take a screenshot of the payment confirmation.",
              <>Send the screenshot on WhatsApp <a href="https://wa.me/923396503399" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/923396503399", "_blank"); }} className="text-primary underline font-semibold">+92 339 650 3399</a>.</>,
              "Receive access details within 24 hours.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-lg p-3 sm:p-4 mt-5">
            <p className="font-semibold mb-2 text-sm">Bank Account Details</p>
            <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
              <p>Bank: <span className="text-foreground">Meezan Bank</span></p>
              <p>Account Title: <span className="text-foreground">Muhammad Umar</span></p>
              <p>Account Number: <span className="text-foreground">01410112564316</span></p>
              <p>IBAN: <span className="text-foreground">PK98 MEZN 0001 4101 1256 4316</span></p>
            </div>
          </div>
        </div>

        {/* Trust Reinforcement */}
        <div className="bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8 mb-4">
          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
            <p>Your seat is confirmed only after payment verification.</p>
            <p>Batch size is limited to maintain quality interaction.</p>
            <p>For any questions before payment, contact us on WhatsApp.</p>
          </div>
          <div className="mt-4">
            <a href="https://wa.me/923396503399" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/923396503399", "_blank"); }}>
              <Button variant="outline" className="gap-2 text-sm">
                <MessageCircle className="h-4 w-4" />
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Final Reassurance */}
        <p className="text-center text-[11px] sm:text-xs text-muted-foreground/70 italic mt-6 sm:mt-8">
          This is a structured, implementation-focused bootcamp designed for serious beginners.
        </p>

        <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-4">© 2026 Vector 8 Labs. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Checkout;
