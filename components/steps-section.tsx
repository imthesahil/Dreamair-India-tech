import { CheckCircle } from "lucide-react"

export function StepsSection() {
  const steps = [
    "Clear Class II medical examination (DGCA-approved).",
    "Attend theoretical knowledge training (Ground Classes).",
    "Complete practical flight training.",
    "Pass 7 DGCA-conducted exams (Air Regulations, Navigation, Meteorology, Technical General, Aircraft-Specific exams).",
    "Pass the COP-RTR exam by WPC India.",
    "Obtain DGCA CPL after successful training and assessment.",
  ]

  return (
    <section id="steps" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How to Become a Pilot</h2>
          <p className="text-xl text-muted-foreground">
            Follow these essential steps to achieve your Commercial Pilot License
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border/50">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-foreground text-pretty">{step}</p>
              </div>
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
