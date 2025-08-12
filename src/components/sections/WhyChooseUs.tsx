import { CheckCircle2 } from "lucide-react";

const reasons = [
  "10-Year Warranty",
  "24/7 Support",
  "Best Price Guarantee",
  "Dedicated Project Manager",
  "On-Time Delivery",
  "Quality Materials & Craftsmanship",
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 lg:py-20 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r} className="flex items-start gap-3 rounded-xl border bg-card p-5">
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
              <p>{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
