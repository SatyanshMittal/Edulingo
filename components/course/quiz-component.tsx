'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Award, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react'

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number, totalQuestions: number) => void;
  tokenReward: number;
}

export function QuizComponent({ questions, onComplete, tokenReward }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per question
  
  // Timer for quiz
  useEffect(() => {
    if (!isSubmitted && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            submitCurrentAnswer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [currentQuestion, isSubmitted, showResults]);
  
  // Reset timer when moving to next question
  useEffect(() => {
    setTimeLeft(60);
  }, [currentQuestion]);
  
  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };
  
  const submitCurrentAnswer = () => {
    setIsSubmitted(true);
    
    // Check if answer is correct
    const currentQuiz = questions[currentQuestion];
    if (selectedAnswers[currentQuestion] === currentQuiz.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };
  
  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
      onComplete(score + (selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer ? 1 : 0), questions.length);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
    setTimeLeft(60);
  };
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  if (showResults) {
    const finalScore = score + (selectedAnswers[questions.length - 1] === questions[questions.length - 1].correctAnswer ? 1 : 0);
    const percentage = Math.round((finalScore / questions.length) * 100);
    const passed = percentage >= 70;
    
    return (
      <Card className="border-blue-200">
        <CardContent className="p-6 text-center">
          <div className="mb-6">
            <div className={`h-20 w-20 rounded-full mx-auto flex items-center justify-center ${
              passed ? 'bg-green-100' : 'bg-amber-100'
            }`}>
              {passed ? (
                <Award className="h-10 w-10 text-green-600" />
              ) : (
                <AlertCircle className="h-10 w-10 text-amber-600" />
              )}
            </div>
          </div>
          
          <h2 className={`text-2xl font-bold mb-2 ${
            passed ? 'text-green-600' : 'text-amber-600'
          }`}>
            {passed ? 'Congratulations!' : 'Almost there!'}
          </h2>
          
          <p className="text-slate-600 mb-6">
            You scored {finalScore} out of {questions.length} ({percentage}%)
          </p>
          
          {passed ? (
            <Alert className="bg-green-50 border-green-200 mb-6">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-700">Success!</AlertTitle>
              <AlertDescription className="text-green-600">
                You've earned {tokenReward} EDU tokens for completing this quiz.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="bg-amber-50 border-amber-200 mb-6">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-700">Not quite there</AlertTitle>
              <AlertDescription className="text-amber-600">
                You need a score of 70% or higher to earn tokens. Try again!
              </AlertDescription>
            </Alert>
          )}
          
          <div className="flex gap-3 justify-center">
            <Button 
              variant="outline" 
              className="border-slate-200"
              onClick={restartQuiz}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.history.back()}
            >
              Continue Learning
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  const currentQuiz = questions[currentQuestion];
  
  return (
    <Card className="border-blue-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-slate-800">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <div className={`text-sm font-medium px-3 py-1 rounded-full ${
            timeLeft > 15 ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
          }`}>
            Time left: {formatTime(timeLeft)}
          </div>
        </div>
        
        <p className="text-lg text-slate-700 mb-6">{currentQuiz.question}</p>
        
        <div className="space-y-3 mb-6">
          {currentQuiz.options.map((option, optionIndex) => (
            <div 
              key={optionIndex}
              onClick={() => !isSubmitted && selectAnswer(currentQuestion, optionIndex)}
              className={`p-3 rounded-md border cursor-pointer transition-all ${
                isSubmitted 
                  ? optionIndex === currentQuiz.correctAnswer
                    ? 'bg-green-100 border-green-300 text-green-800'
                    : selectedAnswers[currentQuestion] === optionIndex
                      ? 'bg-red-100 border-red-300 text-red-800'
                      : 'bg-white border-slate-200 text-slate-500'
                  : selectedAnswers[currentQuestion] === optionIndex
                    ? 'bg-blue-50 border-blue-300 text-blue-800'
                    : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                  isSubmitted 
                    ? optionIndex === currentQuiz.correctAnswer
                      ? 'bg-green-500 text-white'
                      : selectedAnswers[currentQuestion] === optionIndex
                        ? 'bg-red-500 text-white'
                        : 'bg-slate-200 text-slate-500'
                    : selectedAnswers[currentQuestion] === optionIndex
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-200 text-slate-500'
                }`}>
                  {String.fromCharCode(65 + optionIndex)} {/* A, B, C, D */}
                </div>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>
        
        {isSubmitted && currentQuiz.explanation && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <h3 className="font-medium text-blue-800 mb-1">Explanation:</h3>
            <p className="text-sm text-slate-700">{currentQuiz.explanation}</p>
          </div>
        )}
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={isSubmitted ? goToNextQuestion : submitCurrentAnswer}
          disabled={selectedAnswers[currentQuestion] === undefined && !isSubmitted}
        >
          {isSubmitted ? 'Next Question' : 'Submit Answer'}
        </Button>
      </CardContent>
    </Card>
  );
} 