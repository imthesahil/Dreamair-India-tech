"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Commercial Pilot",
      company: "IndiGo Airlines",
      text: "Dreamair India Tech helped make my pilot career dreams a reality. The DGCA-approved training was comprehensive and the instructors were world-class.",
      rating: 5,
      image: "/placeholder.svg?key=pilot1",
    },
    {
      name: "Priya Sharma",
      role: "Flight Instructor",
      company: "Dreamair India Tech",
      text: "Excellent training facility with modern aircraft! The CFI program prepared me perfectly for my career as a flight instructor in India.",
      rating: 5,
      image: "/placeholder.svg?key=pilot2",
    },
    {
      name: "Arjun Patel",
      role: "First Officer",
      company: "Air India",
      text: "The comprehensive training and DGCA certification gave me the confidence to excel in my aviation career with Air India.",
      rating: 5,
      image: "/placeholder.svg?key=pilot3",
    },
    {
      name: "Sneha Reddy",
      role: "Cabin Crew",
      company: "Vistara",
      text: "The cabin crew certification program was thorough and professional. I landed my dream job with Vistara right after graduation.",
      rating: 5,
      image: "/placeholder.svg?key=crew1",
    },
    {
      name: "Vikram Singh",
      role: "Aircraft Maintenance Engineer",
      company: "SpiceJet",
      text: "The technical training program gave me hands-on experience with modern aircraft systems. Now I'm working with SpiceJet's maintenance team.",
      rating: 5,
      image: "/placeholder.svg?key=engineer1",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
          <p className="text-xl text-muted-foreground">
            Hear from our successful graduates who are now soaring high in Indian aviation
          </p>
        </div>

        <div className="relative">
          <Card className="border-border/50 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-accent/20"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 text-pretty">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
