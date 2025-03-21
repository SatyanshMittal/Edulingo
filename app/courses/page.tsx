'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search } from 'lucide-react'

// Add this interface to properly type the language object
interface LanguageCourse {
  id: string;
  name: string;
  flag: string;
  levels: number;
  users: string;
  description: string;
  blockchain: boolean;
  popular: boolean;
}

const languages = [
  {
    id: 'spanish',
    name: 'Spanish',
    flag: '/flags/spain.png',
    levels: 3,
    users: '12.5M',
    description: 'Learn Spanish through interactive lessons, quizzes, and earn rewards.',
    blockchain: true,
    popular: true,
  },
  {
    id: 'french',
    name: 'French',
    flag: '/flags/france.png',
    levels: 3,
    users: '8.2M',
    description: 'Master French with our immersive course. Perfect for beginners to advanced.',
    blockchain: true,
    popular: true,
  },
  {
    id: 'japanese',
    name: 'Japanese',
    flag: '/flags/japan.png',
    levels: 2,
    users: '6.3M',
    description: 'Learn Japanese characters, vocabulary and culture through gamified lessons.',
    blockchain: true,
    popular: false,
  },
  {
    id: 'german',
    name: 'German',
    flag: '/flags/germany.png',
    levels: 3,
    users: '5.7M',
    description: 'Start your German language journey with structured courses and earn tokens.',
    blockchain: true,
    popular: false,
  },
  {
    id: 'italian',
    name: 'Italian',
    flag: '/flags/italy.png',
    levels: 2,
    users: '4.2M',
    description: 'Dive into Italian with our engaging lessons focusing on conversation skills.',
    blockchain: false,
    popular: false,
  },
  {
    id: 'mandarin',
    name: 'Mandarin',
    flag: '/flags/china.png',
    levels: 3,
    users: '9.8M',
    description: 'Learn the world\'s most spoken language with our comprehensive course.',
    blockchain: false,
    popular: true,
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Language Course</h1>
          <p className="text-xl max-w-2xl mb-8">
            Explore our wide selection of language courses. Learn at your own pace and earn rewards with blockchain technology.
          </p>
          <div className="max-w-md relative">
            <Input
              placeholder="Search languages..."
              className="pl-10 bg-white/10 border-white/20 placeholder:text-white/60 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/60" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-blue-50">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLanguages.map(language => (
                <CourseCard key={language.id} language={language} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLanguages
                .filter(lang => lang.popular)
                .map(language => (
                  <CourseCard key={language.id} language={language} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="blockchain" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLanguages
                .filter(lang => lang.blockchain)
                .map(language => (
                  <CourseCard key={language.id} language={language} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function CourseCard({ language }: { language: LanguageCourse }) {
  const router = useRouter()
  
  // Map of greetings in each language
  const greetings: Record<string, string> = {
    spanish: '¡Hola!',
    french: 'Bonjour!',
    japanese: 'こんにちは',
    german: 'Hallo!',
    italian: 'Ciao!',
    mandarin: '你好',
  }

  return (
    <Card className="overflow-hidden border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-gradient-to-r from-blue-500 to-blue-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
              <span className="text-blue-600 font-bold text-xl">
                {greetings[language.id] || 'Hello'}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-blue-800">{language.name}</h3>
          <div className="flex items-center gap-2">
            {language.blockchain && (
              <Badge className="bg-gradient-to-r from-blue-600 to-blue-800">
                EDU Rewards
              </Badge>
            )}
            {language.popular && (
              <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                Popular
              </Badge>
            )}
          </div>
        </div>
        <p className="text-slate-600 mb-4">{language.description}</p>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{language.levels} Levels</span>
          <span>{language.users} Learners</span>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50 border-t border-slate-100">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => router.push(`/learn/${language.id}`)}
        >
          Start Learning
        </Button>
      </CardFooter>
    </Card>
  )
} 