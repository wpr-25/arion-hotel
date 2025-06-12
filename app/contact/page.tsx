"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Plane,
  Train,
  Navigation,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiry: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Jl. Sudirman No. 123", "Jakarta Pusat, 10220", "Indonesia"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: +62 21 1234 5678", "Reservations: +62 21 1234 5679", "Events: +62 21 1234 5680"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@arionsuiteshotel.com", "reservations@arionsuiteshotel.com", "events@arionsuiteshotel.com"],
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Front Desk: 24/7", "Concierge: 6:00 AM - 12:00 AM", "Business Center: 24/7"],
    },
  ]

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "reservations", label: "Room Reservations" },
    { value: "events", label: "Events & Meetings" },
    { value: "dining", label: "Restaurant Reservations" },
    { value: "spa", label: "Spa Services" },
    { value: "concierge", label: "Concierge Services" },
    { value: "feedback", label: "Guest Feedback" },
    { value: "corporate", label: "Corporate Accounts" },
  ]

  const transportationOptions = [
    {
      icon: Plane,
      title: "From Airport",
      description: "Soekarno-Hatta International Airport",
      details: [
        "Distance: 35 km (45 minutes)",
        "Airport shuttle available",
        "Private car service",
        "Taxi/ride-sharing services",
      ],
    },
    {
      icon: Train,
      title: "Public Transportation",
      description: "MRT & TransJakarta",
      details: [
        "MRT Bundaran HI (5 minutes walk)",
        "TransJakarta Corridor 1",
        "Various bus routes available",
        "Ojek online services",
      ],
    },
    {
      icon: Car,
      title: "By Car",
      description: "Driving Directions",
      details: [
        "Valet parking available",
        "Self-parking options",
        "Electric vehicle charging",
        "24/7 security monitoring",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=400&width=1920" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MessageCircle className="w-4 h-4 mr-1" />
            Get In Touch
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to assist you 24/7</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Contact Information</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team is available around the clock to assist with your inquiries and reservations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Send Message</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select value={formData.inquiry} onValueChange={(value) => handleInputChange("inquiry", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief subject of your inquiry"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Location */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Our Location</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Hotel Location Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    <Navigation className="w-5 h-5 mr-2" />
                    Open in Maps
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Strategic Location</h4>
                    <p className="text-gray-600 text-sm">
                      Located in the heart of Jakarta's business district, within walking distance of major shopping
                      centers and corporate offices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">24/7 Availability</h4>
                    <p className="text-gray-600 text-sm">
                      Our front desk and concierge services are available round the clock to assist you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Easy Access</h4>
                    <p className="text-gray-600 text-sm">
                      Convenient access via major highways and public transportation systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Guide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Getting Here</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transportation Guide</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple convenient transportation options to reach Arion Suites Hotel from anywhere in Jakarta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportationOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{option.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800">Emergency Information</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important contact numbers for emergencies and urgent assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-red-200">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hotel Security</h3>
                <p className="text-red-600 font-bold">Ext. 911</p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Medical Emergency</h3>
                <p className="text-red-600 font-bold">118 / 119</p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Police</h3>
                <p className="text-red-600 font-bold">110</p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fire Department</h3>
                <p className="text-red-600 font-bold">113</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
