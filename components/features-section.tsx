import { Card, CardContent } from "@/components/ui/card"
import { Plane, GraduationCap, Heart } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Plane,
      title: "Advanced Glass Cockpit Training",
      description:
        "Hands-on training with modern glass cockpit aircraft approved by DGCA for comprehensive flight experience.",
    },
    {
      icon: GraduationCap,
      title: "DGCA Certified Programs",
      description:
        "All our training programs are DGCA certified with excellent job placement support across Indian airlines.",
    },
    {
      icon: Heart,
      title: "Medical Assistance & Support",
      description: "Complete guidance and support for DGCA medical clearances and documentation at every step.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Dreamair India?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            India's most trusted aviation training institute with world-class facilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
