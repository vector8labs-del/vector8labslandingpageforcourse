
-- Settings table for urgency controls (countdown, seats)
CREATE TABLE public.funnel_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.funnel_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read settings (public landing page)
CREATE POLICY "Allow public read" ON public.funnel_settings
  FOR SELECT USING (true);

-- Insert default values
INSERT INTO public.funnel_settings (key, value) VALUES
  ('countdown_end', '2025-07-30T23:59:59Z'),
  ('seats_total', '50'),
  ('seats_remaining', '23');

-- Testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  quote TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON public.testimonials
  FOR SELECT USING (true);

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role, quote, sort_order) VALUES
  ('Ahmed Khan', 'Business Owner', 'This workshop completely changed how I approach AI. Within a week, I automated 3 hours of daily work.', 1),
  ('Sara Malik', 'Freelancer', 'I was skeptical at first, but the hands-on approach made everything click. Worth every rupee!', 2),
  ('Usman Ali', 'Student', 'As a student with zero tech background, I was amazed at how accessible everything was. Highly recommend!', 3),
  ('Fatima Noor', 'Working Professional', 'The practical tools I learned here gave me an edge over my colleagues. My manager noticed immediately.', 4);
