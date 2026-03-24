import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  whatsapp: z.string().trim().min(10, "Enter a valid WhatsApp number").max(20),
  currentlyDoing: z.string().min(1, "Please select an option"),
});

type FormData = z.infer<typeof formSchema>;

interface EnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollModal = ({ open, onOpenChange }: EnrollModalProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    whatsapp: "",
    currentlyDoing: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    
    const { error } = await supabase.from("enrollments").insert({
      full_name: result.data.fullName,
      email: result.data.email,
      whatsapp: result.data.whatsapp,
      currently_doing: result.data.currentlyDoing,
    });

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      setSubmitting(false);
      return;
    }

    onOpenChange(false);
    navigate("/checkout");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            You're 1 Step Away from Building Real AI Systems
          </DialogTitle>
          <p className="text-sm text-muted-foreground">Reserve your seat in the 14-Day Automation & Vibe Coding Bootcamp — PKR 5,000 only.</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="mt-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            {errors.fullName && <p className="text-xs text-primary mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="whatsapp">WhatsApp Number *</Label>
            <Input
              id="whatsapp"
              placeholder="03XX XXXXXXX"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="mt-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            {errors.whatsapp && <p className="text-xs text-primary mt-1">{errors.whatsapp}</p>}
          </div>
          <div>
            <Label>What Are You Currently Doing? *</Label>
            <Select
              value={formData.currentlyDoing}
              onValueChange={(val) => setFormData({ ...formData, currentlyDoing: val })}
            >
              <SelectTrigger className="mt-1 bg-secondary border-border text-foreground">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="business_owner">Business Owner</SelectItem>
                <SelectItem value="working_professional">Working Professional</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="freelancer">Freelancer</SelectItem>
                <SelectItem value="homemaker">Homemaker</SelectItem>
                <SelectItem value="not_working">Currently Not Working</SelectItem>
              </SelectContent>
            </Select>
            {errors.currentlyDoing && <p className="text-xs text-primary mt-1">{errors.currentlyDoing}</p>}
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground font-bold text-base py-6 hover:bg-primary/90"
          >
            {submitting ? "Processing..." : "Reserve Your Seat — PKR 5,000 →"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollModal;
