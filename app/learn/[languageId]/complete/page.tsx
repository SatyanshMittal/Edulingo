//@ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Certificate } from '@/components/course/certificate'
import { useSDK } from '@metamask/sdk-react'
import { Award, Share2, Trophy, BookOpen, Clock, Wallet, ChevronRight } from 'lucide-react'

export default function CourseCompletionPage({ params }) {
  const { languageId } = params;
  const router = useRouter();
  const { connected, account } = useSDK();
  const [showCertificate, setShowCertificate] = useState(false);
  const [tokensClaimed, setTokensClaimed] = useState(false);
  
  // Mock course data
  const courseData = {
    id: languageId,
    name: languageId === 'spanish' ? 'Spanish for Beginners to Advanced' :
          languageId === 'french' ? 'French for Beginners' :
          languageId === 'japanese' ? 'Japanese for Beginners' : 'Language Course',
    completionDate: new Date().toISOString(),
    tokenReward: 50,
    totalLessons: 42,
    totalHours: 24,
    achievements: [
      'Completed all modules',
      'Passed all quizzes with >80%',
      'Maintained a 7-day learning streak',
      'Participated in community discussions'
    ],
    level: 'Beginner to Intermediate',
    suggestedCourses: [
      {
        id: languageId === 'spanish' ? 'french' : 'spanish',
        name: languageId === 'spanish' ? 'French for Beginners' : 'Spanish for Beginners to Advanced',
        image: languageId === 'spanish' ? '/flags/france.png' : '/flags/spain.png',
        level: 'Beginner'
      },
      {
        id: 'japanese',
        name: 'Japanese for Beginners',
        image: '/flags/japan.png',
        level: 'Beginner'
      }
    ]
  };
  
  // Launch confetti on page load
  useEffect(() => {
    const launchConfetti = () => {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      
      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }
      
      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        
        const particleCount = 50 * (timeLeft / duration);
        
        // since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    };
    
    launchConfetti();
  }, []);
  
  const claimTokens = () => {
    // In a real app, this would interact with the blockchain
    setTimeout(() => {
      setTokensClaimed(true);
    }, 1500);
  };
  
  if (showCertificate) {
    return (
      <Certificate
        userName={account ? account.slice(0, 6) + '...' + account.slice(-4) : 'Student'}
        courseName={courseData.name}
        completionDate={courseData.completionDate}
        courseId={courseData.id}
        tokenReward={courseData.tokenReward}
      />
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
            className="h-24 w-24 rounded-full bg-blue-100 mx-auto flex items-center justify-center"
          >
            <Trophy className="h-12 w-12 text-blue-600" />
          </motion.div>
        </div>
        <h1 className="text-3xl font-bold text-blue-800 mb-3">Congratulations!</h1>
        <p className="text-xl text-slate-600">
          You've successfully completed {courseData.name}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">Your Learning Achievement</h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Total Lessons</p>
                  <p className="text-xl font-semibold text-slate-800">{courseData.totalLessons}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Learning Hours</p>
                  <p className="text-xl font-semibold text-slate-800">{courseData.totalHours}</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium text-slate-700 mb-3">Achievements Unlocked</h3>
            <ul className="space-y-2 mb-8">
              {courseData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <Award className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="font-medium text-slate-700 mb-3">Your Level</h3>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-md p-4 mb-8">
              <p className="font-semibold text-blue-800">{courseData.level}</p>
              <p className="text-sm text-slate-600 mt-1">
                You now have a solid understanding of this language and can engage in everyday conversations.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowCertificate(true)}
              >
                <Award className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
              
              <Button
                variant="primaryOutline"
                className="border-blue-200"
                onClick={() => router.push('/learn/dashboard')}
              >
                View Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-1.5">
                <Wallet className="h-5 w-5" />
                Token Reward
              </h3>
              
              <div className="mb-6 text-center">
                <p className="text-4xl font-bold text-blue-700">{courseData.tokenReward}</p>
                <p className="text-sm text-slate-600">EDU Tokens</p>
              </div>
              
              {connected ? (
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={claimTokens}
                  disabled={tokensClaimed}
                >
                  {tokensClaimed ? 'Tokens Claimed' : 'Claim Tokens'}
                </Button>
              ) : (
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Connect Wallet to Claim
                </Button>
              )}
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Continue Learning</h3>
              
              <div className="space-y-3">
                {courseData.suggestedCourses.map(course => (
                  <div 
                    key={course.id} 
                    className="border border-slate-200 rounded-md p-3 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer"
                    onClick={() => router.push(`/learn/${course.id}`)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image 
                          src={course.image} 
                          alt={course.name}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-800">{course.name}</h4>
                        <p className="text-xs text-slate-500">{course.level}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
              
              <Button
                variant="primaryOutline"
                className="w-full mt-4 border-slate-200"
                onClick={() => router.push('/courses')}
              >
                View All Courses
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 