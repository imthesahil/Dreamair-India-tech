"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What education is needed to train as a pilot in India?",
      answer:
        "10+2 (with Maths & Physics) from a recognized board. Open school (NIOS) certificates accepted by DGCA are also eligible.",
    },
    {
      question: "Is a medical exam required for pilot training?",
      answer:
        "Yes. Class II medical before starting training, and Class I medical before getting your CPL license from DGCA.",
    },
    {
      question: "How many exams are required for CPL in India?",
      answer: "7 DGCA theory exams + RTR (Radio Telephony Restricted) exam must be cleared for CPL certification.",
    },
    {
      question: "Can I do ground school and flying training together?",
      answer:
        "Yes, CPL ground classes and flight training can be done simultaneously to optimize your training timeline and reduce overall duration.",
    },
    {
      question: "What is the duration of the CPL program in India?",
      answer:
        "The complete CPL program typically takes 12-18 months depending on weather conditions, individual progress, and training intensity.",
    },
    {
      question: "Are there financing options available for aviation training?",
      answer:
        "Yes, we offer various financing options and can assist with education loan applications from partner banks and financial institutions.",
    },
    {
      question: "What are the job opportunities after completing CPL in India?",
      answer:
        "Graduates can join Indian airlines like IndiGo, Air India, SpiceJet, Vistara, or work as flight instructors, charter pilots, or pursue international opportunities.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we have strong industry connections and provide placement assistance with leading Indian airlines and aviation companies.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our aviation training programs in India
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-border/50 hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-all duration-300 group"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4 group-hover:text-accent transition-colors">
                    {faq.question}
                  </h3>
                  <div
                    className="transition-transform duration-300"
                    style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <ChevronDown className="h-5 w-5 text-accent flex-shrink-0" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
