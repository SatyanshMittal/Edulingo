'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  Play, FileText, Award, CheckCircle, 
  BarChart, Clock, Users, Wallet
} from 'lucide-react'
import React from 'react'

// This would come from an API or database in a real app
const coursesData = {
  spanish: {
    title: "Spanish for Beginners to Advanced",
    description: "Master Spanish from the ground up with our comprehensive course. Learn vocabulary, grammar, and conversation skills through interactive lessons.",
    author: "Maria Rodriguez",
    authorImage: "/avatars/maria.jpg",
    image: "/flags/spain.png",
    progress: 23,
    stats: {
      totalLessons: 42,
      totalHours: 24,
      studentsEnrolled: "12.5K",
      lastUpdated: "March 2023"
    },
    nextLesson: {
      moduleId: "basics",
      lessonId: "introductions",
      title: "Introducing Yourself",
      duration: "7:22"
    },
    modules: [
      {
        id: "introduction",
        title: "Introduction to Spanish",
        complete: true,
        lessonsCount: 4,
        completedLessons: 3,
      },
      {
        id: "basics",
        title: "Basic Conversations",
        complete: false,
        lessonsCount: 4,
        completedLessons: 0,
      },
      {
        id: "intermediate",
        title: "Intermediate Grammar",
        complete: false,
        locked: true,
        lessonsCount: 3,
        completedLessons: 0,
      },
      {
        id: "advanced",
        title: "Advanced Conversation",
        complete: false,
        locked: true,
        lessonsCount: 3,
        completedLessons: 0,
      },
    ],
    tokenRewards: {
      earned: 8,
      available: 92,
      perLesson: 2,
      perModule: 10,
      completion: 50
    }
  },
  // Additional languages would be defined here
};

export default function CourseOverviewPage({ 
  params 
}: { 
  params: { languageId: string } 
}) {
  // Access the languageId directly from params
  const languageId = params.languageId;
  
  const router = useRouter();
  
  const courseData = coursesData[languageId];
  
  if (!courseData) {
    return (
      <div className="flex flex-col items-center justify-center p-12 h-[80vh]">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Coming Soon!</h1>
          <p className="text-slate-600 mb-6">
            We're working hard to bring you this exciting new language course. 
            Check back soon for updates or subscribe to get notified when it launches.
          </p>
          <Image 
            src="/illustrations/coming-soon.svg" 
            alt="Coming Soon" 
            width={250} 
            height={200} 
            className="mx-auto mb-6"
          />
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => router.push('/courses')}
          >
            Explore Available Courses
          </Button>
        </div>
      </div>
    );
  }
  
  const continueToNextLesson = () => {
    router.push(`/learn/${languageId}/${courseData.nextLesson.moduleId}/${courseData.nextLesson.lessonId}`);
  };
  
  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">{courseData.title}</h1>
          <p className="text-slate-600 mb-6">{courseData.description}</p>
          
          {/* Continue Learning Card */}
          <Card className="mb-8 border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white">
              <h2 className="text-xl font-bold mb-1">Continue Learning</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Up next: {courseData.nextLesson.title}</p>
                  <p className="text-sm text-blue-200 mt-1">Duration: {courseData.nextLesson.duration}</p>
                </div>
                <Button 
                  className="bg-white text-blue-700 hover:bg-blue-50"
                  onClick={continueToNextLesson}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Continue
                </Button>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-blue-100">Your Progress</span>
                  <span className="text-xs text-blue-100">{courseData.progress}% Complete</span>
                </div>
                <Progress value={courseData.progress} className="h-2" />
              </div>
            </div>
          </Card>
          
          {/* Course Content Overview */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Course Content</h2>
            <div className="space-y-4">
              {courseData.modules.map((module) => (
                <Card key={module.id} className="border-slate-200">
                  <CardContent className="p-0">
                    <div className="p-4 flex items-center justify-between border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          {module.complete ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : module.locked ? (
                            <div className="h-3 w-3 rounded-full bg-slate-300" />
                          ) : (
                            <div className="h-3 w-3 rounded-full bg-blue-600" />
                          )}
                        </div>
                        <div>
                          <h3 className={cn(
                            "font-semibold",
                            module.locked ? "text-slate-400" : "text-slate-800"
                          )}>
                            {module.title}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {module.completedLessons}/{module.lessonsCount} lessons completed
                          </p>
                        </div>
                      </div>
                      
                      {module.locked ? (
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Unlock with 15 EDU
                        </Button>
                      ) : module.complete ? (
                        <Button variant="outline" className="border-green-200 text-green-600">
                          Completed
                        </Button>
                      ) : (
                        <Button variant="outline" className="border-blue-200 text-blue-600"
                          onClick={() => router.push(`/learn/${languageId}/${module.id}/${courseData.modules[0].id}`)}>
                          Continue
                        </Button>
                      )}
                    </div>
                    
                    {!module.locked && (
                      <div className="p-4 bg-slate-50">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <FileText className="h-4 w-4" />
                            <span>{module.lessonsCount} lessons</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Award className="h-4 w-4" />
                            <span>{module.lessonsCount * courseData.tokenRewards.perLesson + courseData.tokenRewards.perModule} EDU tokens</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="md:w-80 space-y-6">
          <Card className="border-slate-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Course Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Lessons</p>
                    <p className="text-lg font-semibold text-slate-800">{courseData.stats.totalLessons}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Hours</p>
                    <p className="text-lg font-semibold text-slate-800">{courseData.stats.totalHours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-600">Students Enrolled</p>
                    <p className="text-lg font-semibold text-slate-800">{courseData.stats.studentsEnrolled}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-600">Last Updated</p>
                    <p className="text-lg font-semibold text-slate-800">{courseData.stats.lastUpdated}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-1.5">
                <Wallet className="h-5 w-5" />
                Token Rewards
              </h3>
              
              <div className="mb-3 bg-white rounded-lg p-3 border border-blue-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Earned so far</p>
                  <p className="text-xl font-bold text-blue-600">{courseData.tokenRewards.earned} EDU</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              
              <div className="mb-4 bg-white rounded-lg p-3 border border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Available to earn</p>
                <p className="text-xl font-bold text-slate-800 mb-2">{courseData.tokenRewards.available} EDU</p>
                
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Per lesson completed</span>
                    <span className="font-medium text-slate-700">{courseData.tokenRewards.perLesson} EDU</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Per module completed</span>
                    <span className="font-medium text-slate-700">{courseData.tokenRewards.perModule} EDU</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Course completion bonus</span>
                    <span className="font-medium text-slate-700">{courseData.tokenRewards.completion} EDU</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                View Reward History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Utility function
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
} 