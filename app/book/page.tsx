"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Calendar, Users, Star, CreditCard, CheckCircle, Gift, Percent } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BookPage() {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    roomType: "",
    guestInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      specialRequests: "",
    },
    addOns: [],
    paymentMethod: "",
  })

  const roomTypes = [
    {
      id: "superior",
      name: "Superior Room",
      price: 650000,
      originalPrice: 750000,
      size: "28m²",
      guests: 2,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "City View"],
      features: ["Queen Bed", "Work Desk", "Private Bathroom", "Room Service"],
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      price: 850000,
      originalPrice: 950000,
      size: "32m²",
      guests: 2,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Free WiFi", "Air Conditioning", "Coffee Maker", "City View"],
      features: ["King Bed", "Seating Area", "Marble Bathroom", "Balcony"],
    },
    {
      id: "executive",
      name: "Executive Suite",
      price: 1250000,
      originalPrice: 1450000,
      size: "45m²",
      guests: 3,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Free WiFi", "Nespresso Machine", "Mini Kitchen", "Ocean View"],
      features: ["King Bed + Sofa Bed", "Living Area", "Jacuzzi Tub", "Executive Lounge Access"],
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      price: 2500000,
      originalPrice: 2850000,
      size: "80m²",
      guests: 4,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Premium WiFi", "Full Kitchen", "Butler Service", "Panoramic View"],
      features: ["Master Bedroom", "Separate Living Room", "Private Balcony", "Dedicated Butler"],
    },
  ]

  const addOnServices = [
    { id: "airport-transfer", name: "Airport Transfer (Round Trip)", price: 350000 },
    { id: "spa-package", name: "Couples Spa Package", price: 850000 },
    { id: "romantic-dinner", name: "Romantic Dinner for Two", price: 750000 },
    { id: "late-checkout", name: "Late Check-out (until 6 PM)", price: 200000 },
    { id: "extra-bed", name: "Extra Bed", price: 300000 },
    { id: "breakfast", name: "Breakfast for Two", price: 180000 },
  ]

  const selectedRoom = roomTypes.find((room) => room.id === bookingData.roomType)
  const selectedAddOns = addOnServices.filter((addon) => bookingData.addOns.includes(addon.id))

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn)
      const checkOut = new Date(bookingData.checkOut)
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 1
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const roomTotal = selectedRoom ? selectedRoom.price * nights * Number.parseInt(bookingData.rooms) : 0
    const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0)
    const subtotal = roomTotal + addOnsTotal
    const tax = subtotal * 0.11 // 11% tax
    const serviceCharge = subtotal * 0.1 // 10% service charge
    return {
      roomTotal,
      addOnsTotal,
      subtotal,
      tax,
      serviceCharge,
      total: subtotal + tax + serviceCharge,
    }
  }

  const handleInputChange = (field: string, value: string) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".")
      setBookingData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value,
        },
      }))
    } else {
      setBookingData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleAddOnChange = (addonId: string, checked: boolean) => {
    setBookingData((prev) => ({
      ...prev,
      addOns: checked ? [...prev.addOns, addonId] : prev.addOns.filter((id) => id !== addonId),
    }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Book Your Stay</h1>
            <p className="text-xl text-blue-100">Experience luxury at Arion Suites Hotel</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber ? "bg-white text-blue-600" : "bg-blue-500 text-white"
                    }`}
                  >
                    {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-white" : "bg-blue-500"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-8 text-sm text-blue-100">
            <span className={step >= 1 ? "text-white font-semibold" : ""}>Dates & Rooms</span>
            <span className={step >= 2 ? "text-white font-semibold" : ""}>Guest Details</span>
            <span className={step >= 3 ? "text-white font-semibold" : ""}>Add-ons</span>
            <span className={step >= 4 ? "text-white font-semibold" : ""}>Payment</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Dates & Room Selection */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Select Dates & Room
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkin">Check-in Date</Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) => handleInputChange("checkIn", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout">Check-out Date</Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) => handleInputChange("checkOut", e.target.value)}
                        min={bookingData.checkIn || new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select value={bookingData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Guest{num > 1 ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="rooms">Number of Rooms</Label>
                      <Select value={bookingData.rooms} onValueChange={(value) => handleInputChange("rooms", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Room{num > 1 ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Room Selection */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Choose Your Room</Label>
                    <div className="space-y-4">
                      {roomTypes.map((room) => (
                        <Card
                          key={room.id}
                          className={`cursor-pointer transition-all ${
                            bookingData.roomType === room.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
                          }`}
                          onClick={() => handleInputChange("roomType", room.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                              <div className="relative w-24 h-20 flex-shrink-0">
                                <Image
                                  src={room.image || "/placeholder.svg"}
                                  alt={room.name}
                                  fill
                                  className="object-cover rounded"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h3 className="font-semibold text-lg">{room.name}</h3>
                                    <p className="text-gray-600 text-sm">
                                      {room.size} • Up to {room.guests} guests
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-sm text-gray-500 line-through">
                                      {formatCurrency(room.originalPrice)}
                                    </div>
                                    <div className="text-xl font-bold text-blue-600">{formatCurrency(room.price)}</div>
                                    <div className="text-xs text-gray-500">per night</div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {room.amenities.slice(0, 4).map((amenity, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {amenity}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={nextStep}
                      disabled={!bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Continue to Guest Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Guest Information */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Guest Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={bookingData.guestInfo.firstName}
                        onChange={(e) => handleInputChange("guestInfo.firstName", e.target.value)}
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={bookingData.guestInfo.lastName}
                        onChange={(e) => handleInputChange("guestInfo.lastName", e.target.value)}
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.guestInfo.email}
                        onChange={(e) => handleInputChange("guestInfo.email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={bookingData.guestInfo.phone}
                        onChange={(e) => handleInputChange("guestInfo.phone", e.target.value)}
                        placeholder="+62 xxx xxxx xxxx"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country">Country/Region *</Label>
                    <Select
                      value={bookingData.guestInfo.country}
                      onValueChange={(value) => handleInputChange("guestInfo.country", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="malaysia">Malaysia</SelectItem>
                        <SelectItem value="thailand">Thailand</SelectItem>
                        <SelectItem value="philippines">Philippines</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="japan">Japan</SelectItem>
                        <SelectItem value="south-korea">South Korea</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <textarea
                      id="specialRequests"
                      value={bookingData.guestInfo.specialRequests}
                      onChange={(e) => handleInputChange("guestInfo.specialRequests", e.target.value)}
                      placeholder="Any special requests or preferences..."
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={
                        !bookingData.guestInfo.firstName ||
                        !bookingData.guestInfo.lastName ||
                        !bookingData.guestInfo.email ||
                        !bookingData.guestInfo.phone
                      }
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Continue to Add-ons
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Add-on Services */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gift className="w-5 h-5 mr-2" />
                    Enhance Your Stay
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">Add these optional services to make your stay even more memorable.</p>

                  <div className="space-y-4">
                    {addOnServices.map((addon) => (
                      <div
                        key={addon.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={addon.id}
                            checked={bookingData.addOns.includes(addon.id)}
                            onCheckedChange={(checked) => handleAddOnChange(addon.id, checked as boolean)}
                          />
                          <div>
                            <Label htmlFor={addon.id} className="font-medium cursor-pointer">
                              {addon.name}
                            </Label>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-blue-600">{formatCurrency(addon.price)}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                    <div className="space-y-3">
                      {[
                        { id: "credit-card", name: "Credit/Debit Card", desc: "Visa, Mastercard, American Express" },
                        { id: "bank-transfer", name: "Bank Transfer", desc: "Direct bank transfer" },
                        { id: "digital-wallet", name: "Digital Wallet", desc: "GoPay, OVO, DANA" },
                        { id: "pay-at-hotel", name: "Pay at Hotel", desc: "Pay during check-in" },
                      ].map((method) => (
                        <Card
                          key={method.id}
                          className={`cursor-pointer transition-all ${
                            bookingData.paymentMethod === method.id
                              ? "ring-2 ring-blue-500 bg-blue-50"
                              : "hover:shadow-md"
                          }`}
                          onClick={() => handleInputChange("paymentMethod", method.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-4 h-4 rounded-full border-2 ${
                                  bookingData.paymentMethod === method.id
                                    ? "bg-blue-500 border-blue-500"
                                    : "border-gray-300"
                                }`}
                              />
                              <div>
                                <div className="font-medium">{method.name}</div>
                                <div className="text-sm text-gray-600">{method.desc}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {bookingData.paymentMethod === "credit-card" && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input id="cardName" placeholder="Name on card" />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button
                      disabled={!bookingData.paymentMethod}
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      Complete Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Hotel Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-lg">Arion Suites Hotel</h3>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Dates */}
                {bookingData.checkIn && bookingData.checkOut && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Dates</span>
                      <span className="text-sm text-gray-600">
                        {calculateNights()} night{calculateNights() > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Check-in: {new Date(bookingData.checkIn).toLocaleDateString()}</div>
                      <div>Check-out: {new Date(bookingData.checkOut).toLocaleDateString()}</div>
                    </div>
                  </div>
                )}

                {/* Room Details */}
                {selectedRoom && (
                  <div>
                    <div className="font-medium mb-2">Room Details</div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>{selectedRoom.name}</span>
                        <span>{formatCurrency(selectedRoom.price)}/night</span>
                      </div>
                      <div className="text-gray-600">
                        {bookingData.rooms} room{Number.parseInt(bookingData.rooms) > 1 ? "s" : ""} •{" "}
                        {bookingData.guests} guest{Number.parseInt(bookingData.guests) > 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                )}

                {/* Add-ons */}
                {selectedAddOns.length > 0 && (
                  <div>
                    <div className="font-medium mb-2">Add-on Services</div>
                    <div className="text-sm space-y-1">
                      {selectedAddOns.map((addon) => (
                        <div key={addon.id} className="flex justify-between">
                          <span>{addon.name}</span>
                          <span>{formatCurrency(addon.price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Separator />

                {/* Price Breakdown */}
                {selectedRoom && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        Room ({calculateNights()} night{calculateNights() > 1 ? "s" : ""})
                      </span>
                      <span>{formatCurrency(calculateTotal().roomTotal)}</span>
                    </div>
                    {selectedAddOns.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Add-on Services</span>
                        <span>{formatCurrency(calculateTotal().addOnsTotal)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span>Tax (11%)</span>
                      <span>{formatCurrency(calculateTotal().tax)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Service Charge (10%)</span>
                      <span>{formatCurrency(calculateTotal().serviceCharge)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-blue-600">{formatCurrency(calculateTotal().total)}</span>
                    </div>
                  </div>
                )}

                {/* Special Offers */}
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-800">
                    <Percent className="w-4 h-4" />
                    <span className="text-sm font-semibold">Special Offer: Save 15% on stays over 3 nights!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
