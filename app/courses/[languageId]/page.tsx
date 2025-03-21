'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check, ChevronRight, MessageCircle, Terminal, Trophy, Users } from 'lucide-react'

// This would normally come from an API or database
const courseData = {
  spanish: {
    name: 'Spanish',
    flag: '/flags/spain.png',
    levels: [
      {
        id: 'beginner',
        name: 'Beginner',
        modules: 5,
        completed: 0,
        description: 'Learn the basics of Spanish grammar and common phrases',
        unlocked: true,
      },
      {
        id: 'intermediate',
        name: 'Intermediate',
        modules: 8,
        completed: 0,
        description: 'Build your vocabulary and improve conversation skills',
        unlocked: false,
      },
      {
        id: 'advanced',
        name: 'Advanced',
        modules: 6,
        completed: 0,
        description: 'Master complex grammar and native-level expressions',
        unlocked: false,
      }
    ],
    stats: {
      learners: '12.5M',
      tokenRewards: '5 EDU per completed module',
      stakeRequired: '50 EDU',
    }
  },
  french: {
    name: 'French',
    flag: '/flags/france.png',
    levels: [
      {
        id: 'beginner',
        name: 'Beginner',
        modules: 6,
        completed: 0,
        description: 'Start your French journey with essential vocabulary and grammar',
        unlocked: true,
      },
      {
        id: 'intermediate',
        name: 'Intermediate',
        modules: 7,
        completed: 0,
        description: 'Improve your French with advanced concepts and cultural contexts',
        unlocked: false,
      },
      {
        id: 'advanced',
        name: 'Advanced',
        modules: 5,
        completed: 0,
        description: 'Achieve fluency with native-level expressions and literature',
        unlocked: false,
      }
    ],
    stats: {
      learners: '8.2M',
      tokenRewards: '5 EDU per completed module',
      stakeRequired: '50 EDU',
    }
  },
}

export default function CourseDetailPage({ params }) {
  const { languageId } = params
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  
  // Check if course exists
  if (!courseData[languageId]) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8">The course you're looking for does not exist.</p>
        <Link href="/courses">
          <Button className="bg-blue-600 text-white">
            Browse All Courses
          </Button>
        </Link>
      </div>
    )
  }
  
  const course = courseData[languageId]
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left side - Course info */}
        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 relative">
              <Image 
                src={course.flag} 
                alt={course.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-800">{course.name}</h1>
              <div className="flex items-center gap-3 text-slate-500">
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.stats.learners} learners
                </span>
                <span className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1" />
                  Earn up to {course.levels.reduce((sum, level) => sum + level.modules, 0) * 5} EDU tokens
                </span>
              </div>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="bg-blue-50 border border-blue-100">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="rewards">Blockchain Rewards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Course Overview</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to our comprehensive {course.name} course! This program is designed to take you 
                  from beginner to fluent, with a structured approach to learning that incorporates 
                  listening, speaking, reading, and writing skills.
                </p>
                
                <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">What You'll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Essential vocabulary and everyday phrases</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Grammar fundamentals and sentence construction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Listening comprehension with native speakers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Cultural insights and context</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced conversation techniques</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="mt-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Course Curriculum</h2>
              
              <div className="space-y-6">
                {course.levels.map((level, index) => (
                  <Card key={level.id} className={`border ${level.unlocked ? 'border-blue-200' : 'border-gray-200 opacity-75'}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-blue-800 mb-2">
                            Level {index + 1}: {level.name}
                          </h3>
                          <p className="text-gray-600 mb-3">{level.description}</p>
                          
                          <div className="flex items-center gap-x-4 text-sm text-gray-500 mb-4">
                            <span>{level.modules} modules</span>
                            <span>{level.completed} / {level.modules} completed</span>
                          </div>
                          
                          <Progress
                            value={(level.completed / level.modules) * 100}
                            className="h-2 bg-blue-100"
                            indicatorClassName="bg-blue-600"
                          />
                        </div>
                        
                        <Button
                          className={`${level.unlocked ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'} text-white`}
                          disabled={!level.unlocked}
                          onClick={() => router.push(`/learn/${languageId}/${level.id}`)}
                        >
                          {level.unlocked ? (
                            <>
                              Start Learning
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </>
                          ) : (
                            'Locked'
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rewards" className="mt-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                  <Terminal className="h-6 w-6 mr-2" />
                  Blockchain Rewards
                </h2>
                
                <p className="text-gray-700 mb-6">
                  This course integrates with our blockchain reward system, allowing you to earn EDU tokens as you progress. 
                  Tokens can be used for premium features, exchanged or staked for additional benefits.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-white/80 border-blue-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">Earning Structure</h3>
                      <p className="text-sm text-slate-600">{course.stats.tokenRewards}</p>
                      <p className="text-sm text-slate-600 mt-1">Complete challenges for bonus tokens</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/80 border-blue-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">Staking Requirement</h3>
                      <p className="text-sm text-slate-600">Stake {course.stats.stakeRequired} to unlock all levels</p>
                      <p className="text-sm text-slate-600 mt-1">Refundable upon course completion</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Connect Wallet to Stake & Earn
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Right side - Sidebar */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card className="border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
              <h3 className="font-bold text-lg mb-1">Ready to start?</h3>
              <p className="text-blue-100 text-sm">Begin your {course.name} journey today</p>
            </div>
            <CardContent className="p-6">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
                onClick={() => router.push(`/learn/${languageId}/beginner`)}
              >
                Start Learning
              </Button>
              <p className="text-center text-sm text-slate-500">
                No payment required for basic access
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-blue-800 mb-2">Course Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>{course.levels.reduce((sum, level) => sum + level.modules, 0)} interactive modules</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Regular quizzes and assessments</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Pronunciation practice</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Blockchain reward opportunities</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-4">Community Discussion</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm text-slate-700">
                    "This course has been amazing! I'm learning so much and the token rewards are a great motivator."
                  </p>
                  <p className="text-xs text-slate-500 mt-1">- Maria S.</p>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm text-slate-700">
                    "The staking mechanism really helped me commit to finishing the whole course."
                  </p>
                  <p className="text-xs text-slate-500 mt-1">- John D.</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-200">
                <MessageCircle className="h-4 w-4 mr-2" />
                Join Discussion
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 