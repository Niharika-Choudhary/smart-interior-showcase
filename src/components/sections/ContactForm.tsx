import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateField, resetForm } from "@/store/slices/formSlice";
import { toast } from "@/hooks/use-toast";

const budgets = ["3–5 L", "5–10 L", "10–15 L", "15–25 L", "25 L+"] as const;

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((s) => s.form);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Estimate request sent", description: "Our team will contact you shortly." });
    dispatch(resetForm());
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Get Your Free Estimate</h2>
        <form onSubmit={onSubmit} className="grid gap-6 max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => dispatch(updateField({ key: "name", value: e.target.value }))}
                className="h-11 rounded-md border bg-background px-3 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your full name"
                aria-label="Name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => dispatch(updateField({ key: "email", value: e.target.value }))}
                className="h-11 rounded-md border bg-background px-3 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <input
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={(e) => dispatch(updateField({ key: "phone", value: e.target.value }))}
                className="h-11 rounded-md border bg-background px-3 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your phone number"
                aria-label="Phone"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="budget" className="text-sm font-medium">Budget</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={(e) => dispatch(updateField({ key: "budget", value: e.target.value }))}
                className="h-11 rounded-md border bg-background px-3 focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Budget range"
                required
              >
                <option value="" disabled>Select budget</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <Button type="submit" variant="hero" size="lg" aria-label="Submit your estimate request">Submit</Button>
            <Button type="button" variant="outline" onClick={() => dispatch(resetForm())}>Clear</Button>
          </div>
          <p className="text-sm text-muted-foreground">Serving NCR, Bangalore, Mumbai and more across India.</p>
        </form>
      </div>
    </section>
  );
}
