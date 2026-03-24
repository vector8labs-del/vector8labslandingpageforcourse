import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Users } from "lucide-react";

const UrgencyBar = () => {
  const [seatsRemaining, setSeatsRemaining] = useState<number | null>(null);
  const [totalSeats, setTotalSeats] = useState<number | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from("funnel_settings")
        .select("key, value")
        .in("key", ["seats_remaining", "seats_total"]);

      if (data) {
        data.forEach((row) => {
          if (row.key === "seats_remaining") setSeatsRemaining(parseInt(row.value));
          if (row.key === "seats_total") setTotalSeats(parseInt(row.value));
        });
      }
    };
    fetchSettings();
  }, []);

  if (seatsRemaining === null) return null;

  const displayTotal = totalSeats ?? seatsRemaining;

  return (
    <div className="flex items-center justify-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2.5 text-xs sm:text-sm w-full">
      <Users className="h-3.5 w-3.5 text-primary" />
      <span className="text-muted-foreground">
        <span className="font-bold text-primary">{seatsRemaining}</span> / {displayTotal} seats left
      </span>
    </div>
  );
};

export default UrgencyBar;
