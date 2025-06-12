"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, User, Eye, EyeOff, Gift, Star } from "lucide-react"
import { useAuth } from "./auth-provider"

interface AuthDialogProps {
  children: React.ReactNode
}

export function AuthDialog({ children }: AuthDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")

  const { login, register } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(loginData.email, loginData.password)
      if (success) {
        setIsOpen(false)
        setLoginData({ email: "", password: "" })
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      const success = await register({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        phone: registerData.phone,
      })

      if (success) {
        setIsOpen(false)
        setRegisterData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        })
      } else {
        setError("Email already exists")
      }
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Welcome Back</span>
                </CardTitle>
                <p className="text-sm text-gray-600">Sign in to your Arion Suites account</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email Address</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                        placeholder="Enter your password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {error && <div className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    <p>Demo Account:</p>
                    <p>Email: demo@arionsuiteshotel.com</p>
                    <p>Password: demo123</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Gift className="w-5 h-5" />
                  <span>Join Arion Rewards</span>
                </CardTitle>
                <p className="text-sm text-gray-600">Create account and earn loyalty points</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    500 Welcome Points
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={registerData.firstName}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, firstName: e.target.value }))}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={registerData.lastName}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="register-email">Email Address</Label>
                    <Input
                      id="register-email"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-phone">Phone Number</Label>
                    <Input
                      id="register-phone"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+62 812 3456 7890"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                      placeholder="Create a strong password"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>

                  {error && <div className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>

                  <div className="text-xs text-gray-500 text-center">
                    By registering, you agree to our Terms of Service and Privacy Policy
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
