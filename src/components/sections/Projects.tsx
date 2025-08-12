import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { openProjectModal, closeModal } from "@/store/slices/modalSlice";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { id: "p1", title: "Modular Kitchen", city: "Bangalore", image: p1 },
  { id: "p2", title: "Master Bedroom", city: "Mumbai", image: p2 },
  { id: "p3", title: "Smart Living", city: "Gurugram", image: p3 },
  { id: "p4", title: "Collaborative Office", city: "Noida", image: p4 },
  { id: "p5", title: "Kids Room", city: "Pune", image: p5 },
  { id: "p6", title: "Dining Elegance", city: "Delhi", image: p6 },
];

export default function Projects() {
  const dispatch = useAppDispatch();
  const { isOpen, selectedProject } = useAppSelector((s) => s.modal);

  useEffect(() => {
    // Close on ESC by listening to dialog state if needed (Radix handles this too)
  }, []);

  return (
    <section id="projects" className="py-16 lg:py-24 border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Recent Projects</h2>
        </div>

        <Carousel className="relative">
          <CarouselContent>
            {projects.map((proj) => (
              <CarouselItem key={proj.id} className="md:basis-1/2 lg:basis-1/3">
                <figure
                  className="group relative overflow-hidden rounded-xl border bg-card shadow-sm cursor-pointer"
                  onClick={() => dispatch(openProjectModal(proj))}
                  aria-label={`${proj.title} in ${proj.city}`}
                >
                  <img
                    src={proj.image}
                    alt={`${proj.title} project in ${proj.city}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm bg-gradient-to-t from-background/90 to-transparent">
                    <span className="font-medium">{proj.title}</span>
                    <span className="text-muted-foreground"> • {proj.city}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Dialog open={isOpen} onOpenChange={(open) => !open && dispatch(closeModal())}>
          <DialogContent className="max-w-3xl">
            {selectedProject && (
              <div>
                <DialogTitle className="mb-2">{selectedProject.title} — {selectedProject.city}</DialogTitle>
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} detail view in ${selectedProject.city}`}
                  className="w-full rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
