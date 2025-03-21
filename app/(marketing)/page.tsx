'use client'

import { Coins, Trophy, Rocket, Users, ArrowRight, Globe, BookOpen, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Hero Section */}
      <div className="mx-auto max-w-[1200px] pt-36 h-screen px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="inline-flex px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm"
            >
              <span>🚀 Web3-Powered Language Learning</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight"
            >
              Revolutionize Your <span className="text-blue-600">Language Learning</span> Journey
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-slate-600 md:text-xl leading-relaxed"
            >
              Learn, practice, and master new languages while earning rewards. Stake to learn, compete in tournaments, and unlock your potential with blockchain incentives!
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link href="/learn">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/50 w-full sm:w-auto">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="primaryOutline" className="bg-white border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:border-blue-400 w-full sm:w-auto">
                  Explore Courses
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-2 text-slate-500 mt-2"
            >
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Join 10,000+ language learners today!</span>
            </motion.div>
          </motion.div>
          
          {/* Right hero image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center"
          >
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Image 
                src="/logo3.png" 
                alt="EduLingo Hero" 
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 8,
                repeat: Infinity
              }}
              className="absolute z-0 h-[400px] w-[400px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute top-10 right-10 bg-blue-100 p-2 rounded-full shadow-lg"
            >
              <Globe className="h-6 w-6 text-blue-600" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute bottom-20 left-0 bg-yellow-100 p-2 rounded-full shadow-lg"
            >
              <Trophy className="h-6 w-6 text-yellow-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Choose EduLingo?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform combines language learning with blockchain technology to create a unique and rewarding experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureItems.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsItems.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 inline-flex items-center justify-center"
                >
                  {stat.icon}
                </motion.div>
                <motion.p 
                  className="text-4xl font-bold mb-2"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a56db' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
              >
                Ready to Transform Your Language Learning?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-blue-700 mb-8 max-w-2xl mx-auto"
              >
                Join thousands of learners who are already earning rewards while mastering new languages on our platform.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link href="/learn/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/50 w-full sm:w-auto">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="primaryOutline" className="bg-white border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:border-blue-400 w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const featureItems = [
  {
    title: "Stake & Earn Rewards",
    description: "Stake tokens to unlock courses and earn rewards as you progress through lessons and complete milestones.",
    icon: <Coins className="h-7 w-7 text-blue-600" />
  },
  {
    title: "Compete in Tournaments",
    description: "Join language tournaments to test your skills against other learners and win exclusive prizes.",
    icon: <Trophy className="h-7 w-7 text-blue-600" />
  },
  {
    title: "Milestone-Based Progress",
    description: "Track your learning journey through clear milestones and watch your proficiency grow with every lesson.",
    icon: <Rocket className="h-7 w-7 text-blue-600" />
  }
]

const statsItems = [
  {
    value: "10,000+",
    label: "Active Learners",
    icon: <Users className="h-10 w-10 text-blue-300" />
  },
  {
    value: "15+",
    label: "Languages Available",
    icon: <Globe className="h-10 w-10 text-blue-300" />
  },
  {
    value: "500+",
    label: "Interactive Lessons",
    icon: <BookOpen className="h-10 w-10 text-blue-300" />
  },
  {
    value: "30K+",
    label: "Rewards Distributed",
    icon: <Zap className="h-10 w-10 text-blue-300" />
  }
]