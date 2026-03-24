import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("testimonials")
        .select("id, name, role, quote")
        .order("sort_order");
      if (data) setTestimonials(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || testimonials.length === 0) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const step = () => {
      scrollPos += speed;
      // When we've scrolled past the first set, reset seamlessly
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(step); };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, [testimonials]);

  if (testimonials.length === 0) return null;

  // Duplicate for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden py-2 -my-2">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
      {items.map((t, i) => (
        <div
          key={`${t.id}-${i}`}
          className="min-w-[220px] max-w-[280px] sm:min-w-[320px] sm:max-w-none bg-card border border-border rounded-lg p-4 sm:p-5 shrink-0 transition-colors duration-300 hover:border-primary/30"
        >
          <Quote className="h-4 w-4 text-primary/40 mb-2" />
          <p className="text-sm text-muted-foreground mb-3 italic">"{t.quote}"</p>
          <div>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Testimonials;
