"use client"

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const footerLinks = [
    {
      title: "Courses",
      links: [
        { label: "Commercial Pilot License", href: "#courses", action: () => scrollToSection("courses") },
        { label: "Flight Instructor", href: "#courses", action: () => scrollToSection("courses") },
        { label: "Type Rating", href: "#courses", action: () => scrollToSection("courses") },
        { label: "Cabin Crew", href: "#courses", action: () => scrollToSection("courses") },
      ],
    },
    {
      title: "Training Locations",
      links: [
        { label: "Mumbai Training Center", href: "#locations", action: () => scrollToSection("locations") },
        { label: "Delhi Training Hub", href: "#locations", action: () => scrollToSection("locations") },
        { label: "Bangalore Academy", href: "#locations", action: () => scrollToSection("locations") },
        { label: "Chennai Institute", href: "#locations", action: () => scrollToSection("locations") },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#faq", action: () => scrollToSection("faq") },
        { label: "Contact Us", href: "#contact", action: () => scrollToSection("contact") },
        { label: "Student Portal", href: "#", action: () => openStudentPortal() },
        { label: "Career Guidance", href: "#", action: () => openCareerGuidance() },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/dreamairindia", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/dreamairindia", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/dreamairindia", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/dreamairindia", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/dreamairindia", label: "YouTube" },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const openStudentPortal = () => {
    const message = "Hi! I would like to access the student portal. Could you please help me with the login details?"
    const phoneNumber = "+918210427204"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const openCareerGuidance = () => {
    const message =
      "Hi! I'm interested in career guidance for aviation. Could you please provide more information about career opportunities?"
    const phoneNumber = "+918210427204"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handlePrivacyPolicy = () => {
    alert(
      "Privacy Policy: We respect your privacy and protect your personal information. For detailed privacy policy, please contact us.",
    )
  }

  const handleTermsConditions = () => {
    alert(
      "Terms & Conditions: By using our services, you agree to our terms. For complete terms and conditions, please contact us.",
    )
  }

  const handleCookiePolicy = () => {
    alert("Cookie Policy: We use cookies to enhance your experience. For detailed cookie policy, please contact us.")
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Link href="/" className="text-2xl font-bold" aria-label="Go to homepage">
                Dreamair India
              </Link>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md text-pretty">
              Your gateway to aviation careers in India. Professional training with DGCA-approved certifications and
              industry partnerships.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-primary-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">© 2025 Dreamair India. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={handlePrivacyPolicy}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={handleTermsConditions}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Terms & Conditions
              </button>
              <button
                onClick={handleCookiePolicy}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
