import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Award } from "lucide-react"

export function LocationsSection() {
  const locations = [
    {
      name: "Delhi",
      cert: "DGCA Approved",
      flag: "🏛️",
      description: "Main training facility with advanced simulators",
    },
    {
      name: "Mumbai",
      cert: "DGCA Certified",
      flag: "🏙️",
      description: "Commercial pilot training center",
    },
    {
      name: "Bangalore",
      cert: "DGCA Approved",
      flag: "🌆",
      description: "Technical training and maintenance programs",
    },
    {
      name: "Chennai",
      cert: "DGCA Certified",
      flag: "🏢",
      description: "Cabin crew and ground staff training",
    },
  ]

  return (
    <section id="locations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Training Centers Across India</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art training facilities in major Indian cities, all DGCA certified and approved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 text-center border-border/50 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{location.flag}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  {location.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{location.cert}</span>
                </div>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
