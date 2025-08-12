import { Home, Building2, Utensils } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const services = [
  {
    title: "Home Interiors",
    desc: "Bespoke designs tailored to your lifestyle.",
    Icon: Home,
    tip: "Bedrooms, Living, Dining, Kids & More",
  },
  {
    title: "Office Interiors",
    desc: "Productive, elegant workspaces that inspire.",
    Icon: Building2,
    tip: "Cabins, Collaboration, Acoustic Solutions",
  },
  {
    title: "Modular Kitchens",
    desc: "Ergonomic layouts with premium finishes.",
    Icon: Utensils,
    tip: "Accessories, Appliances, Countertops",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10">Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, Icon, tip }) => (
            <Tooltip key={title}>
              <TooltipTrigger asChild>
                <article className="group rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-ring">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-md bg-secondary grid place-items-center">
                      <Icon aria-hidden className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                  </div>
                  <p className="text-muted-foreground">{desc}</p>
                </article>
              </TooltipTrigger>
              <TooltipContent>{tip}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
