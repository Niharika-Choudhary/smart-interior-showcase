import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  { quote: "Turning my 3BHK into a peaceful home was a dream. Amenify made it effortless and elegant.", name: "Ananya, Bangalore" },
  { quote: "The 3D previews helped us visualize everything. Execution was spot on!", name: "Raj & Nisha, NCR" },
  { quote: "Our office looks stunning and productivity has gone up. Great team!", name: "Mitesh, Mumbai" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Testimonials</h2>
        <Carousel className="relative">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-2/3 lg:basis-1/2">
                <blockquote className="rounded-xl border bg-card p-8 shadow-sm h-full flex flex-col justify-between">
                  <p className="text-lg leading-relaxed">“{t.quote}”</p>
                  <footer className="mt-4 text-sm text-muted-foreground">— {t.name}</footer>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
