"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Users, Maximize, Bed, Wifi, Coffee, Waves, Utensils, Shield, Phone, Tv, Wind, Bath } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      category: "deluxe",
      price: "Rp 850.000",
      originalPrice: "Rp 950.000",
      size: "32m²",
      guests: 2,
      beds: "1 King Bed",
      view: "City View",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.8,
      reviews: 124,
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Wind, name: "Air Conditioning" },
        { icon: Tv, name: "Smart TV" },
        { icon: Coffee, name: "Coffee Maker" },
        { icon: Phone, name: "Phone" },
        { icon: Bath, name: "Private Bathroom" },
      ],
      features: [
        "32m² spacious room",
        "King size bed with premium linens",
        "City skyline views",
        "Work desk with ergonomic chair",
        "Mini bar and coffee station",
        "Marble bathroom with rain shower",
      ],
    },
    {
      id: 2,
      name: "Executive Suite",
      category: "suite",
      price: "Rp 1.250.000",
      originalPrice: "Rp 1.450.000",
      size: "45m²",
      guests: 3,
      beds: "1 King Bed + Sofa Bed",
      view: "Ocean View",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.9,
      reviews: 89,
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Wind, name: "Air Conditioning" },
        { icon: Tv, name: "Smart TV" },
        { icon: Coffee, name: "Nespresso Machine" },
        { icon: Utensils, name: "Kitchenette" },
        { icon: Bath, name: "Jacuzzi Tub" },
      ],
      features: [
        "45m² suite with separate living area",
        "King bed with luxury bedding",
        "Panoramic ocean views",
        "Separate living room with sofa bed",
        "Kitchenette with dining area",
        "Marble bathroom with jacuzzi tub",
      ],
    },
    {
      id: 3,
      name: "Presidential Suite",
      category: "presidential",
      price: "Rp 2.500.000",
      originalPrice: "Rp 2.850.000",
      size: "80m²",
      guests: 4,
      beds: "1 King Bed + 2 Single Beds",
      view: "Panoramic View",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 5.0,
      reviews: 45,
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Wind, name: "Climate Control" },
        { icon: Tv, name: '75" Smart TV' },
        { icon: Coffee, name: "Premium Coffee Bar" },
        { icon: Utensils, name: "Full Kitchen" },
        { icon: Shield, name: "Butler Service" },
      ],
      features: [
        "80m² presidential suite",
        "Master bedroom with king bed",
        "Separate bedroom with twin beds",
        "Full kitchen and dining room",
        "Private balcony with panoramic views",
        "Dedicated butler service",
      ],
    },
    {
      id: 4,
      name: "Superior Room",
      category: "superior",
      price: "Rp 650.000",
      originalPrice: "Rp 750.000",
      size: "28m²",
      guests: 2,
      beds: "1 Queen Bed",
      view: "Garden View",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.7,
      reviews: 156,
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Wind, name: "Air Conditioning" },
        { icon: Tv, name: "LED TV" },
        { icon: Coffee, name: "Tea/Coffee Maker" },
        { icon: Phone, name: "Direct Dial Phone" },
        { icon: Bath, name: "Shower" },
      ],
      features: [
        "28m² comfortable room",
        "Queen bed with quality linens",
        "Peaceful garden views",
        "Work area with free WiFi",
        "Tea and coffee facilities",
        "Modern bathroom with shower",
      ],
    },
    {
      id: 5,
      name: "Family Suite",
      category: "family",
      price: "Rp 1.850.000",
      originalPrice: "Rp 2.100.000",
      size: "60m²",
      guests: 6,
      beds: "2 Queen Beds",
      view: "City & Ocean View",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.8,
      reviews: 67,
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Wind, name: "Dual Zone AC" },
        { icon: Tv, name: "2 Smart TVs" },
        { icon: Coffee, name: "Coffee Station" },
        { icon: Utensils, name: "Mini Kitchen" },
        { icon: Bath, name: "2 Bathrooms" },
      ],
      features: [
        "60m² family-friendly suite",
        "Two separate bedrooms",
        "Connecting rooms available",
        "Mini kitchen and dining area",
        "Two full bathrooms",
        "Child-safe amenities included",
      ],
    },
    {
      id: 6,
      name: "Penthouse Suite",
      category: "penthouse",
      price: "Rp 4.500.000",
      originalPrice: "Rp 5.200.000",
      size: "120m²",
      guests: 6,
      beds: "2 King Beds",
      view: "360° City View",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 5.0,
      reviews: 23,
      amenities: [
        { icon: Wifi, name: "Premium WiFi" },
        { icon: Wind, name: "Smart Climate" },
        { icon: Tv, name: '85" OLED TV' },
        { icon: Coffee, name: "Espresso Bar" },
        { icon: Utensils, name: "Gourmet Kitchen" },
        { icon: Waves, name: "Private Terrace" },
      ],
      features: [
        "120m² luxury penthouse",
        "Two master bedrooms",
        "Private rooftop terrace",
        "Gourmet kitchen with island",
        "360-degree city views",
        "Exclusive concierge service",
      ],
    },
  ]

  const categories = [
    { id: "all", name: "All Rooms", count: rooms.length },
    { id: "superior", name: "Superior", count: rooms.filter((r) => r.category === "superior").length },
    { id: "deluxe", name: "Deluxe", count: rooms.filter((r) => r.category === "deluxe").length },
    { id: "suite", name: "Suites", count: rooms.filter((r) => r.category === "suite").length },
    { id: "family", name: "Family", count: rooms.filter((r) => r.category === "family").length },
    { id: "presidential", name: "Presidential", count: rooms.filter((r) => r.category === "presidential").length },
    { id: "penthouse", name: "Penthouse", count: rooms.filter((r) => r.category === "penthouse").length },
  ]

  const filteredRooms = selectedCategory === "all" ? rooms : rooms.filter((room) => room.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=400&width=1920" alt="Luxury Rooms" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Rooms & Suites</h1>
          <p className="text-xl">Discover your perfect accommodation</p>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Room Image */}
                  <div className="relative h-64 md:h-full">
                    <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        Save{" "}
                        {(
                          ((Number.parseFloat(room.originalPrice.replace(/[^\d]/g, "")) -
                            Number.parseFloat(room.price.replace(/[^\d]/g, ""))) /
                            Number.parseFloat(room.originalPrice.replace(/[^\d]/g, ""))) *
                          100
                        ).toFixed(0)}
                        %
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {room.rating}
                      </Badge>
                    </div>
                  </div>

                  {/* Room Details */}
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{room.name}</h3>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">{room.originalPrice}</div>
                        <div className="text-lg font-bold text-blue-600">{room.price}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Maximize className="w-4 h-4 mr-1" />
                        {room.size}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {room.guests} guests
                      </div>
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {room.beds}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{room.view}</p>

                    {/* Amenities */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {room.amenities.slice(0, 6).map((amenity, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <amenity.icon className="w-3 h-3 mr-1" />
                          <span className="truncate">{amenity.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {room.rating} ({room.reviews} reviews)
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/rooms/${room.id}`}>View Details</Link>
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          asChild
                        >
                          <Link href="/book">Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Room Features</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Our Rooms Special</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every room at Arion Suites is thoughtfully designed with premium amenities and luxurious touches to ensure
              your comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Bedding</h3>
              <p className="text-gray-600">
                Egyptian cotton linens and memory foam mattresses for the perfect night's sleep.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bath className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Marble Bathrooms</h3>
              <p className="text-gray-600">Luxurious marble bathrooms with rain showers and premium toiletries.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Technology</h3>
              <p className="text-gray-600">
                Smart TVs, high-speed WiFi, and automated room controls for modern convenience.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">In-Room Dining</h3>
              <p className="text-gray-600">Premium coffee machines, mini bars, and 24-hour room service available.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Climate Control</h3>
              <p className="text-gray-600">
                Individual climate control systems to maintain your perfect room temperature.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security & Safety</h3>
              <p className="text-gray-600">Electronic key cards, in-room safes, and 24/7 security monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your perfect room today and enjoy exclusive benefits with direct booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/book">Book Direct & Save</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Need Help Choosing?</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
