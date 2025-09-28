"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Training Process", href: "#steps" },
    { label: "FAQ", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  const handleBrochureDownload = () => {
    const message =
      "Hi! I would like to download the Dreamair India Tech aviation training brochure. Could you please send it to me?"
    const phoneNumber = "+916201239925"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleApplyNow = () => {
    // Scroll to contact section
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "")
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false) // Close mobile menu
  }

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary whitespace-nowrap" aria-label="Go to homepage">
              Dreamair India Tech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={handleBrochureDownload}
              className="bg-transparent border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Brochure
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleApplyNow}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleBrochureDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleApplyNow}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
