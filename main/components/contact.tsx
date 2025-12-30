"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import content from "@/data/content.json"

export function Contact() {
  const { contact } = content
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // TODO: Implement actual form submission
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32 bg-secondary/10">
      <div className="space-y-12">
        <div className="space-y-4">
          <div className="relative inline-block">
            <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl uppercase relative z-10">
              {contact.title}
            </h2>
            <div className="absolute -bottom-2 left-0 w-1/2 h-4 bg-secondary -z-10" />
          </div>
          <p className="text-lg text-foreground max-w-2xl leading-relaxed font-bold">
            {contact.description}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="border-4 border-foreground p-6 bg-secondary/20 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black text-foreground mb-2 uppercase">Email</h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${contact.email.primary}`}
                  className="block text-base text-foreground hover:text-foreground/70 transition-colors font-bold"
                >
                  {contact.email.primary}
                </a>
                <a
                  href={`mailto:${contact.email.career}`}
                  className="block text-sm text-foreground/80 hover:text-foreground/70 transition-colors font-medium"
                >
                  {contact.email.career} (Career)
                </a>
              </div>
            </div>

            <div className="border-4 border-foreground p-6 bg-muted/20 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black text-foreground mb-2 uppercase">Phone</h3>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-base text-foreground hover:text-foreground/70 transition-colors font-bold"
              >
                {contact.phone}
              </a>
            </div>

            <div className="border-4 border-foreground p-6 bg-accent/20 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black text-foreground mb-2 uppercase">Location</h3>
              <p className="text-base text-foreground font-bold">{contact.location}</p>
            </div>

            <div className="border-4 border-foreground p-6 bg-secondary/20 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black text-foreground mb-2 uppercase">Resume</h3>
              <a
                href={contact.resume}
                className="inline-flex text-base text-foreground hover:text-foreground/70 transition-colors font-bold"
                download
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-4 border-foreground font-bold text-lg px-4 py-6 focus:ring-0 focus:border-foreground shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-4 border-foreground font-bold text-lg px-4 py-6 focus:ring-0 focus:border-foreground shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              />
            </div>

            <div>
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background resize-none border-4 border-foreground font-bold text-lg px-4 py-4 focus:ring-0 focus:border-foreground shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-foreground text-background hover:bg-foreground/90 border-4 border-foreground py-6 font-black text-lg uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
