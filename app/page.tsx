"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Users,
  Star,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  Waves,
  Utensils,
  Shield,
  Award,
  ChevronRight,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")

  const featuredRooms = [
    {
      id: "executive",
      name: "Executive Suite",
      price: "Rp 1.250.000",
      image: "/placeholder.svg?height=300&width=400",
      features: ["45m²", "City View", "King Bed", "Living Area"],
      rating: 4.9,
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      price: "Rp 2.500.000",
      image: "/placeholder.svg?height=300&width=400",
      features: ["80m²", "Panoramic View", "Jacuzzi", "Butler Service"],
      rating: 5.0,
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      price: "Rp 850.000",
      image: "/placeholder.svg?height=300&width=400",
      features: ["32m²", "Garden View", "Queen Bed", "Balcony"],
      rating: 4.8,
    },
  ]

  const amenities = [
    { icon: Wifi, name: "Free WiFi", desc: "High-speed internet throughout the hotel" },
    { icon: Car, name: "Free Parking", desc: "Complimentary valet parking service" },
    { icon: Coffee, name: "Restaurant", desc: "Fine dining with international cuisine" },
    { icon: Dumbbell, name: "Fitness Center", desc: "24-hour fully equipped gym" },
    { icon: Waves, name: "Swimming Pool", desc: "Infinity pool with city views" },
    { icon: Utensils, name: "Room Service", desc: "24-hour in-room dining service" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Exceptional service and luxurious accommodations. The staff went above and beyond to make our stay memorable.",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Singapore",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Perfect location and amazing facilities. The rooftop pool has the best views in the city!",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Hong Kong",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      comment: "Outstanding hospitality and attention to detail. Will definitely return on our next visit to Jakarta.",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Australia",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Arion Suites Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Award className="w-4 h-4 mr-1" />
            5-Star Luxury Hotel
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Arion Suites
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience unparalleled luxury and comfort in the heart of Jakarta. Where every moment becomes a cherished
            memory.
          </p>

          {/* Booking Widget */}
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-gray-700">
                    Check-in
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-gray-700">
                    Check-out
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-gray-700">
                    Guests
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger>
                      <Users className="h-4 w-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <Link href="/book">Check Availability</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Welcome to Arion Suites</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Luxury Redefined in the Heart of Jakarta</h2>
              <p className="text-lg text-gray-600 mb-6">
                Arion Suites Hotel stands as a beacon of luxury and sophistication in Jakarta's bustling cityscape. Our
                commitment to excellence ensures every guest experiences unparalleled comfort and service.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Luxury Suites</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Concierge Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
                  <div className="text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/about">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Hotel Lobby"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="font-semibold">Health & Safety</div>
                    <div className="text-sm text-gray-600">Certified Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Accommodations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Rooms & Suites</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in
              comfort and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-gray-900">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {room.rating}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{room.price}</span>
                      <span className="text-gray-500">/night</span>
                    </div>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Link href={`/rooms/${room.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/rooms">
                View All Rooms & Suites
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Hotel Amenities</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enjoy our comprehensive range of amenities designed to enhance your stay and provide ultimate comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow border"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{amenity.name}</h3>
                  <p className="text-gray-600">{amenity.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/facilities">
                Explore All Facilities
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Guest Reviews</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our valued guests who have experienced the luxury and hospitality of Arion Suites
              Hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready for Your Luxury Getaway?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your stay at Arion Suites Hotel and experience the perfect blend of luxury, comfort, and exceptional
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/book">Book Your Stay Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
