import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Shield, Star, Target } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Hospitality Excellence",
      description: "We believe in creating memorable experiences through genuine care and attention to detail.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building lasting relationships with our guests through transparency and reliability.",
    },
    {
      icon: Star,
      title: "Luxury Standards",
      description: "Maintaining the highest standards of quality in every aspect of our service.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously evolving to meet and exceed our guests' expectations.",
    },
  ]

  const team = [
    {
      name: "James Anderson",
      position: "General Manager",
      image: "/placeholder.svg?height=300&width=300",
      description: "With over 20 years in luxury hospitality, James leads our team with passion and expertise.",
    },
    {
      name: "Sarah Chen",
      position: "Director of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Sarah ensures seamless operations and exceptional guest experiences across all departments.",
    },
    {
      name: "Michael Rodriguez",
      position: "Executive Chef",
      image: "/placeholder.svg?height=300&width=300",
      description: "Michael brings culinary excellence with his innovative approach to international cuisine.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=400&width=1920" alt="About Arion Suites" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Arion Suites</h1>
          <p className="text-xl">Discover our story of luxury and excellence</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Our Story</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Legacy of Luxury Since 2014</h2>
              <p className="text-lg text-gray-600 mb-6">
                Arion Suites Hotel was born from a vision to create an extraordinary hospitality experience in the heart
                of Jakarta. Since our opening in 2014, we have been dedicated to providing unparalleled luxury and
                service to our distinguished guests.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to excellence has earned us recognition as one of Jakarta's premier luxury hotels. We
                take pride in our attention to detail, personalized service, and the creation of unforgettable memories
                for every guest.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Hotel History"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Mission & Vision</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose & Direction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional luxury hospitality experiences that exceed our guests' expectations, creating
                  lasting memories through personalized service, elegant accommodations, and world-class amenities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be recognized as the premier luxury hotel destination in Jakarta, setting the standard for
                  excellence in hospitality while contributing positively to our community and environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Leadership Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team is dedicated to maintaining the highest standards of luxury and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Awards & Recognition</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Excellence Recognized</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by prestigious organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Award className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">TripAdvisor Excellence</h3>
              <p className="text-sm text-gray-600">Certificate of Excellence 2023</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Star className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">5-Star Rating</h3>
              <p className="text-sm text-gray-600">Luxury Hotel Standards</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Best Service</h3>
              <p className="text-sm text-gray-600">Jakarta Tourism Award 2023</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Guest Choice</h3>
              <p className="text-sm text-gray-600">Booking.com Award 2023</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
