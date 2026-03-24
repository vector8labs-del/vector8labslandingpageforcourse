import { Link } from "react-router-dom";
import logo from "@/assets/logo-white.png";
import { ReactNode } from "react";

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
}

const PolicyLayout = ({ title, children }: PolicyLayoutProps) => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="py-3 sm:py-4 px-4">
      <div className="container max-w-3xl mx-auto">
        <Link to="/"><img src={logo} alt="Vector 8 Labs" className="h-14 sm:h-16" /></Link>
      </div>
    </header>
    <main className="container max-w-3xl mx-auto py-8 sm:py-12 px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">{title}</h1>
      <div className="space-y-3 sm:space-y-4 text-muted-foreground text-xs sm:text-sm leading-relaxed">
        {children}
      </div>
    </main>
    <footer className="py-4 sm:py-6 px-4 border-t border-border">
      <p className="text-center text-[10px] sm:text-xs text-muted-foreground">© 2026 Vector 8 Labs. All rights reserved.</p>
    </footer>
  </div>
);

export default PolicyLayout;
