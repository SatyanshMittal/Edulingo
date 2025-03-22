'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Tournament {
  id: string;
  name: string;
  startDate: string;
  status: "upcoming" | "ongoing" | "completed";
  price: string;
}

const tournaments: Tournament[] = [
  { id: "t1", name: "Spanish Beginner Tournament", startDate: "October 15, 2024", status: "ongoing", price: "Free" },
  { id: "t2", name: "French Intermediate Tournament", startDate: "November 1, 2024", status: "upcoming", price: "10 EDU" },
  { id: "t3", name: "Japanese Challenge", startDate: "December 5, 2024", status: "upcoming", price: "25 EDU" },
]

export default function TournamentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Language Tournaments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map(tournament => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  )
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const router = useRouter()

  const handleJoin = () => {
    if (tournament.status === "ongoing") {
      setIsModalOpen(true)
    } else {
      alert(`You've registered for ${tournament.name}. We'll notify you when it starts!`)
    }
  }

  const handleStartQuiz = () => {
    if (!playerName.trim()) {
      alert("Please enter your name")
      return
    }
    router.push(`/quiz/${tournament.id}?name=${encodeURIComponent(playerName)}`)
  }

  return (
    <Card className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-blue-50 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-blue-600">{tournament.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-blue-700">Starts: {tournament.startDate}</p>
        <p className="text-blue-700 capitalize">Status: <span className="font-semibold">{tournament.status}</span></p>
        <p className="text-blue-700">Price: {tournament.price}</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleJoin}
        >
          {tournament.status === "ongoing" ? "Join Now" : "Register"}
        </Button>
      </CardFooter>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join Tournament</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="playerName">Enter your name to join</Label>
            <Input 
              id="playerName" 
              value={playerName} 
              onChange={(e) => setPlayerName(e.target.value)} 
              className="mt-2"
              placeholder="Your name"
            />
          </div>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)} variant="primaryOutline">Cancel</Button>
            <Button onClick={handleStartQuiz} className="bg-blue-600">Start Quiz</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}