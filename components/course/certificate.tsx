'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Share2, Award } from 'lucide-react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface CertificateProps {
  userName: string;
  courseName: string;
  completionDate: string;
  courseId: string;
  tokenReward: number;
}

export function Certificate({ 
  userName, 
  courseName, 
  completionDate, 
  courseId,
  tokenReward
}: CertificateProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: null
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${courseName.replace(/\s+/g, '_')}_Certificate.pdf`);
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  const shareCertificate = () => {
    // This would typically connect to social media sharing APIs
    alert('Sharing functionality would be implemented here');
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const generateCertificateId = () => {
    return `EDU-${courseId.slice(0, 4).toUpperCase()}-${Date.now().toString().slice(-6)}`;
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Card className="border-blue-200 overflow-hidden">
        <CardContent className="p-0">
          <div className="p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">Congratulations!</h1>
            <p>You've successfully completed the course and earned a certificate</p>
          </div>
          
          <div className="p-8">
            {/* Certificate Preview */}
            <div 
              ref={certificateRef}
              className="border-8 border-blue-100 rounded-lg p-8 bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-16 bg-blue-600"></div>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-blue-600"></div>
              
              <div className="relative z-10 text-center pt-12 pb-12">
                <div className="mb-6">
                  <Image 
                    src="/logo.png" 
                    alt="Edu Lingo" 
                    width={80} 
                    height={80}
                    className="mx-auto"
                  />
                </div>
                
                <h1 className="text-3xl font-serif mb-2">Certificate of Completion</h1>
                <p className="text-slate-500 mb-8">This certifies that</p>
                
                <h2 className="text-4xl font-bold text-blue-800 font-serif mb-6">{userName}</h2>
                
                <p className="text-slate-600 mb-8">
                  has successfully completed the course
                </p>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-8">
                  {courseName}
                </h3>
                
                <div className="flex justify-center items-center gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Date</p>
                    <p className="font-medium">{formatDate(completionDate)}</p>
                  </div>
                  
                  <div className="h-12 w-px bg-slate-200"></div>
                  
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Certificate ID</p>
                    <p className="font-medium">{generateCertificateId()}</p>
                  </div>
                  
                  <div className="h-12 w-px bg-slate-200"></div>
                  
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Token Reward</p>
                    <p className="font-medium">{tokenReward} EDU</p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-12">
                  <div className="text-center">
                    <div className="h-0.5 w-32 bg-slate-300 mb-2"></div>
                    <p className="text-sm text-slate-500">Course Instructor</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="h-0.5 w-32 bg-slate-300 mb-2"></div>
                    <p className="text-sm text-slate-500">EduLingo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-4 justify-center mt-8">
              <Button
                variant="primaryOutline"
                className="border-blue-200"
                onClick={downloadCertificate}
                disabled={isGenerating}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Certificate
              </Button>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={shareCertificate}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Achievement
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Your Learning Journey</h2>
        <p className="text-slate-600 mb-6">
          Keep improving your language skills by exploring these related courses
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => router.push('/courses')}
          >
            Explore More Courses
          </Button>
          
          <Button
            variant="primaryOutline"
            className="border-blue-200"
            onClick={() => router.push('/community')}
          >
            Join Community Discussions
          </Button>
        </div>
      </div>
    </div>
  );
} 