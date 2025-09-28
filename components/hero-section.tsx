"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const handleExploreCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWatchVideo = () => {
    // Open a sample video or modal
    window.open("https://youtu.be/QamPqcXlIO8?si=U3LTD5OKszc21c4O", "_blank")
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-aircraft-cockpit-with-glass-displays-in-ind.jpg"
          alt="Aviation Training in India"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            Soar High with <span className="text-accent">Aviation Excellence</span> in India
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto text-pretty">
            India's premier aviation training institute offering world-class pilot training, cabin crew certification,
            and aircraft maintenance programs with DGCA approved courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              onClick={handleExploreCourses}
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105"
              onClick={handleWatchVideo}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
