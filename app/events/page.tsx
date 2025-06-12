import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Calendar,
  Award,
  Briefcase,
  Heart,
  Music,
  Camera,
  Utensils,
  Wifi,
  Projector,
  Car,
  Shield,
  Clock,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EventsPage() {
  const venues = [
    {
      id: 1,
      name: "Grand Ballroom",
      type: "Main Event Hall",
      capacity: { theater: 500, banquet: 350, cocktail: 600 },
      size: "450 sqm",
      ceiling: "4.5m",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Crystal chandeliers",
        "Built-in AV system",
        "Dedicated bridal suite",
        "Private entrance",
        "Dance floor",
        "Stage platform",
      ],
      idealFor: ["Weddings", "Corporate Galas", "Award Ceremonies", "Product Launches"],
    },
    {
      id: 2,
      name: "Executive Boardroom",
      type: "Meeting Room",
      capacity: { boardroom: 20, theater: 30, classroom: 24 },
      size: "65 sqm",
      ceiling: "3.2m",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Executive furniture",
        "Video conferencing",
        "Smart board",
        "Climate control",
        "Soundproofing",
        "Private restroom",
      ],
      idealFor: ["Board Meetings", "Executive Sessions", "VIP Meetings", "Interviews"],
    },
    {
      id: 3,
      name: "Harmony Conference Hall",
      type: "Conference Room",
      capacity: { theater: 200, classroom: 120, banquet: 150 },
      size: "180 sqm",
      ceiling: "3.8m",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Flexible seating",
        "HD projection",
        "Wireless microphones",
        "Breakout areas",
        "Natural lighting",
        "Coffee station",
      ],
      idealFor: ["Conferences", "Seminars", "Training", "Workshops"],
    },
    {
      id: 4,
      name: "Garden Pavilion",
      type: "Outdoor Venue",
      capacity: { cocktail: 150, banquet: 100 },
      size: "200 sqm",
      ceiling: "Open air",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Garden setting",
        "Weather protection",
        "Ambient lighting",
        "Water features",
        "Landscaped grounds",
        "Photo opportunities",
      ],
      idealFor: ["Garden Weddings", "Cocktail Parties", "Team Building", "Social Events"],
    },
    {
      id: 5,
      name: "Skyline Private Dining",
      type: "Private Dining",
      capacity: { banquet: 24, cocktail: 40 },
      size: "85 sqm",
      ceiling: "3.5m",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "City views",
        "Private kitchen",
        "Wine cellar access",
        "Intimate setting",
        "Personalized service",
        "Custom menus",
      ],
      idealFor: ["Private Dinners", "Business Meals", "Celebrations", "VIP Events"],
    },
    {
      id: 6,
      name: "Innovation Hub",
      type: "Modern Meeting Space",
      capacity: { theater: 80, classroom: 50, cocktail: 100 },
      size: "120 sqm",
      ceiling: "4.0m",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Modern design",
        "Interactive displays",
        "Flexible furniture",
        "High-speed internet",
        "Collaboration tools",
        "Refreshment area",
      ],
      idealFor: ["Innovation Sessions", "Startups", "Creative Workshops", "Tech Meetings"],
    },
  ]

  const packages = [
    {
      name: "Platinum Wedding Package",
      price: "Starting from Rp 85,000,000",
      description: "Complete luxury wedding package for up to 300 guests",
      includes: [
        "Grand Ballroom venue (8 hours)",
        "Bridal suite preparation room",
        "5-course wedding dinner",
        "Wedding cake and dessert station",
        "Floral arrangements and decorations",
        "Professional wedding coordinator",
        "Photography and videography",
        "Complimentary honeymoon suite",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Corporate Conference Package",
      price: "Starting from Rp 15,000,000",
      description: "Full-day conference package for up to 150 delegates",
      includes: [
        "Conference hall rental (full day)",
        "Welcome coffee and registration",
        "Morning and afternoon tea breaks",
        "Business lunch buffet",
        "AV equipment and technical support",
        "Stationery and materials",
        "WiFi and charging stations",
        "Dedicated event coordinator",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Executive Meeting Package",
      price: "Starting from Rp 5,000,000",
      description: "Half-day executive meeting for up to 20 participants",
      includes: [
        "Executive boardroom (4 hours)",
        "Welcome refreshments",
        "Business lunch or dinner",
        "Video conferencing setup",
        "Flip charts and presentation tools",
        "Dedicated service staff",
        "Parking for all attendees",
        "Meeting summary documentation",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const services = [
    { icon: Utensils, name: "Catering Services", desc: "Custom menus and dietary accommodations" },
    { icon: Camera, name: "Photography", desc: "Professional event photography and videography" },
    { icon: Music, name: "Entertainment", desc: "Live music, DJ services, and cultural performances" },
    { icon: Car, name: "Transportation", desc: "Guest transportation and valet parking" },
    { icon: Shield, name: "Security", desc: "Professional security and crowd management" },
    { icon: Wifi, name: "Technical Support", desc: "AV equipment and IT technical assistance" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Events and Meetings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Calendar className="w-4 h-4 mr-1" />
            Events & Meetings
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Unforgettable
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Events & Meetings
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From intimate boardroom meetings to grand celebrations, we provide exceptional venues and personalized
            service for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Plan Your Event
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Event Categories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect Venues for Every Occasion</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're planning a corporate meeting, wedding celebration, or social gathering, we have the perfect
              space and services to make your event extraordinary.
            </p>
          </div>

          <Tabs defaultValue="corporate" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="corporate" className="text-sm">
                Corporate
              </TabsTrigger>
              <TabsTrigger value="weddings" className="text-sm">
                Weddings
              </TabsTrigger>
              <TabsTrigger value="social" className="text-sm">
                Social Events
              </TabsTrigger>
              <TabsTrigger value="meetings" className="text-sm">
                Meetings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="corporate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Corporate Conferences</h3>
                    <p className="text-gray-600">Large-scale conferences with full AV support and catering services.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Award Ceremonies</h3>
                    <p className="text-gray-600">Elegant venues for recognition events and corporate celebrations.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Team Building</h3>
                    <p className="text-gray-600">
                      Interactive spaces designed for team building and corporate retreats.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="weddings">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Grand Weddings</h3>
                    <p className="text-gray-600">Luxurious ballroom weddings with complete planning services.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Intimate Ceremonies</h3>
                    <p className="text-gray-600">Smaller, intimate wedding ceremonies in elegant private settings.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Camera className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Pre-Wedding Events</h3>
                    <p className="text-gray-600">Engagement parties, bridal showers, and rehearsal dinners.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="social">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Music className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Birthday Parties</h3>
                    <p className="text-gray-600">
                      Memorable birthday celebrations with personalized themes and catering.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Anniversary Celebrations</h3>
                    <p className="text-gray-600">Elegant anniversary parties and milestone celebrations.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Family Reunions</h3>
                    <p className="text-gray-600">Large family gatherings with flexible seating and menu options.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="meetings">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Board Meetings</h3>
                    <p className="text-gray-600">Executive boardrooms with premium amenities and privacy.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Projector className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Presentations</h3>
                    <p className="text-gray-600">Modern presentation rooms with state-of-the-art AV equipment.</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Wifi className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Virtual Meetings</h3>
                    <p className="text-gray-600">Hybrid meeting solutions with video conferencing capabilities.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Venues Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Venues</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exceptional Event Spaces</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our collection of versatile venues, each designed to accommodate different event types and sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {venues.map((venue) => (
              <Card key={venue.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={venue.image || "/placeholder.svg"} alt={venue.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900">{venue.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold">Size:</span> {venue.size}
                    </div>
                    <div>
                      <span className="font-semibold">Ceiling:</span> {venue.ceiling}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Capacity:</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(venue.capacity).map(([setup, capacity]) => (
                        <Badge key={setup} variant="secondary" className="text-xs">
                          {setup}: {capacity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {venue.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Ideal For:</h4>
                    <div className="flex flex-wrap gap-1">
                      {venue.idealFor.slice(0, 3).map((use, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Book Venue
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Virtual Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Event Packages</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Event Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our all-inclusive packages take care of every detail, allowing you to focus on what matters most - your
              event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {pkg.includes.slice(0, 6).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Additional Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Event Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beyond venues, we offer comprehensive services to ensure every aspect of your event is perfectly executed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Planning Process</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">How We Make Your Event Perfect</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Our experienced event planning team guides you through every step to ensure your event exceeds
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
              <p className="text-purple-100">Initial meeting to understand your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-purple-100">Detailed planning with timeline, budget, and vendor coordination</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Coordination</h3>
              <p className="text-purple-100">Full event coordination and management on the day</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Execution</h3>
              <p className="text-purple-100">Flawless execution with dedicated staff and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Ready to Plan?</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Create Your Perfect Event</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our event planning team today to discuss your requirements and receive a personalized proposal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Event Planning</h3>
              <p className="text-gray-600">events@arionsuiteshotel.com</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Sales Team</h3>
              <p className="text-gray-600">+62 21 1234 5679</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Office Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Request Proposal
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule Site Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
