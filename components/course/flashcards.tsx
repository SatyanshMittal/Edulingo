'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ChevronLeft, ChevronRight, RotateCw, VolumeUp, Check, X } from 'lucide-react'

interface Flashcard {
  id: string;
  front: string;
  back: string;
  example?: string;
  pronunciation?: string;
  image?: string;
}

interface FlashcardsProps {
  cards: Flashcard[];
  title: string;
  onComplete: () => void;
}

export function Flashcards({ cards, title, onComplete }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [knownCards, setKnownCards] = useState<string[]>([]);
  const [reviewCards, setReviewCards] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  
  const currentCard = cards[currentIndex];
  
  // Text-to-speech function
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesis.speak(text);
      window.speechSynthesis.speak(utterance);
    }
  };
  
  const flipCard = () => {
    setShowBack(!showBack);
  };
  
  const markAsKnown = () => {
    if (!knownCards.includes(currentCard.id)) {
      setKnownCards([...knownCards, currentCard.id]);
    }
    nextCard();
  };
  
  const markForReview = () => {
    if (!reviewCards.includes(currentCard.id)) {
      setReviewCards([...reviewCards, currentCard.id]);
    }
    nextCard();
  };
  
  const nextCard = () => {
    setShowBack(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // If we're in review mode and there are no more cards
      if (reviewMode) {
        if (reviewCards.length === 0) {
          setIsCompleted(true);
          onComplete();
        } else {
          // Restart review with only the cards marked for review
          setReviewMode(true);
          const reviewSet = cards.filter(card => reviewCards.includes(card.id));
          // We would reset here with the filtered cards
          setCurrentIndex(0);
          setReviewCards([]);
        }
      } else {
        // First pass completed
        if (reviewCards.length === 0) {
          setIsCompleted(true);
          onComplete();
        } else {
          // Start review mode with cards marked for review
          setReviewMode(true);
          const reviewSet = cards.filter(card => reviewCards.includes(card.id));
          // We would reset here with the filtered cards
          setCurrentIndex(0);
          setReviewCards([]);
        }
      }
    }
  };
  
  const prevCard = () => {
    setShowBack(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const resetCards = () => {
    setCurrentIndex(0);
    setShowBack(false);
    setKnownCards([]);
    setReviewCards([]);
    setIsCompleted(false);
    setReviewMode(false);
  };
  
  if (isCompleted) {
    return (
      <Card className="max-w-lg mx-auto p-6 text-center">
        <div className="mb-6">
          <div className="h-20 w-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">
            <Check className="h-10 w-10 text-green-600" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Vocabulary Mastered!</h2>
        <p className="text-slate-600 mb-6">
          You've reviewed all {cards.length} cards in this set.
          You knew {knownCards.length} cards ({Math.round((knownCards.length / cards.length) * 100)}%).
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={resetCards}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <RotateCw className="h-4 w-4 mr-2" />
            Practice Again
          </Button>
          
          <Button 
            variant="outline"
            className="w-full border-slate-200"
            onClick={onComplete}
          >
            Continue Learning
          </Button>
        </div>
      </Card>
    );
  }
  
  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-2">{title}</h2>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-slate-500">
            Card {currentIndex + 1} of {cards.length}
          </div>
          <div className="text-sm text-slate-500">
            {reviewMode ? 'Review Mode' : 'Learning Mode'}
          </div>
        </div>
        <Progress 
          value={((currentIndex + 1) / cards.length) * 100} 
          className="h-2"
        />
      </div>
      
      <div className="relative h-72 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id + (showBack ? "-back" : "-front")}
            initial={{ rotateY: showBack ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: showBack ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div 
              className={`h-full w-full cursor-pointer flex flex-col justify-center p-8 rounded-xl shadow-md ${
                showBack 
                  ? 'bg-blue-50 border border-blue-200' 
                  : 'bg-white border border-slate-200'
              }`}
              onClick={flipCard}
            >
              {showBack ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-700 mb-3">{currentCard.back}</h3>
                  {currentCard.example && (
                    <p className="italic text-slate-600 mb-4">"{currentCard.example}"</p>
                  )}
                  {currentCard.pronunciation && (
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4">
                      <span>{currentCard.pronunciation}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(currentCard.back);
                        }}
                        className="p-1 rounded-full hover:bg-blue-100"
                      >
                        <VolumeUp className="h-4 w-4 text-blue-600" />
                      </button>
                    </div>
                  )}
                  
                  <p className="text-sm text-slate-500 mt-6">Tap to see the word</p>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">{currentCard.front}</h3>
                  {currentCard.image && (
                    <div className="my-4 flex justify-center">
                      <img 
                        src={currentCard.image} 
                        alt={currentCard.front} 
                        className="h-32 w-auto object-contain rounded-md"
                      />
                    </div>
                  )}
                  <p className="text-sm text-slate-500 mt-6">Tap to see the translation</p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          className="border-slate-200"
          onClick={prevCard}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        
        <div className="flex gap-2">
          <Button 
            variant="outline"
            size="sm"
            className="border-red-200 text-red-600 hover:bg-red-50"
            onClick={markForReview}
          >
            <X className="h-4 w-4 mr-1" />
            Review Later
          </Button>
          
          <Button 
            variant="outline"
            size="sm"
            className="border-green-200 text-green-600 hover:bg-green-50"
            onClick={markAsKnown}
          >
            <Check className="h-4 w-4 mr-1" />
            I Know This
          </Button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          className="border-slate-200"
          onClick={nextCard}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
} 