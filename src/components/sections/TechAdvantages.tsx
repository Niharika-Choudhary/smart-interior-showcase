import { Cpu, MonitorPlay, Building2, ShieldCheck, Wallet } from "lucide-react";

const features = [
  { title: "AI-Driven Designs", Icon: Cpu, desc: "Personalized concepts with data-backed insights." },
  { title: "3D/VR Preview", Icon: MonitorPlay, desc: "Walk-through your space before it’s built." },
  { title: "In-House Factory", Icon: Building2, desc: "Precision manufacturing and faster timelines." },
  { title: "10-Year Warranty", Icon: ShieldCheck, desc: "Peace of mind with long-term assurance." },
  { title: "Transparent EMI Plans", Icon: Wallet, desc: "Budget-friendly payment options." },
];

export default function TechAdvantages() {
  return (
    <section id="tech" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10">How It Works & Tech Advantages</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ title, Icon, desc }) => (
            <div key={title} className="rounded-xl border bg-card p-5 shadow-sm animate-fade-in">
              <div className="h-10 w-10 rounded-md bg-secondary grid place-items-center mb-3">
                <Icon aria-hidden className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
