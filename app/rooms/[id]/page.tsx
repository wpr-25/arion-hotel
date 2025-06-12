"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Star,
  Users,
  Maximize,
  Bed,
  Wifi,
  Coffee,
  Wind,
  Tv,
  Phone,
  Bath,
  Car,
  Utensils,
  Shield,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Clock,
  CheckCircle,
  Gift,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useAuth } from "@/components/auth-provider"

export default function RoomDetailPage() {
  const params = useParams()
  const { user } = useAuth()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
  })

  // Mock room data - in real app, fetch based on params.id
  const room = {
    id: params.id,
    name: "Executive Suite",
    type: "Suite",
    price: 1250000,
    originalPrice: 1450000,
    size: "45m²",
    maxGuests: 3,
    beds: "1 King Bed + Sofa Bed",
    view: "Ocean View",
    rating: 4.9,
    reviewCount: 89,
    description:
      "Experience luxury and comfort in our spacious Executive Suite, featuring a separate living area, premium amenities, and breathtaking ocean views. Perfect for business travelers and couples seeking an elevated stay experience.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    amenities: [
      { icon: Wifi, name: "Complimentary WiFi", description: "High-speed internet access" },
      { icon: Wind, name: "Climate Control", description: "Individual temperature control" },
      { icon: Tv, name: "Smart TV", description: "55-inch 4K Smart TV with streaming" },
      { icon: Coffee, name: "Nespresso Machine", description: "Premium coffee and tea selection" },
      { icon: Utensils, name: "Kitchenette", description: "Mini kitchen with dining area" },
      { icon: Bath, name: "Jacuzzi Tub", description: "Luxury marble bathroom with jacuzzi" },
      { icon: Phone, name: "Direct Dial Phone", description: "International calling available" },
      { icon: Car, name: "Valet Parking", description: "Complimentary valet service" },
      { icon: Shield, name: "In-room Safe", description: "Electronic safe for valuables" },
      { icon: Utensils, name: "24/7 Room Service", description: "Round-the-clock dining service" },
    ],
    features: [
      "45m² spacious suite with separate living area",
      "King bed with luxury Egyptian cotton linens",
      "Panoramic ocean views from floor-to-ceiling windows",
      "Separate living room with sofa bed for additional guest",
      "Fully equipped kitchenette with dining area",
      "Marble bathroom with jacuzzi tub and rain shower",
      "Private balcony with outdoor seating",
      "Executive lounge access with complimentary breakfast",
      "Complimentary WiFi and international calls",
      "Daily housekeeping and turndown service",
    ],
    floorPlan: "/placeholder.svg?height=400&width=600",
    virtualTour: "https://example.com/virtual-tour",
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before check-in",
      smoking: "Non-smoking room",
      pets: "Pets not allowed",
      children: "Children of all ages welcome",
    },
  }

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-15",
      title: "Absolutely Perfect Stay",
      comment:
        "The Executive Suite exceeded all expectations. The ocean view was breathtaking, and the service was impeccable. The jacuzzi tub was a wonderful touch after a long day of meetings.",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-10",
      title: "Business Trip Excellence",
      comment:
        "Perfect for business travelers. The separate living area was great for meetings, and the executive lounge access made mornings effortless. Will definitely book again.",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2024-01-05",
      title: "Romantic Getaway",
      comment:
        "Beautiful suite with amazing views. The balcony was perfect for morning coffee. Only minor issue was the WiFi speed, but everything else was fantastic.",
      helpful: 6,
      verified: true,
    },
  ]

  const similarRooms = [
    {
      id: "deluxe",
      name: "Deluxe Room",
      price: 850000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      price: 2500000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 5.0,
    },
    {
      id: "family",
      name: "Family Suite",
      price: 1850000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
    },
  ]

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % room.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length)
  }

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn)
      const checkOut = new Date(bookingData.checkOut)
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 1
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const handleBookNow = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      // Redirect to booking page with pre-filled data
      const searchParams = new URLSearchParams({
        roomType: room.id as string,
        checkIn: bookingData.checkIn,
        checkOut: bookingData.checkOut,
        guests: bookingData.guests,
        rooms: bookingData.rooms,
      })
      window.location.href = `/book?${searchParams.toString()}`
    } else {
      setIsBookingOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Image Gallery */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px]">
          <Image
            src={room.images[selectedImageIndex] || "/placeholder.svg"}
            alt={room.name}
            fill
            className="object-cover"
            priority
          />

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedImageIndex + 1} / {room.images.length}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-gray-100 p-4">
          <div className="container mx-auto">
            <div className="flex space-x-2 overflow-x-auto">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-16 flex-shrink-0 rounded overflow-hidden ${
                    selectedImageIndex === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${room.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Room Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
                    <p className="text-lg text-gray-600">
                      {room.type} • {room.view}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{room.rating}</span>
                      <span className="text-gray-600">({room.reviewCount} reviews)</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Save {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}%
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-2" />
                    {room.size}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Up to {room.maxGuests} guests
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-2" />
                    {room.beds}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{room.description}</p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="amenities" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="policies">Policies</TabsTrigger>
                </TabsList>

                <TabsContent value="amenities" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <amenity.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{amenity.name}</h4>
                          <p className="text-sm text-gray-600">{amenity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Floor Plan</h3>
                    <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={room.floorPlan || "/placeholder.svg"}
                        alt="Floor Plan"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Guest Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{room.rating}</span>
                        <span className="text-gray-600">({room.reviewCount} reviews)</span>
                      </div>
                    </div>

                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold">{review.name}</h4>
                                  <div className="flex items-center space-x-2">
                                    <div className="flex">
                                      {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                      ))}
                                    </div>
                                    {review.verified && (
                                      <Badge variant="secondary" className="text-xs">
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        Verified Stay
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <h5 className="font-medium mb-2">{review.title}</h5>
                              <p className="text-gray-700 mb-3">{review.comment}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <button className="hover:text-blue-600">Helpful ({review.helpful})</button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="policies" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-blue-600" />
                        Check-in/Check-out
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Check-in:</span>
                          <span>{room.policies.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Check-out:</span>
                          <span>{room.policies.checkOut}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-blue-600" />
                        Cancellation
                      </h4>
                      <p className="text-sm text-gray-700">{room.policies.cancellation}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Room Policies</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Smoking:</span>
                          <span>{room.policies.smoking}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pets:</span>
                          <span>{room.policies.pets}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Children:</span>
                          <span>{room.policies.children}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{formatCurrency(room.price)}</span>
                      <span className="text-sm text-gray-500">/ night</span>
                    </div>
                    <div className="text-sm text-gray-500 line-through">{formatCurrency(room.originalPrice)}</div>
                    {user && (
                      <Badge className="mt-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        <Gift className="w-3 h-3 mr-1" />
                        Earn {Math.round(room.price / 1000)} Points
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="checkin" className="text-sm">
                          Check-in
                        </Label>
                        <Input
                          id="checkin"
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => setBookingData((prev) => ({ ...prev, checkIn: e.target.value }))}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkout" className="text-sm">
                          Check-out
                        </Label>
                        <Input
                          id="checkout"
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => setBookingData((prev) => ({ ...prev, checkOut: e.target.value }))}
                          min={bookingData.checkIn || new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="guests" className="text-sm">
                          Guests
                        </Label>
                        <Select
                          value={bookingData.guests}
                          onValueChange={(value) => setBookingData((prev) => ({ ...prev, guests: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} Guest{num > 1 ? "s" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="rooms" className="text-sm">
                          Rooms
                        </Label>
                        <Select
                          value={bookingData.rooms}
                          onValueChange={(value) => setBookingData((prev) => ({ ...prev, rooms: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} Room{num > 1 ? "s" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {bookingData.checkIn && bookingData.checkOut && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">
                          Total ({calculateNights()} night{calculateNights() > 1 ? "s" : ""})
                        </span>
                        <span className="font-semibold">{formatCurrency(room.price * calculateNights())}</span>
                      </div>
                      <div className="text-xs text-gray-600">Taxes and fees included</div>
                    </div>
                  )}

                  <Button
                    onClick={handleBookNow}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mb-4"
                    size="lg"
                  >
                    Book Now
                  </Button>

                  <div className="text-center">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={room.virtualTour} target="_blank" rel="noopener noreferrer">
                        Virtual Tour
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Free cancellation</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>No booking fees</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Rooms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarRooms.map((similarRoom) => (
              <Card key={similarRoom.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={similarRoom.image || "/placeholder.svg"}
                    alt={similarRoom.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {similarRoom.rating}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{similarRoom.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">{formatCurrency(similarRoom.price)}</span>
                    <Button asChild>
                      <Link href={`/rooms/${similarRoom.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
