import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Waves,
  Dumbbell,
  Utensils,
  Car,
  Wifi,
  Coffee,
  Users,
  Briefcase,
  Heart,
  Scissors,
  ShoppingBag,
  Gamepad2,
  Baby,
  Shield,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FacilitiesPage() {
  const facilities = [
    {
      category: "Recreation & Wellness",
      items: [
        {
          icon: Waves,
          name: "Infinity Swimming Pool",
          description: "Rooftop infinity pool with panoramic city views, open 24 hours with poolside bar service.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["25m infinity pool", "Children's pool", "Poolside bar", "Cabana service"],
        },
        {
          icon: Dumbbell,
          name: "Fitness Center",
          description: "State-of-the-art fitness center with premium equipment and personal training services.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["24-hour access", "Personal trainers", "Yoga classes", "Modern equipment"],
        },
        {
          icon: Heart,
          name: "Arion Spa",
          description: "Full-service spa offering traditional and modern treatments for ultimate relaxation.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Massage therapy", "Facial treatments", "Sauna & steam", "Couples packages"],
        },
      ],
    },
    {
      category: "Dining & Entertainment",
      items: [
        {
          icon: Utensils,
          name: "Azure Restaurant",
          description: "Fine dining restaurant featuring international cuisine and local specialties.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["International cuisine", "Private dining", "Wine cellar", "Chef's table"],
        },
        {
          icon: Coffee,
          name: "Lobby Lounge",
          description: "Elegant lounge perfect for afternoon tea, cocktails, and business meetings.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Afternoon tea", "Craft cocktails", "Live music", "Business meetings"],
        },
        {
          icon: Gamepad2,
          name: "Entertainment Center",
          description: "Modern entertainment facilities including gaming area and private karaoke rooms.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Gaming lounge", "Karaoke rooms", "Billiards", "Entertainment systems"],
        },
      ],
    },
    {
      category: "Business & Events",
      items: [
        {
          icon: Briefcase,
          name: "Business Center",
          description: "Fully equipped business center with meeting rooms and conference facilities.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Meeting rooms", "Conference hall", "AV equipment", "Secretarial services"],
        },
        {
          icon: Users,
          name: "Grand Ballroom",
          description: "Elegant ballroom perfect for weddings, corporate events, and special celebrations.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["500 person capacity", "Wedding packages", "Event planning", "Catering services"],
        },
      ],
    },
    {
      category: "Services & Amenities",
      items: [
        {
          icon: Car,
          name: "Valet Parking",
          description: "Complimentary valet parking service with 24-hour security monitoring.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Valet service", "Secure parking", "Car wash", "24/7 security"],
        },
        {
          icon: ShoppingBag,
          name: "Shopping Arcade",
          description: "Convenient shopping arcade featuring boutiques, souvenirs, and essential items.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Boutique shops", "Souvenir store", "Convenience store", "Gift wrapping"],
        },
        {
          icon: Baby,
          name: "Kids Club",
          description: "Supervised children's activities and play area for young guests.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Supervised activities", "Play area", "Educational games", "Arts & crafts"],
        },
        {
          icon: Scissors,
          name: "Salon & Barber",
          description: "Professional salon and barber services for grooming and beauty treatments.",
          image: "/placeholder.svg?height=300&width=400",
          features: ["Hair styling", "Barber services", "Manicure/Pedicure", "Beauty treatments"],
        },
      ],
    },
  ]

  const services = [
    { icon: Wifi, name: "Complimentary WiFi", desc: "High-speed internet throughout the hotel" },
    { icon: Shield, name: "24/7 Security", desc: "Round-the-clock security and surveillance" },
    { icon: Car, name: "Airport Transfer", desc: "Luxury airport transfer service available" },
    { icon: Utensils, name: "Room Service", desc: "24-hour in-room dining service" },
    { icon: Users, name: "Concierge Service", desc: "Personal concierge for all your needs" },
    { icon: Heart, name: "Laundry Service", desc: "Same-day laundry and dry cleaning" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=400&width=1920" alt="Hotel Facilities" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">World-Class Facilities</h1>
          <p className="text-xl">Experience luxury amenities designed for your comfort</p>
        </div>
      </section>

      {/* Facilities by Category */}
      {facilities.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800">{category.category}</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {category.category.split(" & ").map((word, index) => (
                  <span key={index}>
                    {word}
                    {index < category.category.split(" & ").length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.items.map((facility, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                        <facility.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <div className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Additional Services</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Hotel Services</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our dedicated team provides exceptional services to ensure your stay is perfect in every way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{service.name}</h3>
                  <p className="text-blue-100">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Operating Hours</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Facility Hours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan your activities with our facility operating hours and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Waves className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Swimming Pool</h3>
                <p className="text-gray-600">24 Hours Daily</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Dumbbell className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fitness Center</h3>
                <p className="text-gray-600">24 Hours Daily</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Arion Spa</h3>
                <p className="text-gray-600">9:00 AM - 10:00 PM</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Utensils className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Azure Restaurant</h3>
                <p className="text-gray-600">6:00 AM - 11:00 PM</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Coffee className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Lobby Lounge</h3>
                <p className="text-gray-600">24 Hours Daily</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Business Center</h3>
                <p className="text-gray-600">24 Hours Daily</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
