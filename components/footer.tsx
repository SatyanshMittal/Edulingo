import Link from 'next/link'
import { links } from '@/config'

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-50 border-t border-blue-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-blue-700 font-bold text-lg mb-4">Edu Lingo</h3>
            <p className="text-slate-600">
              Learn languages while earning rewards with blockchain technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-blue-700 font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-slate-600 hover:text-blue-600 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-600 hover:text-blue-600 transition">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-blue-600 transition">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-blue-700 font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={links.sourceCode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  Source Code
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-blue-600 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-blue-100 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Edu Lingo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 