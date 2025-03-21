'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'

export default function ReferralPage() {
  const [referralCode, setReferralCode] = useState('EDUUSER123')
  const [copiedMessage, setCopiedMessage] = useState('')

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopiedMessage('Copied to clipboard!')
    setTimeout(() => setCopiedMessage(''), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Invite Friends, Earn Rewards!</h1>
      
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8 border-blue-200 shadow-lg">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Users className="text-blue-500" />
              Your Referral Code
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Input 
                value={referralCode} 
                readOnly 
                className="text-lg font-semibold text-blue-600 border-blue-300"
              />
              <Button 
                onClick={copyReferralCode}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Copy
              </Button>
            </div>
            {copiedMessage && (
              <p className="text-green-600 mt-2">{copiedMessage}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}