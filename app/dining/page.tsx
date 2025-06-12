import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, Wine, Clock, MapPin, Phone, Star, Users, ChefHat, Leaf, Award } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DiningPage() {
  const restaurants = [
    {
      id: 1,
      name: "Azure Restaurant",
      type: "Fine Dining",
      cuisine: "International & Indonesian",
      description:
        "Our signature restaurant offers an exquisite culinary journey featuring contemporary international cuisine with Indonesian influences, crafted by our award-winning executive chef.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      priceRange: "$$$$",
      capacity: 120,
      hours: "6:00 AM - 11:00 PM",
      features: ["Private Dining", "Wine Pairing", "Chef's Table", "Outdoor Terrace"],
      specialties: ["Wagyu Beef Tenderloin", "Lobster Thermidor", "Rendang Wellington", "Signature Tasting Menu"],
    },
    {
      id: 2,
      name: "Skyline Lounge",
      type: "Rooftop Bar & Lounge",
      cuisine: "Cocktails & Light Bites",
      description:
        "Elevated 30 floors above Jakarta, our rooftop lounge offers breathtaking city views alongside expertly crafted cocktails and contemporary small plates.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      priceRange: "$$$",
      capacity: 80,
      hours: "5:00 PM - 2:00 AM",
      features: ["City Views", "Live Music", "Craft Cocktails", "VIP Cabanas"],
      specialties: ["Signature Martinis", "Artisan Sushi", "Wagyu Sliders", "Premium Cigars"],
    },
    {
      id: 3,
      name: "Café Lumière",
      type: "All-Day Dining",
      cuisine: "International Buffet",
      description:
        "A vibrant all-day dining venue featuring international buffet breakfast, à la carte lunch and dinner, with live cooking stations and fresh local ingredients.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      priceRange: "$$$",
      capacity: 150,
      hours: "6:00 AM - 11:00 PM",
      features: ["Buffet Breakfast", "Live Cooking", "Kids Menu", "Healthy Options"],
      specialties: ["International Buffet", "Fresh Seafood", "Local Delicacies", "Artisan Pastries"],
    },
    {
      id: 4,
      name: "Tea Garden",
      type: "Afternoon Tea",
      cuisine: "Tea & Pastries",
      description:
        "An elegant setting for traditional afternoon tea service, featuring premium teas from around the world and exquisite pastries by our pastry chef.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      priceRange: "$$",
      capacity: 40,
      hours: "2:00 PM - 6:00 PM",
      features: ["Traditional Service", "Premium Teas", "Garden Setting", "Private Bookings"],
      specialties: ["High Tea Set", "Scones & Clotted Cream", "Macarons", "Artisan Chocolates"],
    },
  ]

  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { name: "Tuna Tartare", description: "Fresh yellowfin tuna, avocado, citrus vinaigrette", price: "Rp 285,000" },
        {
          name: "Foie Gras Terrine",
          description: "Duck liver terrine, brioche toast, fig compote",
          price: "Rp 425,000",
        },
        { name: "Wagyu Carpaccio", description: "Thinly sliced wagyu, truffle oil, parmesan", price: "Rp 385,000" },
        { name: "Lobster Bisque", description: "Rich lobster soup, cognac cream, chives", price: "Rp 225,000" },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "200g Australian wagyu, potato gratin, seasonal vegetables",
          price: "Rp 850,000",
        },
        { name: "Lobster Thermidor", description: "Whole lobster, cheese sauce, herb crust", price: "Rp 750,000" },
        {
          name: "Rendang Wellington",
          description: "Beef rendang wrapped in puff pastry, modern presentation",
          price: "Rp 485,000",
        },
        {
          name: "Pan-Seared Barramundi",
          description: "Fresh fish, lemon butter sauce, quinoa pilaf",
          price: "Rp 385,000",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        { name: "Chocolate Soufflé", description: "Dark chocolate soufflé, vanilla ice cream", price: "Rp 185,000" },
        { name: "Crème Brûlée", description: "Classic vanilla custard, caramelized sugar", price: "Rp 145,000" },
        { name: "Tropical Fruit Tart", description: "Seasonal tropical fruits, pastry cream", price: "Rp 165,000" },
        { name: "Cheese Selection", description: "Artisan cheeses, honey, nuts, crackers", price: "Rp 285,000" },
      ],
    },
  ]

  const wineSelection = [
    { name: "Dom Pérignon 2012", type: "Champagne", price: "Rp 4,500,000" },
    { name: "Opus One 2018", type: "Red Wine", price: "Rp 8,500,000" },
    { name: "Château d'Yquem 2015", type: "Dessert Wine", price: "Rp 12,000,000" },
    { name: "Krug Grande Cuvée", type: "Champagne", price: "Rp 3,200,000" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fine Dining Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <ChefHat className="w-4 h-4 mr-1" />
            Culinary Excellence
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Exceptional
            <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Dining Experience
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover culinary artistry where international flavors meet Indonesian heritage, crafted by world-class
            chefs in elegant settings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
            >
              Make Reservation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Menus
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurants Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Our Restaurants</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Culinary Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From fine dining to casual elegance, each venue offers a unique culinary journey designed to delight your
              senses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {restaurant.rating}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-500 text-white">{restaurant.priceRange}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{restaurant.name}</h3>
                      <p className="text-amber-600 font-medium">{restaurant.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{restaurant.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Utensils className="w-4 h-4 mr-2" />
                      {restaurant.cuisine}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {restaurant.capacity} seats
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {restaurant.hours}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      {restaurant.rating}/5.0
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Signature Dishes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.slice(0, 2).map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                      Reserve Table
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Azure Restaurant Menu</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Signature Menu Selection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our chef's carefully curated selection of international and Indonesian specialties.
            </p>
          </div>

          <Tabs defaultValue="food" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="food" className="text-lg">
                Food Menu
              </TabsTrigger>
              <TabsTrigger value="wine" className="text-lg">
                Wine Selection
              </TabsTrigger>
            </TabsList>

            <TabsContent value="food">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {menuCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-6 text-center border-b pb-2">{category.name}</h3>
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-semibold text-gray-900">{item.name}</h4>
                              <span className="text-amber-600 font-bold ml-2">{item.price}</span>
                            </div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wine">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Wine className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Premium Wine Collection</h3>
                    <p className="text-gray-600">Curated selection from renowned vineyards worldwide</p>
                  </div>
                  <div className="space-y-4">
                    {wineSelection.map((wine, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <div>
                          <h4 className="font-semibold">{wine.name}</h4>
                          <p className="text-sm text-gray-600">{wine.type}</p>
                        </div>
                        <span className="text-amber-600 font-bold">{wine.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <Button variant="outline">View Complete Wine List</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800">Executive Chef</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Chef Marcus Chen</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of culinary excellence across Michelin-starred restaurants in Europe and Asia, Chef
                Marcus brings innovative techniques and authentic flavors to create unforgettable dining experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-amber-600 mr-3" />
                  <span>Michelin Star Experience - Le Bernardin, New York</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="w-5 h-5 text-green-600 mr-3" />
                  <span>Sustainable Cuisine Advocate</span>
                </div>
                <div className="flex items-center">
                  <ChefHat className="w-5 h-5 text-amber-600 mr-3" />
                  <span>James Beard Award Nominee</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                Book Chef's Table Experience
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Executive Chef"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experiences */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Special Experiences</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Exclusive Dining Experiences</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Create unforgettable memories with our curated dining experiences designed for special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <ChefHat className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Chef's Table</h3>
                <p className="text-amber-100 mb-4">
                  Intimate 8-course tasting menu with wine pairing, prepared exclusively by our executive chef.
                </p>
                <div className="text-2xl font-bold text-white mb-4">Rp 2,500,000</div>
                <Button className="bg-white text-amber-600 hover:bg-gray-100">Reserve Experience</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Wine className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Wine Dinner</h3>
                <p className="text-amber-100 mb-4">
                  5-course dinner paired with premium wines, guided by our sommelier.
                </p>
                <div className="text-2xl font-bold text-white mb-4">Rp 1,850,000</div>
                <Button className="bg-white text-amber-600 hover:bg-gray-100">Book Wine Dinner</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Private Dining</h3>
                <p className="text-amber-100 mb-4">
                  Exclusive private dining room for up to 12 guests with personalized menu.
                </p>
                <div className="text-2xl font-bold text-white mb-4">From Rp 5,000,000</div>
                <Button className="bg-white text-amber-600 hover:bg-gray-100">Inquire Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Reservations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Dine With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Reserve your table today and experience culinary excellence at Arion Suites Hotel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">+62 21 1234 5678</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Reservation Hours</h3>
                <p className="text-gray-600">9:00 AM - 10:00 PM</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">Arion Suites Hotel</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              >
                Make Online Reservation
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Concierge</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
