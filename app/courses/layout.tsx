import React from 'react'
import { CourseHeader } from '@/components/course-header'

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <CourseHeader />
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-8 bg-blue-50 border-t border-blue-100 text-center text-slate-500">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Edu Lingo. All rights reserved.</p>
          <p className="mt-2">
            <a 
              href="https://github.com/rahulsainlll/edulingo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Source Code
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
} 