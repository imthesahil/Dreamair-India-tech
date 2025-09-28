"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Plane, Award } from "lucide-react"

export function CoursesSection() {
  const courses = [
    {
      icon: GraduationCap,
      title: "Commercial Pilot License (CPL)",
      description: "DGCA-approved ground classes and comprehensive flight training with modern aircraft.",
      duration: "12-18 months",
      level: "Professional",
    },
    {
      icon: Users,
      title: "Certified Flight Instructor (CFI)",
      description: "Build skills and flight hours while training new pilots in India's growing aviation sector.",
      duration: "6-9 months",
      level: "Advanced",
    },
    {
      icon: Plane,
      title: "Type Rating Program",
      description: "Specialized training for turbine-powered aircraft used by Indian airlines.",
      duration: "3-6 months",
      level: "Specialized",
    },
    {
      icon: Award,
      title: "Cabin Crew Certification",
      description: "Prepare for a rewarding career with Indian and international airlines.",
      duration: "3-4 months",
      level: "Entry Level",
    },
  ]

  const handleLearnMore = (courseTitle: string) => {
    // Scroll to contact section or open course details
    const message = `Hi! I'm interested in learning more about the ${courseTitle} program. Could you please provide detailed information?`
    const phoneNumber = "+919876543210"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Courses Offered</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of DGCA-certified aviation training programs designed to launch your
            career in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:scale-105 animate-fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <course.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col flex-1">
                <p className="text-muted-foreground mb-4 text-sm text-pretty">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-accent font-medium">Duration: {course.duration}</div>
                  <div className="text-sm text-muted-foreground">Level: {course.level}</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  onClick={() => handleLearnMore(course.title)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
