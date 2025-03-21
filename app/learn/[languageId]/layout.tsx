'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  ChevronLeft, Menu, X, CheckCircle, Lock, Play, 
  FileText, MessageCircle, Award, Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

// Mock course data - in a real app, this would come from an API
const coursesData = {
  spanish: {
    title: "Spanish for Beginners to Advanced",
    author: "Maria Rodriguez",
    image: "/flags/spain.png",
    progress: 23,
    modules: [
      {
        id: "introduction",
        title: "Introduction to Spanish",
        complete: true,
        lessons: [
          { id: "welcome", title: "Welcome to the Course", type: "video", duration: "5:32", complete: true },
          { id: "pronunciation", title: "Basic Pronunciation Guide", type: "video", duration: "12:45", complete: true },
          { id: "alphabet", title: "The Spanish Alphabet", type: "practice", duration: "8:20", complete: true },
          { id: "greetings", title: "Common Greetings", type: "video", duration: "9:15", complete: false },
        ],
      },
      {
        id: "basics",
        title: "Basic Conversations",
        complete: false,
        lessons: [
          { id: "introductions", title: "Introducing Yourself", type: "video", duration: "7:22", complete: false },
          { id: "numbers", title: "Numbers 1-100", type: "practice", duration: "15:00", complete: false },
          { id: "time", title: "Telling Time", type: "quiz", duration: "10:30", complete: false },
          { id: "directions", title: "Asking for Directions", type: "video", duration: "11:15", complete: false },
        ],
      },
      {
        id: "intermediate",
        title: "Intermediate Grammar",
        complete: false,
        locked: true,
        lessons: [
          { id: "past-tense", title: "Past Tense Verbs", type: "video", duration: "14:22", complete: false },
          { id: "future-tense", title: "Future Tense", type: "practice", duration: "12:40", complete: false },
          { id: "subjunctive", title: "Introduction to Subjunctive", type: "video", duration: "18:35", complete: false },
        ],
      },
      {
        id: "advanced",
        title: "Advanced Conversation",
        complete: false,
        locked: true,
        lessons: [
          { id: "idioms", title: "Common Idioms", type: "video", duration: "16:22", complete: false },
          { id: "slang", title: "Regional Slang", type: "practice", duration: "13:10", complete: false },
          { id: "discussion", title: "Group Discussion Practice", type: "interactive", duration: "25:00", complete: false },
        ],
      },
    ],
    tokenRewards: {
      perLesson: 2,
      perModule: 10,
      completion: 50
    }
  },
  // Additional languages would be defined here
};

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { languageId: string };
}) {
  // Use React.use to unwrap the params promise
  const unwrappedParams = React.use(params);
  const languageId = unwrappedParams.languageId;
  
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const courseData = coursesData[languageId] || {
    title: "Course Not Found",
    author: "",
    image: "",
    progress: 0,
    modules: [],
  };
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Navigation */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center px-4 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-slate-100 lg:hidden"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          <Link href="/courses" className="flex items-center gap-1 text-slate-600 hover:text-slate-900">
            <ChevronLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Courses</span>
          </Link>
        </div>
        
        <div className="flex-1 flex justify-center">
          <h1 className="text-lg font-semibold text-slate-800">{courseData.title}</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-600">
            <span className="font-medium">{courseData.progress}%</span> complete
          </div>
          
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            {courseData.author.charAt(0)}
          </div>
        </div>
      </header>
      
      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`bg-white border-r border-slate-200 w-80 flex-shrink-0 fixed lg:relative inset-y-0 z-20 transition-all duration-300 ${
            isSidebarOpen ? 'left-0' : '-left-80 lg:left-0 lg:w-0 lg:opacity-0'
          } ${isMobile ? 'mt-14 h-[calc(100vh-56px)]' : 'mt-0 h-[calc(100vh-56px)]'}`}
        >
          {/* Custom scrollable area */}
          <div className="h-full overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image 
                    src={courseData.image || "/placeholder.png"} 
                    alt={courseData.title}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-slate-800">{courseData.title}</h2>
                  <p className="text-xs text-slate-500">by {courseData.author}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Your progress</span>
                  <span className="font-medium text-slate-800">{courseData.progress}%</span>
                </div>
                <Progress value={courseData.progress} className="h-2 bg-slate-100" />
              </div>
              
              <div className="space-y-4">
                {courseData.modules.map((module) => (
                  <div key={module.id} className="border border-slate-200 rounded-md overflow-hidden">
                    <div 
                      className={`p-3 flex items-center justify-between cursor-pointer ${
                        pathname.includes(`/${languageId}/${module.id}`) 
                          ? 'bg-blue-50 border-b border-blue-100' 
                          : 'bg-white border-b border-slate-100'
                      }`}
                      onClick={() => {
                        // Toggle module expansion logic would go here
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {module.complete ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border border-slate-300"></div>
                        )}
                        <h3 className="font-medium text-slate-800">{module.title}</h3>
                      </div>
                    </div>
                    
                    {/* Module lessons */}
                    {module.lessons && (
                      <div className="bg-slate-50 py-1">
                        {module.lessons.map((lesson) => {
                          const isActive = pathname.includes(`/${languageId}/${module.id}/${lesson.id}`);
                          
                          return (
                            <Link
                              key={lesson.id}
                              href={`/learn/${languageId}/${module.id}/${lesson.id}`}
                              className={`flex items-center gap-3 px-3 py-2 text-sm ${
                                isActive 
                                  ? 'bg-blue-50 text-blue-700' 
                                  : 'hover:bg-slate-100 text-slate-700'
                              } group`}
                            >
                              <div className="w-5 flex-shrink-0 flex justify-center">
                                {lesson.complete ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : lesson.type === "video" ? (
                                  <Play className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                                ) : (
                                  <FileText className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="line-clamp-2">{lesson.title}</p>
                                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                  <span className="capitalize">{lesson.type}</span>
                                  <span>•</span>
                                  <span>{lesson.duration}</span>
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-white">{children}</main>
        
        {/* Right Sidebar for Notes/Q&A (optional, like Udemy) */}
        {!isMobile && (
          <div className="w-14 border-l border-slate-200 bg-white flex flex-col items-center py-4 gap-4">
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600">
              <MessageCircle className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600">
              <FileText className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600">
              <Award className="h-5 w-5" />
            </button>
            <div className="flex-grow"></div>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 