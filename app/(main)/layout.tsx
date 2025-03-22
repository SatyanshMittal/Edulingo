//@ts-nocheck
import React from 'react'

import { MobileHeader } from '@/components/mobile-header'
import { Sidebar } from '@/components/sidebar'

// Use a simple function with explicit return type
export default function MainLayout({ 
  children 
}: { 
  children: React.ReactNode 
}): JSX.Element {
  return (
    <div className="h-full bg-white text-slate-900">
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pl-[206px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] pt-6 lg:pt-4 px-4">{children}</div>
      </main>
    </div>
  )
}

