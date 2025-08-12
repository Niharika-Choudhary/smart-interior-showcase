import heroImage from "@/assets/hero-interior.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight" id="main">
            Luxury Smart Interiors Reimagined
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            Elevate your spaces with AI-driven designs, immersive 3D/VR previews, and a decade of assurance. Crafted by Amenify Interiors.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">Get a Free Estimate</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-2 pt-4">
            <li>• 10-Year Warranty</li>
            <li>• Transparent EMI Plans</li>
            <li>• In-House Factory</li>
            <li>• 24/7 Support</li>
          </ul>
        </div>
        <div className="relative group">
          <img
            src={heroImage}
            alt="Modern luxury living room interior with smart lighting and premium finishes"
            className="rounded-xl shadow-xl w-full object-cover aspect-[16/9] hover-scale"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-background/10 to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  );
}
