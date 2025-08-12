import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block h-6 w-6 rounded bg-gradient-to-tr from-primary to-primary/80" aria-hidden />
            <span className="font-semibold">Amenify Interiors</span>
          </div>
          <p className="text-sm text-muted-foreground">Serving NCR, Bangalore, Mumbai and more. Amenify India.</p>
        </div>
        <nav className="justify-self-center flex gap-4" aria-label="Quick links">
          <a href="#services" className="text-sm story-link">Services</a>
          <a href="#projects" className="text-sm story-link">Projects</a>
          <a href="#contact" className="text-sm story-link">Contact</a>
        </nav>
        <div className="justify-self-end flex gap-3" aria-label="Social links">
          <a href="#" aria-label="Facebook" className="hover-scale" title="Facebook"><Facebook /></a>
          <a href="#" aria-label="Instagram" className="hover-scale" title="Instagram"><Instagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover-scale" title="LinkedIn"><Linkedin /></a>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-6">© {new Date().getFullYear()} Amenify Interiors. All rights reserved.</div>
    </footer>
  );
}
