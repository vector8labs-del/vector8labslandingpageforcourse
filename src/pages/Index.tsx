import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-white.png";
import workflowExample from "@/assets/workflow-example.jpg";
import { Button } from "@/components/ui/button";
import EnrollModal from "@/components/EnrollModal";
import UrgencyBar from "@/components/UrgencyBar";
import BatchCountdown from "@/components/BatchCountdown";
import Testimonials from "@/components/Testimonials";
import {
  XCircle, Gift, Users, Briefcase, Zap, Search, GitBranch, Settings, Plug, Rocket,
  Bot, Cpu, Workflow, CircuitBoard, MessageCircle, CheckCircle, Target, TrendingUp,
  DollarSign, Globe, Sparkles, FileText, Headphones, Code2, Laptop
} from "lucide-react";

/* ─── Shared UI Primitives ─── */

const CTAButton = ({ onClick, label }: { onClick: () => void; label?: string }) => (
  <div className="flex flex-col items-center gap-2">
    <Button
      onClick={onClick}
      className="bg-primary text-primary-foreground font-bold text-sm sm:text-base md:text-lg px-6 sm:px-10 py-5 sm:py-7 hover:bg-[hsl(211,76%,43%)] rounded-lg w-full sm:w-auto shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
    >
      {label || "Reserve Your Seat — PKR 5,000"}
    </Button>
    <p className="text-xs sm:text-sm text-muted-foreground">Secure registration • Confirmation via WhatsApp</p>
  </div>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 ${className}`}>{children}</h2>
);

const FloatingNode = ({ className }: { className?: string }) => (
  <div className={`absolute w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/20 sm:bg-primary/30 animate-node-pulse pointer-events-none hidden sm:block ${className}`} />
);

const ConnectionLine = ({ className }: { className?: string }) => (
  <div className={`absolute h-px bg-gradient-to-r from-transparent via-primary/15 sm:via-primary/20 to-transparent pointer-events-none hidden sm:block ${className}`}>
    <div className="w-6 sm:w-8 h-full bg-primary/30 sm:bg-primary/40 animate-data-flow" />
  </div>
);

const CircuitPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10h30v0M40 10v30M40 40h30M70 40v30M70 70h-30M40 70v-20" stroke="hsl(211 76% 51%)" strokeWidth="1" fill="none" />
          <circle cx="10" cy="10" r="2" fill="hsl(211 76% 51%)" />
          <circle cx="40" cy="40" r="2" fill="hsl(211 76% 51%)" />
          <circle cx="70" cy="70" r="2" fill="hsl(211 76% 51%)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
);

const GlowOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl pointer-events-none animate-pulse-glow ${className}`} />
);

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, className: visible ? "animate-fade-in-up" : "opacity-0" };
};

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const reveal = useScrollReveal();
  return (
    <div ref={reveal.ref} className={`${reveal.className} ${className}`}>
      {children}
    </div>
  );
};


/* ─── Main Page ─── */

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 py-3 sm:py-4 px-4">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Vector 8 Labs" className="h-14 sm:h-16 md:h-20" />
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          1) HERO SECTION
          ═══════════════════════════════════════════ */}
      
      <section className="relative min-h-[100dvh] flex items-center justify-center px-5 pt-20 pb-8 sm:pt-0 sm:pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] sm:opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(hsl(211 76% 51%) 1px, transparent 1px), linear-gradient(90deg, hsl(211 76% 51%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <CircuitPattern />
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[250px] sm:h-[400px] bg-primary/[0.06]" />
        <FloatingNode className="top-[15%] left-[10%] animate-float" />
        <FloatingNode className="top-[25%] right-[15%] animate-float-slow" />
        <FloatingNode className="bottom-[20%] left-[20%] animate-float-slow" />
        <ConnectionLine className="top-[20%] left-[10%] w-[200px] rotate-12" />
        <ConnectionLine className="bottom-[25%] right-[10%] w-[180px] -rotate-6" />

        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <BatchCountdown />

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full mb-5 sm:mb-6 border border-primary/20 animate-fade-in-up">
            <Bot className="h-3.5 w-3.5" />
            LIVE BOOTCAMP — LIMITED SEATS
          </div>

          <h1 className="text-[26px] leading-[1.25] sm:text-4xl md:text-5xl font-extrabold sm:leading-tight mb-4 sm:mb-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Build <span className="text-primary">Automations, AI Agents & MVPs</span> — From Zero in 14 Days
          </h1>

          <p className="text-[15px] leading-relaxed sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Master <span className="text-foreground font-semibold">n8n Automation</span> + <span className="text-foreground font-semibold">Lovable Vibe Coding</span> — no coding experience needed. Walk away with real projects, templates & a sellable skill.
          </p>

          {/* Price badge */}
          <div className="bg-card border border-primary/30 inline-flex items-baseline gap-1 rounded-xl px-5 sm:px-8 py-3 sm:py-4 mb-5 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-muted-foreground text-[11px] sm:text-sm">Bootcamp Fee:</span>
            <span className="sm:text-3xl font-extrabold text-foreground text-base">PKR 5,000</span>
            <span className="text-muted-foreground text-[11px] sm:text-sm">(One-Time)</span>
          </div>

          <div className="mb-4 sm:mb-5 animate-fade-in-up" style={{ animationDelay: '0.32s' }}>
            <UrgencyBar />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <CTAButton onClick={() => setModalOpen(true)} />
          </div>

          {/* Trust bullets - hidden on mobile to reduce clutter, shown on desktop */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-6 mt-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              "Beginner-friendly execution",
              "Build 5+ real systems",
              "Lifetime recordings & templates",
            ].map((bullet, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2) WHY THIS PROGRAM EXISTS — Trust/Positioning
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <GlowOrb className="top-[30%] right-[5%] w-[200px] h-[200px] bg-primary/[0.03]" />
        <FloatingNode className="top-[20%] right-[8%] animate-float" />
        <ConnectionLine className="top-[40%] left-[5%] w-[140px] rotate-6" />
        <div className="container max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>Why This Bootcamp Exists</SectionTitle>
            <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-base text-muted-foreground leading-relaxed">
              <p>Automation and AI are the <span className="text-foreground font-semibold">fastest path to earning</span> for freelancers and businesses in Pakistan.</p>
              <p>But most courses focus on <span className="text-foreground font-semibold">theory and outdated tools</span>.</p>
              <p className="text-foreground font-semibold text-base sm:text-lg">This bootcamp is different.</p>
              <p>You'll build real systems — the kind businesses actually pay for.</p>
            </div>
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { icon: Target, text: "Implementation-focused" },
                { icon: DollarSign, text: "Skills clients pay for" },
                { icon: Globe, text: "Local & international clients" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-card border border-border rounded-lg p-3 text-[13px] sm:text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3) WHO THIS IS FOR
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <GlowOrb className="top-[30%] right-[5%] w-[200px] h-[200px] bg-primary/[0.03]" />
        <FloatingNode className="top-[10%] right-[5%] animate-float" />
        <ConnectionLine className="bottom-[30%] right-[10%] w-[130px] -rotate-12" />
        <div className="container max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>Yeh Bootcamp Kis Ke Liye Hai?</SectionTitle>
            <p className="text-[14px] sm:text-base text-muted-foreground mb-5 sm:mb-8 leading-relaxed">
              Automation + AI seekh kar <span className="text-foreground font-semibold">earning start karna chahte hain</span> — yeh aapke liye hai.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-4">
            {[
              { icon: Zap, label: "Freelancers", desc: "International clients se automation kaam lo" },
              { icon: Users, label: "Students", desc: "Graduate hone se pehle income start karo" },
              { icon: Briefcase, label: "Job Holders", desc: "Side income ya job mein value badhao" },
              { icon: TrendingUp, label: "Business Owners", desc: "Operations automate karo, time bachao" },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-card border border-border rounded-lg p-3.5 sm:p-5 h-full transition-colors duration-300 hover:border-primary/30">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mb-2" />
                  <p className="font-semibold mb-1 text-[13px] sm:text-base">{item.label}</p>
                  <p className="text-[12px] sm:text-sm text-muted-foreground leading-snug">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4) WHAT YOU WILL BUILD
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <ConnectionLine className="top-[30%] right-[5%] w-[120px] rotate-45" />
        <ConnectionLine className="bottom-[20%] left-[10%] w-[150px] -rotate-30" />
        <FloatingNode className="top-[50%] left-[5%] animate-float" />
        <FloatingNode className="top-[15%] right-[12%] animate-float-slow" />
        <GlowOrb className="bottom-[20%] left-[20%] w-[250px] h-[250px] bg-primary/[0.03]" />
        <div className="container max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>What You Will Actually Build</SectionTitle>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">5 complete, real-world automation systems — built step by step during live sessions.</p>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {[
                {
                  title: "Lead-to-CRM Automation System",
                  summary: "Automatically capture leads → store them in a structured CRM → send follow-up messages → assign to the right person.",
                  detail: "You'll remove manual lead tracking and create a system businesses actually pay for.",
                },
                {
                  title: "Client Onboarding Workflow",
                  summary: "Automate onboarding steps: collect client details, track payments, create records, and notify your team automatically.",
                  detail: "No more scattered WhatsApp messages or manual tracking. Clean, professional onboarding.",
                },
                {
                  title: "WhatsApp CRM Structure",
                  summary: "Build a structured communication tracking system using WhatsApp workflows.",
                  detail: "Organize conversations, leads, and support requests properly — a service Pakistani businesses desperately need.",
                },
                {
                  title: "Internal Operations Tracker",
                  summary: "Build a simple dashboard to track tasks, reporting, and process flow using Lovable vibe coding.",
                  detail: "Turn messy business operations into clean, structured workflows with a real web interface.",
                },
                {
                  title: "Reusable Automation Blueprint",
                  summary: "Create a framework you can reuse for future projects, clients, or your own business.",
                  detail: "Stop starting from scratch. Build once, sell many times to different clients.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-4 sm:px-5 transition-colors duration-300 hover:border-primary/30 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="py-4 sm:py-5 hover:no-underline gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-left">
                      <span className="bg-primary text-primary-foreground text-xs sm:text-sm font-bold w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-sm sm:text-base">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 sm:pb-5 pl-9 sm:pl-11 space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <p>{item.summary}</p>
                    <p className="text-foreground/70 font-medium">{item.detail}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5) HOW THE METHOD WORKS — 5 Steps
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <FloatingNode className="top-[15%] left-[6%] animate-float" />
        <ConnectionLine className="bottom-[25%] right-[5%] w-[140px] rotate-12" />
        <GlowOrb className="top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[200px] bg-primary/[0.03]" />
        <div className="container max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>How We Build Systems</SectionTitle>
            <p className="text-[14px] sm:text-base text-muted-foreground mb-6 sm:mb-10 leading-relaxed">
              A structured approach — not random automation hacks.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
              {[
                { icon: Search, step: "01", title: "Find Bottlenecks", desc: "Where is time being wasted?" },
                { icon: GitBranch, step: "02", title: "Map the Flow", desc: "Structure before building." },
                { icon: Settings, step: "03", title: "Design Logic", desc: "Choose tools & integrations." },
                { icon: Plug, step: "04", title: "Build & Connect", desc: "Implement step by step." },
                { icon: Rocket, step: "05", title: "Test & Deploy", desc: "Launch for real use." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center transition-colors duration-300 hover:border-primary/30">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto mb-1.5 sm:mb-2" />
                  <p className="text-[10px] text-primary font-bold mb-0.5 sm:mb-1">{item.step}</p>
                  <p className="font-semibold text-[12px] sm:text-sm mb-1">{item.title}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6) OUTCOMES — How Students Can Use This Skill
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <GlowOrb className="bottom-[20%] right-[10%] w-[250px] h-[250px] bg-primary/[0.03]" />
        <FloatingNode className="top-[15%] left-[8%] animate-float-slow" />
        <FloatingNode className="bottom-[20%] right-[12%] animate-float" />
        <ConnectionLine className="top-[35%] right-[8%] w-[160px] -rotate-15" />
        <div className="container max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>What You Can Do After This Bootcamp</SectionTitle>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Real outcomes, not just certificates. Here's how past students use these skills:
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: DollarSign,
                title: "Freelance Internationally",
                desc: "Offer n8n automation + Lovable app building services on Upwork, Fiverr, and LinkedIn. Charge $200-$2,000+ per project.",
              },
              {
                icon: TrendingUp,
                title: "Automate Your Business",
                desc: "Remove manual work from your own business — CRM, onboarding, follow-ups, reporting — all automated.",
              },
              {
                icon: Briefcase,
                title: "Offer Services Locally",
                desc: "Help Pakistani businesses automate their operations. Every business needs this — few people can deliver it.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-card border border-border rounded-lg p-5 sm:p-6 h-full transition-colors duration-300 hover:border-primary/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold mb-2 text-sm sm:text-base">{item.title}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7) BONUSES — Value Stack
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <ConnectionLine className="bottom-[20%] left-[5%] w-[160px] -rotate-12" />
        <ConnectionLine className="top-[15%] right-[8%] w-[130px] rotate-25" />
        <FloatingNode className="top-[15%] right-[8%] animate-float" />
        <FloatingNode className="bottom-[25%] left-[12%] animate-float-slow" />
        <GlowOrb className="bottom-[30%] right-[10%] w-[250px] h-[250px] bg-primary/[0.03]" />
        <div className="container max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>Everything You Get in This Bootcamp</SectionTitle>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              A complete implementation-focused program — not just live sessions.
            </p>
          </AnimatedSection>
          <div className="space-y-3 sm:space-y-4">
            {[
              { icon: Sparkles, title: "Live Bootcamp Access (Multiple Sessions)", desc: "Step-by-step implementation sessions covering n8n + Lovable vibe coding.", value: null },
              { icon: Workflow, title: "10+ Ready-Made Automation Templates", desc: "Pre-built n8n workflows you can study, modify, and reuse for clients.", value: "PKR 8,000" },
              { icon: Bot, title: "AI Prompt Pack for Automation", desc: "Tested prompts for Lovable vibe coding and AI-assisted workflow building.", value: "PKR 3,000" },
              { icon: Gift, title: "Lifetime Recording Access", desc: "Rewatch all sessions anytime and revise at your own pace.", value: "PKR 5,000" },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="flex items-start gap-3 sm:gap-4 bg-card border border-border rounded-lg p-4 sm:p-5 transition-colors duration-300 hover:border-primary/30">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-sm sm:text-base">{item.title}</p>
                      {item.value && (
                        <span className="text-xs text-muted-foreground whitespace-nowrap">Value: {item.value}</span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="mt-6 sm:mt-8 bg-card border border-primary/20 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Total Value: <span className="line-through">PKR 16,000+</span></p>
              <p className="text-lg sm:text-xl font-extrabold text-foreground">Today: PKR 5,000 <span className="text-sm font-normal text-muted-foreground">(One-Time Payment)</span></p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8) TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <FloatingNode className="top-[15%] left-[10%] animate-float" />
        <FloatingNode className="bottom-[10%] right-[8%] animate-float-slow" />
        <ConnectionLine className="top-[30%] right-[5%] w-[120px] -rotate-15" />
        <div className="container max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>Results From Our Students</SectionTitle>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Real people. Real results. No fake screenshots.
            </p>
          </AnimatedSection>

          {/* Static testimonial cards */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Ahmed R.",
                  role: "Freelancer — Karachi",
                  quote: "I got my first automation client within 2 weeks of completing the bootcamp. Charged PKR 40,000 for a simple n8n workflow. The investment paid for itself 8x.",
                },
                {
                  name: "Fatima S.",
                  role: "Business Owner — Lahore",
                  quote: "I automated my entire client onboarding process. What used to take 3 hours now takes 5 minutes. My team can't believe the difference.",
                },
                {
                  name: "Hassan M.",
                  role: "University Student — Islamabad",
                  quote: "I started offering Lovable app building + n8n automation on Fiverr while still in university. Already made $350 in my first month.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 transition-colors duration-300 hover:border-primary/30">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-primary text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{t.quote}"</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* DB-driven testimonials carousel */}
          <AnimatedSection className="mt-6">
            <Testimonials />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9) FAQ
          ═══════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <FloatingNode className="top-[10%] right-[6%] animate-float-slow" />
        <FloatingNode className="bottom-[15%] left-[10%] animate-float" />
        <ConnectionLine className="top-[40%] left-[5%] w-[140px] rotate-10" />
        <div className="container max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Kya mujhe coding aani chahiye?", a: "Bilkul nahi. Yeh bootcamp beginners ke liye hai. n8n visual workflows use karta hai aur Lovable mein aap English mein baat karke apps banate hain — koi coding required nahi." },
                { q: "Is this live or pre-recorded?", a: "The sessions are live and interactive. You'll also get lifetime access to all recordings so you can revisit anytime." },
                { q: "What tools will we use?", a: "Primarily n8n for automation workflows and Lovable for vibe coding (building web apps with AI). Both are free to start with. Please note: Vector 8 Labs does not provide any software or tool licenses — students are responsible for obtaining and setting up all tools on their own." },
                { q: "What if I miss a live session?", a: "Full recording access is included. You can watch and implement at your own pace." },
                { q: "Payment kaise hogi?", a: "Bank transfer ya online payment. Payment confirm hone ke baad WhatsApp pe 24 hours mein access details mil jayein gi." },
                { q: "Kya support milega sessions ke baad?", a: "Haan, aapko lifetime recording access milega aur sessions ke dauran aap apne questions pooch sakte hain." },
                { q: "Is there a refund policy?", a: "Yes. You can request a refund before the end of the first session by contacting us on WhatsApp (+92 339 650 3399) or email (vector8labs@gmail.com). No refunds are eligible after the first session has ended." },
                { q: "Can I transfer my seat to someone else?", a: "Workshop access is granted to the registered individual only and is non-transferable unless approved by management." },
                { q: "Can the batch schedule change?", a: "Yes, batch start dates may vary based on enrollment volume or operational factors. Individual sessions may also be rescheduled due to technical difficulties or emergencies. You'll be notified promptly of any changes." },
                { q: "Is my personal data safe?", a: "Absolutely. We only collect your name, email, WhatsApp number, and professional status for workshop communication. We do not sell or share your data with any third parties." },
                { q: "Do you guarantee income or job placement?", a: "No. Vector 8 Labs does not guarantee any specific income, freelance success, or job placement. All results depend on individual effort, application, and market conditions." },
                { q: "How can I contact you?", a: "You can reach us on WhatsApp at +92 339 650 3399 or email vector8labs@gmail.com for any queries." },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-4 sm:px-5 transition-colors duration-300 hover:border-primary/30 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="py-4 sm:py-5 hover:no-underline text-left text-sm sm:text-base font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 sm:pb-5 text-xs sm:text-sm text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10) FINAL CTA
          ═══════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 px-4 border-t border-border overflow-hidden">
        <CircuitPattern />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[200px] sm:h-[300px] bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" />
        <GlowOrb className="top-[20%] right-[15%] w-[200px] h-[200px] bg-primary/[0.04]" />
        <FloatingNode className="top-[20%] left-[10%] animate-float" />
        <FloatingNode className="bottom-[20%] right-[10%] animate-float-slow" />
        <ConnectionLine className="top-[30%] left-[5%] w-[160px] rotate-15" />
        <ConnectionLine className="bottom-[30%] right-[5%] w-[140px] -rotate-10" />
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <SectionTitle className="text-center">Stop Watching Tutorials. Start Building & Earning.</SectionTitle>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
              Join the n8n Automation + Lovable Vibe Coding Bootcamp and learn skills that Pakistani businesses and international clients are paying for right now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-6 sm:mb-8">
              {[
                "Live, hands-on implementation",
                "Build 5+ real systems",
                "Lifetime recordings + templates",
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-primary/30 inline-block rounded-lg px-5 sm:px-8 py-3 sm:py-4 mb-2">
              <span className="text-2xl sm:text-3xl font-extrabold">PKR 5,000</span>
              <span className="text-muted-foreground text-xs sm:text-sm ml-2">— One-Time Payment</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <CTAButton onClick={() => setModalOpen(true)} />
            </div>

            <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-muted-foreground/70 italic">
              Built for serious beginners who want execution, not theory.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-border">
        <div className="container max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs text-muted-foreground">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <p className="text-center text-[10px] sm:text-xs text-muted-foreground">© 2026 Vector 8 Labs. All rights reserved.</p>
        </div>
      </footer>

      <EnrollModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
