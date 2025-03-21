'use client'

import { useEffect, useState } from 'react'
import { MetaMaskProvider } from '@metamask/sdk-react'

export function MetaMaskProviderWrapper({ children }) {
  const [mounted, setMounted] = useState(false)
  
  // Only render the provider after component is mounted (client-side)
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Return null or a loading state on server
  if (!mounted) return <>{children}</>
  
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Edu Lingo",
          url: typeof window !== 'undefined' ? window.location.href : 'https://edulingo.com',
        }
      }}
    >
      {children}
    </MetaMaskProvider>
  )
} 