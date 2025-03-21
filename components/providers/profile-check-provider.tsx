'use client'

import { useEffect, useState } from 'react'
import { useSDK } from '@metamask/sdk-react'
import { usePathname, useRouter } from 'next/navigation'
import { ProfileModal } from '@/components/modals/profile-modal'

export function ProfileCheckProvider({ children }) {
  const { connected, account } = useSDK()
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [profileComplete, setProfileComplete] = useState(true) // Default to true to prevent flashing
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  
  // Check if we're on a marketing page
  const isMarketingPage = pathname === '/' || pathname === '/about' || pathname === '/resources'
  
  useEffect(() => {
    // Skip profile check on marketing pages
    if (isMarketingPage) {
      setIsLoading(false)
      return
    }
    
    // Only check profile if connected
    if (connected && account) {
      // This would normally be an API call to check if profile is complete
      const checkProfile = async () => {
        try {
          // Mock API call - replace with actual implementation
          // const response = await fetch(`/api/profile/${account}`)
          // const data = await response.json()
          // setProfileComplete(data.isComplete)
          
          // For demo, we'll just set a timeout to simulate API call
          setTimeout(() => {
            // This is where you'd check if profile is complete
            // For now, we'll just use localStorage to simulate
            const isComplete = localStorage.getItem(`profile-complete-${account}`) === 'true'
            setProfileComplete(isComplete)
            setShowProfileModal(!isComplete)
            setIsLoading(false)
          }, 500)
        } catch (error) {
          console.error("Error checking profile:", error)
          setIsLoading(false)
        }
      }
      
      checkProfile()
    } else {
      setIsLoading(false)
    }
  }, [connected, account, isMarketingPage])
  
  const handleProfileComplete = () => {
    // Save to localStorage for demo purposes
    if (account) {
      localStorage.setItem(`profile-complete-${account}`, 'true')
    }
    setProfileComplete(true)
    setShowProfileModal(false)
  }
  
  return (
    <>
      {children}
      
      {showProfileModal && !isMarketingPage && (
        <ProfileModal 
          isOpen={showProfileModal} 
          onClose={() => setShowProfileModal(false)}
          onComplete={handleProfileComplete}
        />
      )}
    </>
  )
} 