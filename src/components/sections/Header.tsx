import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2">Skip to content</a>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-tr from-primary to-primary/80 shadow" aria-hidden />
          <span className="font-extrabold tracking-tight">Amenify Interiors</span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="story-link text-sm" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="lg" aria-label="Get a Free Estimate">
            <a href="#contact">Get a Free Estimate</a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <nav className="px-4 py-3 grid gap-3" aria-label="Mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full" variant="hero" onClick={() => setOpen(false)}>
              <a href="#contact">Get a Free Estimate</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
