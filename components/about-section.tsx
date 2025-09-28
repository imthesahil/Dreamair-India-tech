import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const certifications = ["DGCA", "ICAO", "IATA", "ISO 9001:2015", "EASA"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Recognized & Certified</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Dreamair India is recognized as one of India's premier aviation training institutes, setting the
                standard for excellence in pilot and cabin crew education.
              </p>
              <p>
                Our comprehensive programs are DGCA certified and internationally recognized, providing students with
                world-class training right here in India with modern facilities and experienced instructors.
              </p>
              <p>
                With state-of-the-art simulators, modern aircraft fleet, and industry partnerships, we ensure our
                graduates are ready for successful careers in Indian and international aviation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {certifications.map((cert, index) => (
                <Badge
                  key={cert}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <img
              src="/placeholder.svg?key=training-facility"
              alt="Dreamair India Tech Training Facility"
              className="rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
