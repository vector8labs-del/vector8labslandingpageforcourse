import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Clock } from "lucide-react";

const BatchCountdown = () => {
  const [batchDate, setBatchDate] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("funnel_settings")
        .select("key, value")
        .eq("key", "batch_closing_date")
        .maybeSingle();
      if (data) setBatchDate(data.value);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (!batchDate) return;
    const target = new Date(batchDate).getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [batchDate]);

  if (!batchDate) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 animate-fade-in-up text-xs sm:text-sm">
      <Clock className="h-3 w-3 text-primary" />
      <span className="text-muted-foreground">Batch starting in</span>
      <div className="flex items-center gap-1 font-bold text-primary tabular-nums">
        <span className="bg-primary/15 px-1.5 py-0.5 rounded text-[11px] sm:text-xs">{timeLeft.days}d</span>
        <span className="bg-primary/15 px-1.5 py-0.5 rounded text-[11px] sm:text-xs">{pad(timeLeft.hours)}h</span>
        <span className="bg-primary/15 px-1.5 py-0.5 rounded text-[11px] sm:text-xs">{pad(timeLeft.minutes)}m</span>
        <span className="bg-primary/15 px-1.5 py-0.5 rounded text-[11px] sm:text-xs">{pad(timeLeft.seconds)}s</span>
      </div>
    </div>
  );
};

export default BatchCountdown;
