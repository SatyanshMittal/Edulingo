'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useSDK } from '@metamask/sdk-react'
import { usePathname } from 'next/navigation'

export const ConnectButton = ({ disableAutoConnect = false }) => {
  const { connect, connected, account, chainId } = useSDK()
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on a marketing page
  const isMarketingPage = pathname === '/' || pathname === '/about' || pathname === '/resources'
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // Only auto-connect if not on marketing pages and auto-connect is not disabled
  useEffect(() => {
    if (isClient && !connected && !disableAutoConnect && !isMarketingPage) {
      // Add a small delay to prevent immediate connection
      const timer = setTimeout(() => {
        connect()
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [isClient, connected, connect, disableAutoConnect, isMarketingPage])
  
  // Function to truncate wallet address
  const truncateAddress = (address) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }
  
  if (!isClient) return null
  
  return (
    <Button 
      onClick={connected ? () => {} : connect}
      variant={connected ? "outline" : "default"}
      className={connected ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100" : ""}
    >
      {connected ? truncateAddress(account) : "Connect Wallet"}
    </Button>
  )
} 