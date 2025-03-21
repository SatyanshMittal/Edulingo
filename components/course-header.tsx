'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useSDK } from '@metamask/sdk-react'

export const CourseHeader = () => {
  const { connected, account } = useSDK()

  // Function to truncate wallet address
  const truncateAddress = (address: string) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <header className="w-full bg-blue-700 px-6 py-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Edulingo Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="text-white text-xl font-bold">Edu Lingo</span>
        </Link>
        
        {/* Main Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/courses" className="text-white font-medium hover:text-blue-200 transition">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Courses
            </span>
          </Link>
          <Link href="/about" className="text-white font-medium hover:text-blue-200 transition">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              About Us
            </span>
          </Link>
          <Link href="/resources" className="text-white font-medium hover:text-blue-200 transition">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Resources
            </span>
          </Link>
        </nav>
        
        {/* Wallet & CTA */}
        <div className="flex items-center gap-3">
          {connected && account ? (
            <Button variant="primaryOutline" className="text-white border-blue-400 hover:bg-blue-600">
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                {truncateAddress(account)}
              </span>
            </Button>
          ) : (
            <Button className="bg-blue-600 hover:bg-blue-700 border border-blue-400 text-white">
              Connect Wallet
            </Button>
          )}
          <Link href="/learn">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
              START LEARNING
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 