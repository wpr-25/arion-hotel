"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  membershipTier: "Silver" | "Gold" | "Platinum" | "Diamond"
  loyaltyPoints: number
  joinDate: string
  totalStays: number
  totalSpent: number
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (
    userData: Omit<User, "id" | "membershipTier" | "loyaltyPoints" | "joinDate" | "totalStays" | "totalSpent">,
  ) => Promise<boolean>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
  addLoyaltyPoints: (points: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = localStorage.getItem("arion_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem("arion_users") || "[]")
    const foundUser = users.find((u: any) => u.email === email && u.password === password)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("arion_user", JSON.stringify(userWithoutPassword))
      return true
    }

    // Demo user for presentation
    if (email === "demo@arionsuiteshotel.com" && password === "demo123") {
      const demoUser: User = {
        id: "demo-user",
        email: "demo@arionsuiteshotel.com",
        firstName: "John",
        lastName: "Doe",
        phone: "+62 812 3456 7890",
        membershipTier: "Gold",
        loyaltyPoints: 2850,
        joinDate: "2023-01-15",
        totalStays: 12,
        totalSpent: 25000000,
      }
      setUser(demoUser)
      localStorage.setItem("arion_user", JSON.stringify(demoUser))
      return true
    }

    return false
  }

  const register = async (
    userData: Omit<User, "id" | "membershipTier" | "loyaltyPoints" | "joinDate" | "totalStays" | "totalSpent">,
  ): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const users = JSON.parse(localStorage.getItem("arion_users") || "[]")

    // Check if user already exists
    if (users.find((u: any) => u.email === userData.email)) {
      return false
    }

    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      membershipTier: "Silver",
      loyaltyPoints: 500, // Welcome bonus
      joinDate: new Date().toISOString().split("T")[0],
      totalStays: 0,
      totalSpent: 0,
    }

    // Save to localStorage
    users.push({ ...newUser, password: "temp123" }) // In real app, hash password
    localStorage.setItem("arion_users", JSON.stringify(users))

    setUser(newUser)
    localStorage.setItem("arion_user", JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("arion_user")
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem("arion_user", JSON.stringify(updatedUser))
    }
  }

  const addLoyaltyPoints = (points: number) => {
    if (user) {
      const newPoints = user.loyaltyPoints + points
      let newTier = user.membershipTier

      // Update tier based on points
      if (newPoints >= 10000) newTier = "Diamond"
      else if (newPoints >= 5000) newTier = "Platinum"
      else if (newPoints >= 2000) newTier = "Gold"
      else newTier = "Silver"

      updateUser({ loyaltyPoints: newPoints, membershipTier: newTier })
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser, addLoyaltyPoints }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
