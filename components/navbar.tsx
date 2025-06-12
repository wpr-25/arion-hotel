"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import { AuthDialog } from "./auth-dialog"
import { UserMenu } from "./user-menu"
import { useAuth } from "./auth-provider"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Facilities", href: "/facilities" },
  { name: "Dining", href: "/dining" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@arionsuiteshotel.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Arion Suites</span>
                <span className="text-xs text-gray-500 -mt-1">HOTEL</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Book Now Button */}
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/book">Book Now</Link>
              </Button>

              {/* User Menu or Auth */}
              {user ? (
                <UserMenu />
              ) : (
                <AuthDialog>
                  <Button variant="outline">Sign In</Button>
                </AuthDialog>
              )}

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                          pathname === item.href ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {!user && (
                      <AuthDialog>
                        <Button variant="outline" className="w-full mt-4">
                          Sign In / Register
                        </Button>
                      </AuthDialog>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
