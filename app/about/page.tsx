"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Twitter } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Satyansh Mittal",
    role: "Blockchain Developer",
    twitter: "@satyansh_mittal",
    twitterUrl: "https://twitter.com/satyansh_mittal",
    avatar: "https://pbs.twimg.com/profile_images/1826667176750972932/vOnY_mid_400x400.jpg",
    bio: "Full-stack developer passionate about web3 education and innovative learning tools."
  },
  {
    name: "Mystic",
    role: "Design & Frontend",
    twitter: "@Gurshabad90",
    twitterUrl: "https://twitter.com/Gurshabad90",
    avatar: "https://pbs.twimg.com/profile_images/1900440734177910785/MIBOFkKs_400x400.jpg",
    bio: "UI/UX specialist with expertise in creating intuitive and engaging learning experiences."
  },
  {
    name: "Anukul",
    role: "Blockchain Expert",
    twitter: "@anukulKun",
    twitterUrl: "https://twitter.com/anukulKun",
    avatar: "https://pbs.twimg.com/profile_images/1870829305544032257/ni0Yj80v_400x400.jpg",
    bio: "Blockchain developer focused on integrating token incentives and web3 functionality."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">About Edu Lingo</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Revolutionizing language learning with blockchain technology and token incentives.
            Learn, earn, and connect with a global community of language enthusiasts.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 mb-4">
            At Edu Lingo, we believe that language learning should be accessible, engaging, and rewarding. 
            Our platform combines cutting-edge educational methodologies with blockchain technology to create
            a unique learning experience that motivates students through token incentives.
          </p>
          <p className="text-lg text-slate-600">
            We're on a mission to break down language barriers and build a global community of learners,
            where knowledge is valued and progress is rewarded in tangible ways.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-slate-200">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-slate-600 mb-4">{member.bio}</p>
                  <Link href={member.twitterUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primaryOutline" className="w-full flex items-center justify-center gap-2 border-slate-200">
                      <Twitter className="h-4 w-4 text-blue-500" />
                      <span>{member.twitter}</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-slate-600 mb-6">Ready to start your language learning journey?</p>
          <Link href="/courses">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
              Explore Our Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 