"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Play, Download, Share2, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryItems = [
    {
      id: 1,
      title: "Grand Ballroom",
      category: "venues",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Our magnificent Grand Ballroom set for an elegant wedding reception",
    },
    {
      id: 2,
      title: "Presidential Suite",
      category: "rooms",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Luxurious Presidential Suite with panoramic city views",
    },
    {
      id: 3,
      title: "Azure Restaurant",
      category: "dining",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Fine dining experience at our signature Azure Restaurant",
    },
    {
      id: 4,
      title: "Infinity Pool",
      category: "facilities",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Rooftop infinity pool with stunning Jakarta skyline views",
    },
    {
      id: 5,
      title: "Hotel Exterior",
      category: "exterior",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Impressive exterior architecture of Arion Suites Hotel",
    },
    {
      id: 6,
      title: "Spa Treatment Room",
      category: "facilities",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Tranquil spa treatment room for ultimate relaxation",
    },
    {
      id: 7,
      title: "Executive Suite",
      category: "rooms",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Elegant Executive Suite with separate living area",
    },
    {
      id: 8,
      title: "Skyline Lounge",
      category: "dining",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Rooftop lounge with breathtaking city views",
    },
    {
      id: 9,
      title: "Conference Hall",
      category: "venues",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Modern conference hall equipped with latest technology",
    },
    {
      id: 10,
      title: "Fitness Center",
      category: "facilities",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "State-of-the-art fitness center with premium equipment",
    },
    {
      id: 11,
      title: "Garden Pavilion",
      category: "venues",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Beautiful garden pavilion perfect for outdoor events",
    },
    {
      id: 12,
      title: "Deluxe Room",
      category: "rooms",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Comfortable Deluxe Room with modern amenities",
    },
    {
      id: 13,
      title: "Hotel Lobby",
      category: "exterior",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Grand hotel lobby with elegant crystal chandeliers",
    },
    {
      id: 14,
      title: "Café Lumière",
      category: "dining",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "All-day dining restaurant with international buffet",
    },
    {
      id: 15,
      title: "Wedding Setup",
      category: "venues",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Romantic wedding ceremony setup in the Grand Ballroom",
    },
    {
      id: 16,
      title: "Hotel Virtual Tour",
      category: "virtual",
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      description: "Complete virtual tour of Arion Suites Hotel facilities",
    },
  ]

  const categories = [
    { id: "all", name: "All Photos", count: galleryItems.length },
    { id: "rooms", name: "Rooms & Suites", count: galleryItems.filter((item) => item.category === "rooms").length },
    { id: "dining", name: "Dining", count: galleryItems.filter((item) => item.category === "dining").length },
    {
      id: "facilities",
      name: "Facilities",
      count: galleryItems.filter((item) => item.category === "facilities").length,
    },
    { id: "venues", name: "Event Venues", count: galleryItems.filter((item) => item.category === "venues").length },
    {
      id: "exterior",
      name: "Hotel Exterior",
      count: galleryItems.filter((item) => item.category === "exterior").length,
    },
    { id: "virtual", name: "Virtual Tours", count: galleryItems.filter((item) => item.category === "virtual").length },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredItems.length
      setSelectedImage(filteredItems[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
      setSelectedImage(filteredItems[prevIndex].id)
    }
  }

  const selectedImageData = galleryItems.find((item) => item.id === selectedImage)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Hotel Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Camera className="w-4 h-4 mr-1" />
            Photo Gallery
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Visual Journey</h1>
          <p className="text-xl">Explore the beauty and elegance of Arion Suites Hotel</p>
        </div>
      </section>

      {/* Gallery Categories */}
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

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    <div className="relative h-64">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-gray-900 ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="secondary" className="bg-white/90">
                          <Camera className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                  <div className="relative w-full h-full bg-black">
                    {selectedImageData && (
                      <>
                        <Image
                          src={selectedImageData.src || "/placeholder.svg"}
                          alt={selectedImageData.title}
                          fill
                          className="object-contain"
                        />

                        {/* Navigation Controls */}
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

                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{selectedImageData.title}</h3>
                          <p className="text-gray-300">{selectedImageData.description}</p>

                          <div className="flex items-center space-x-4 mt-4">
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                              <Heart className="w-4 h-4 mr-2" />
                              Like
                            </Button>
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </Button>
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Virtual Experience</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">360° Virtual Tours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our hotel from the comfort of your home with immersive virtual tours of our facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Hotel Tour" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    <Play className="w-5 h-5 mr-2" />
                    Start Tour
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Complete Hotel Tour</h3>
                <p className="text-gray-600">Explore all public areas, restaurants, and facilities</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Rooms Tour" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    <Play className="w-5 h-5 mr-2" />
                    View Rooms
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Rooms & Suites Tour</h3>
                <p className="text-gray-600">Virtual walkthrough of our luxury accommodations</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Events Tour" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    <Play className="w-5 h-5 mr-2" />
                    Explore Venues
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Event Venues Tour</h3>
                <p className="text-gray-600">See our ballrooms and meeting spaces in detail</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Contest */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Share Your Experience</Badge>
          <h2 className="text-4xl font-bold text-white mb-4">Share Your Arion Moments</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Share your beautiful moments at Arion Suites Hotel using #ArionMoments and get featured in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Camera className="w-5 h-5 mr-2" />
              Upload Your Photos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Share2 className="w-5 h-5 mr-2" />
              Share on Social Media
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
