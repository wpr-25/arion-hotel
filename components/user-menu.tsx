"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Settings, Calendar, Gift, LogOut, Crown, Star } from "lucide-react"
import { useAuth } from "./auth-provider"

export function UserMenu() {
  const { user, logout } = useAuth()

  if (!user) return null

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Diamond":
        return "bg-gradient-to-r from-purple-600 to-pink-600"
      case "Platinum":
        return "bg-gradient-to-r from-gray-400 to-gray-600"
      case "Gold":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      default:
        return "bg-gradient-to-r from-gray-300 to-gray-500"
    }
  }

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "Diamond":
        return <Crown className="w-3 h-3" />
      case "Platinum":
        return <Star className="w-3 h-3" />
      case "Gold":
        return <Star className="w-3 h-3" />
      default:
        return <Star className="w-3 h-3" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">
                {user.firstName} {user.lastName}
              </p>
              <Badge className={`${getTierColor(user.membershipTier)} text-white text-xs`}>
                {getTierIcon(user.membershipTier)}
                <span className="ml-1">{user.membershipTier}</span>
              </Badge>
            </div>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Loyalty Points</span>
              <span className="font-semibold text-blue-600">{user.loyaltyPoints.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Total Stays</span>
              <span className="font-semibold">{user.totalStays}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Calendar className="mr-2 h-4 w-4" />
          <span>My Bookings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Gift className="mr-2 h-4 w-4" />
          <span>Rewards & Benefits</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
