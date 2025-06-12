"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Crown, Star, Gift, Calendar, Utensils, SpadeIcon as Spa, Trophy, TrendingUp, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useAuth } from "@/components/auth-provider"
import { AuthDialog } from "@/components/auth-dialog"

export default function LoyaltyPage() {
  const { user } = useAuth()

  const membershipTiers = [
    {
      name: "Silver",
      minPoints: 0,
      color: "from-gray-300 to-gray-500",
      icon: Star,
      benefits: [
        "5% discount on room rates",
        "Welcome amenity",
        "Late checkout (2 PM)",
        "Complimentary WiFi",
        "Birthday recognition",
      ],
    },
    {
      name: "Gold",
      minPoints: 2000,
      color: "from-yellow-500 to-orange-500",
      icon: Star,
      benefits: [
        "10% discount on room rates",
        "Room upgrade (subject to availability)",
        "Late checkout (4 PM)",
        "Complimentary breakfast for 2",
        "Priority reservations",
        "Express check-in/out",
      ],
    },
    {
      name: "Platinum",
      minPoints: 5000,
      color: "from-gray-400 to-gray-600",
      icon: Crown,
      benefits: [
        "15% discount on room rates",
        "Guaranteed room upgrade",
        "Late checkout (6 PM)",
        "Executive lounge access",
        "Complimentary spa treatment",
        "Personal concierge service",
      ],
    },
    {
      name: "Diamond",
      minPoints: 10000,
      color: "from-purple-600 to-pink-600",
      icon: Crown,
      benefits: [
        "20% discount on room rates",
        "Suite upgrade guarantee",
        "24-hour late checkout",
        "Butler service",
        "Complimentary airport transfer",
        "Exclusive Diamond events",
      ],
    },
  ]

  const pointsActivities = [
    { activity: "Room Stay", points: "10 points per $1 spent", icon: Calendar },
    { activity: "Dining", points: "5 points per $1 spent", icon: Utensils },
    { activity: "Spa Services", points: "8 points per $1 spent", icon: Spa },
    { activity: "Events & Meetings", points: "5 points per $1 spent", icon: Trophy },
    { activity: "Referral Bonus", points: "1000 bonus points", icon: Gift },
    { activity: "Social Media Share", points: "50 points per share", icon: TrendingUp },
  ]

  const rewardOptions = [
    {
      name: "Free Night Stay",
      points: 5000,
      description: "One complimentary night in Deluxe Room",
      image: "/placeholder.svg?height=200&width=300",
      category: "accommodation",
    },
    {
      name: "Spa Treatment",
      points: 2000,
      description: "60-minute relaxation massage",
      image: "/placeholder.svg?height=200&width=300",
      category: "spa",
    },
    {
      name: "Fine Dining Experience",
      points: 1500,
      description: "3-course dinner for two at Azure Restaurant",
      image: "/placeholder.svg?height=200&width=300",
      category: "dining",
    },
    {
      name: "Airport Transfer",
      points: 800,
      description: "Round-trip luxury airport transfer",
      image: "/placeholder.svg?height=200&width=300",
      category: "transport",
    },
    {
      name: "Room Upgrade",
      points: 1200,
      description: "Upgrade to next room category",
      image: "/placeholder.svg?height=200&width=300",
      category: "accommodation",
    },
    {
      name: "Late Checkout",
      points: 500,
      description: "Late checkout until 6 PM",
      image: "/placeholder.svg?height=200&width=300",
      category: "service",
    },
  ]

  const recentActivity = [
    {
      date: "2024-01-15",
      activity: "Room Stay - Executive Suite",
      points: 1250,
      type: "earned",
    },
    {
      date: "2024-01-10",
      activity: "Dining - Azure Restaurant",
      points: 180,
      type: "earned",
    },
    {
      date: "2024-01-05",
      activity: "Redeemed - Spa Treatment",
      points: -2000,
      type: "redeemed",
    },
    {
      date: "2024-01-01",
      activity: "Welcome Bonus",
      points: 500,
      type: "bonus",
    },
  ]

  const getCurrentTier = () => {
    if (!user) return membershipTiers[0]
    return (
      membershipTiers.find(
        (tier) =>
          user.loyaltyPoints >= tier.minPoints &&
          (membershipTiers.indexOf(tier) === membershipTiers.length - 1 ||
            user.loyaltyPoints < membershipTiers[membershipTiers.indexOf(tier) + 1].minPoints),
      ) || membershipTiers[0]
    )
  }

  const getNextTier = () => {
    if (!user) return membershipTiers[1]
    const currentTierIndex = membershipTiers.findIndex((tier) => tier.name === user.membershipTier)
    return currentTierIndex < membershipTiers.length - 1 ? membershipTiers[currentTierIndex + 1] : null
  }

  const getProgressToNextTier = () => {
    if (!user) return 0
    const nextTier = getNextTier()
    if (!nextTier) return 100
    const currentTier = getCurrentTier()
    const progress = ((user.loyaltyPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100
    return Math.min(progress, 100)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section for Non-Members */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Arion Rewards"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Gift className="w-4 h-4 mr-1" />
              Exclusive Rewards Program
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Join
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Arion Rewards
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Unlock exclusive benefits, earn points on every stay, and experience luxury like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AuthDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Join Now - Get 500 Points
                </Button>
              </AuthDialog>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-100 text-amber-800">Membership Tiers</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Four Levels of Luxury</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Progress through our membership tiers and unlock increasingly exclusive benefits and privileges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membershipTiers.map((tier, index) => (
                <Card key={tier.name} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <p className="text-sm text-gray-600">{tier.minPoints.toLocaleString()}+ points</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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

  const currentTier = getCurrentTier()
  const nextTier = getNextTier()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Member Dashboard Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome back, {user.firstName}!</h1>
            <p className="text-xl text-blue-100 mb-8">Your Arion Rewards Dashboard</p>

            {/* Member Status Card */}
            <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${currentTier.color} rounded-full flex items-center justify-center`}
                    >
                      <currentTier.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">{currentTier.name} Member</h3>
                      <p className="text-blue-100">Member since {new Date(user.joinDate).getFullYear()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{user.loyaltyPoints.toLocaleString()}</div>
                    <div className="text-blue-100">Points Available</div>
                  </div>
                </div>

                {nextTier && (
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Progress to {nextTier.name}</span>
                      <span>{nextTier.minPoints - user.loyaltyPoints} points to go</span>
                    </div>
                    <Progress value={getProgressToNextTier()} className="h-3" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="earn">Earn Points</TabsTrigger>
              <TabsTrigger value="redeem">Redeem Rewards</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Trophy className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Total Stays</h3>
                    <div className="text-3xl font-bold text-blue-600">{user.totalStays}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Total Spent</h3>
                    <div className="text-3xl font-bold text-blue-600">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(user.totalSpent)}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Gift className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Points Earned</h3>
                    <div className="text-3xl font-bold text-blue-600">{user.loyaltyPoints.toLocaleString()}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Current Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Your {currentTier.name} Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentTier.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="earn" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pointsActivities.map((activity, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <activity.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{activity.activity}</h3>
                      <p className="text-blue-600 font-medium">{activity.points}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="redeem" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewardOptions.map((reward, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image src={reward.image || "/placeholder.svg"} alt={reward.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{reward.name}</h3>
                      <p className="text-gray-600 mb-4">{reward.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-blue-600">{reward.points.toLocaleString()} pts</span>
                        <Button
                          disabled={user.loyaltyPoints < reward.points}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          {user.loyaltyPoints >= reward.points ? "Redeem" : "Not Enough Points"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              activity.type === "earned"
                                ? "bg-green-100"
                                : activity.type === "redeemed"
                                  ? "bg-red-100"
                                  : "bg-blue-100"
                            }`}
                          >
                            {activity.type === "earned" ? (
                              <TrendingUp className="w-5 h-5 text-green-600" />
                            ) : activity.type === "redeemed" ? (
                              <Gift className="w-5 h-5 text-red-600" />
                            ) : (
                              <Star className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{activity.activity}</h4>
                            <p className="text-sm text-gray-600">{activity.date}</p>
                          </div>
                        </div>
                        <div className={`font-semibold ${activity.points > 0 ? "text-green-600" : "text-red-600"}`}>
                          {activity.points > 0 ? "+" : ""}
                          {activity.points.toLocaleString()} pts
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
