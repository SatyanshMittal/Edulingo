'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ChevronLeft, ChevronRight, Play, Pause, 
  Volume2, Settings, Award, SkipForward, 
  Maximize, ThumbsUp, ThumbsDown,
  Bookmark, MessageCircle, Download, CheckCircle,
  FileText
} from 'lucide-react'

// Mock lesson data - this would come from an API in a real app
const getLessonData = (languageId, moduleId, lessonId) => {
  // Simplified for demo, would be more dynamic in real app
  return {
    id: lessonId,
    title: "Introducing Yourself in Spanish",
    description: "Learn common phrases for introducing yourself and others in Spanish.",
    videoUrl: "https://example.com/videos/spanish-introductions.mp4",
    duration: "7:22",
    transcriptEnabled: true,
    completionReward: 2,
    resources: [
      { name: "Spanish Introductions Cheat Sheet", type: "pdf", size: "1.2 MB" },
      { name: "Practice Dialogue Audio", type: "mp3", size: "3.5 MB" }
    ],
    quiz: [
      {
        question: "How do you say 'My name is...' in Spanish?",
        options: [
          "Me llamo...",
          "Te llamas...",
          "Me nombre es...",
          "Yo soy..."
        ],
        correctAnswer: 0
      },
      {
        question: "Which phrase is used to ask someone their name?",
        options: [
          "¿Cuántos años tienes?",
          "¿De dónde eres?",
          "¿Cómo te llamas?",
          "¿Qué tal?"
        ],
        correctAnswer: 2
      }
    ],
    nextLesson: {
      moduleId: "basics",
      lessonId: "numbers",
      title: "Numbers 1-100"
    },
    prevLesson: {
      moduleId: "introduction",
      lessonId: "alphabet",
      title: "The Spanish Alphabet"
    }
  };
};

export default function LessonPage({ params }) {
  // Use React.use to unwrap the params promise
  const unwrappedParams = React.use(params);
  const languageId = unwrappedParams.languageId;
  const moduleId = unwrappedParams.moduleId;
  const lessonId = unwrappedParams.lessonId;
  
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  
  const lessonData = getLessonData(languageId, moduleId, lessonId);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const goToNextLesson = () => {
    router.push(`/learn/${languageId}/${lessonData.nextLesson.moduleId}/${lessonData.nextLesson.lessonId}`);
  };
  
  const goToPrevLesson = () => {
    router.push(`/learn/${languageId}/${lessonData.prevLesson.moduleId}/${lessonData.prevLesson.lessonId}`);
  };
  
  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex
    });
  };
  
  const submitQuiz = () => {
    setQuizSubmitted(true);
    // Calculate score
    const correctAnswers = lessonData.quiz.reduce((count, question, index) => {
      return quizAnswers[index] === question.correctAnswer ? count + 1 : count;
    }, 0);
    
    // If passed, award tokens
    if (correctAnswers / lessonData.quiz.length >= 0.7) {
      setQuizPassed(true);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Video player section */}
      {!showQuiz ? (
        <div className="relative bg-black flex-grow flex flex-col">
          <div className="relative flex-grow flex items-center justify-center">
            {/* Video would be here in a real app */}
            <div className="text-white text-center">
              <Play className="h-16 w-16 mx-auto opacity-20 hover:opacity-100 cursor-pointer transition-opacity" onClick={togglePlay} />
              <p className="mt-4 text-sm text-gray-400">Click to play the video</p>
            </div>
          </div>
          
          {/* Video controls */}
          <div className="bg-gray-900 p-3 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Progress value={videoProgress} className="flex-grow h-1.5" />
              <span className="text-xs text-gray-400">{duration} / 7:22</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="p-1.5 hover:bg-gray-700 rounded-full">
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button className="p-1.5 hover:bg-gray-700 rounded-full">
                  <SkipForward className="h-4 w-4" />
                </button>
                <button className="p-1.5 hover:bg-gray-700 rounded-full">
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="text-xs text-gray-400 hover:text-white transition-colors">
                  Transcript
                </button>
                <button className="p-1.5 hover:bg-gray-700 rounded-full">
                  <Settings className="h-4 w-4" />
                </button>
                <button className="p-1.5 hover:bg-gray-700 rounded-full">
                  <Maximize className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow bg-slate-50 p-6 flex flex-col items-center">
          {!quizSubmitted ? (
            <div className="max-w-2xl w-full mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Quiz: {lessonData.title}</h2>
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                {lessonData.quiz.map((question, questionIndex) => (
                  <div key={questionIndex} className="mb-8">
                    <h3 className="text-lg font-medium text-slate-800 mb-4">
                      {questionIndex + 1}. {question.question}
                    </h3>
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <div 
                          key={optionIndex}
                          className={`p-3 border rounded-md cursor-pointer transition-colors ${
                            quizAnswers[questionIndex] === optionIndex 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-slate-200 hover:border-blue-200 hover:bg-blue-50/50'
                          }`}
                          onClick={() => handleQuizAnswer(questionIndex, optionIndex)}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-5 w-5 rounded-full flex items-center justify-center border ${
                              quizAnswers[questionIndex] === optionIndex 
                                ? 'border-blue-500 bg-blue-500 text-white' 
                                : 'border-slate-300'
                            }`}>
                              {quizAnswers[questionIndex] === optionIndex && (
                                <div className="h-2 w-2 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-slate-700">{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={submitQuiz}
                  disabled={Object.keys(quizAnswers).length < lessonData.quiz.length}
                >
                  Submit Answers
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl w-full mx-auto text-center">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
                {quizPassed ? (
                  <>
                    <div className="mb-6">
                      <div className="h-20 w-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
                        <Award className="h-10 w-10 text-green-600" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-green-600 mb-2">Great job!</h2>
                    <p className="text-slate-600 mb-6">
                      You've successfully completed this lesson and earned {lessonData.completionReward} EDU tokens.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="h-20 w-20 rounded-full bg-amber-100 mx-auto flex items-center justify-center">
                        <Award className="h-10 w-10 text-amber-600" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-amber-600 mb-2">Almost there!</h2>
                    <p className="text-slate-600 mb-6">
                      Review the lesson and try the quiz again to earn tokens.
                    </p>
                  </>
                )}
                
                <div className="flex justify-center gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="border-slate-200"
                    onClick={() => setShowQuiz(false)}
                  >
                    Review Lesson
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={goToNextLesson}
                  >
                    Next Lesson
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 