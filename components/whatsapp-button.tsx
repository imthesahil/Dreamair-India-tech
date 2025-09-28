"use client"

import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+916201239925"
    const message =
      "Hi! I'm interested in aviation training courses at Dreamair India Tech. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="whatsapp-float">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gentle"
        size="icon"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </Button>
    </div>
  )
}
