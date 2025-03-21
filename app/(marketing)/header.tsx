'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wallet, BookOpen, Menu, X, Zap, Users, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSDK } from '@metamask/sdk-react';
import * as Popover from "@radix-ui/react-popover";

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useContracts } from '@/hooks/useContracts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { sdk, connected, connecting, account } = useSDK();
  const { checkUserExists, loginUser, loading: contractsLoading, userAuthContract } = useContracts();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [referralId, setReferralId] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (connected && account) {
        console.log('Wallet connected, checking user status for account:', account);
        try {
          const exists = await checkUserExists();
          console.log('User exists check result:', exists);
          
          if (exists) {
            console.log('Existing user found, proceeding with login...');
            const userData = await loginUser();
            console.log('Login successful:', userData);
          } else {
            console.log('New user detected, showing registration modal');
            setIsModalOpen(true);
          }
        } catch (err) {
          console.error('Error in checkUserStatus:', err);
          setRegistrationError('Failed to check user status. Please try again.');
        }
      }
    };

    checkUserStatus();
  }, [connected, account]);

  const handleSubmitRegistration = async () => {
    console.log('Starting registration process...');
    setIsProcessing(true);
    setRegistrationError('');
    
    if (!userAuthContract || !account) {
      console.error('Missing required data:', { userAuthContract: !!userAuthContract, account });
      setRegistrationError('Contract or account not available. Please try reconnecting your wallet.');
      setIsProcessing(false);
      return;
    }
    
    try {
      console.log('Attempting to create user with params:', {
        account,
        name,
        referralId: referralId || ''
      });

      const provider = userAuthContract.provider;
      const gasPrice = await provider.getGasPrice();
      
      const estimatedGas = await userAuthContract.estimateGas.createUser(
        account,
        name,
        referralId || ''
      );

      const gasLimit = estimatedGas.mul(120).div(100);

      const tx = await userAuthContract.createUser(
        account,
        name,
        referralId || '',
        {
          gasLimit,
          gasPrice
        }
      );

      console.log('Transaction sent:', tx.hash);
      await tx.wait();
      console.log('Transaction confirmed');
      
      setIsModalOpen(false);
      console.log('Modal closed');
      
      console.log('Attempting to login user...');
      const userData = await loginUser();
      console.log('Login successful, user data:', userData);
    } catch (error: any) {
      console.error('Registration failed with detailed error:', error);
      setRegistrationError(
        error.message.includes('user already exists') 
          ? 'This wallet is already registered. Please try logging in instead.'
          : 'Registration failed. Please check your referral code or try again later.'
      );
      // Close modal and trigger wallet connect on error
      setIsModalOpen(false);
      handleConnect();
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConnect = async () => {
    try {
      console.log('Initiating wallet connection...');
      await sdk?.connect();
    } catch (err) {
      console.warn('Connection failed:', err);
    }
  };

  const disconnect = () => {
    console.log('Disconnecting wallet...');
    if (sdk) {
      sdk.terminate();
      console.log('Wallet disconnected');
    }
  };

  const formatAddress = (address: string | undefined) => {
    if (!address) return 'No Address';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsModalOpen(false);
              }
            }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 w-full max-w-md shadow-2xl border border-blue-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Complete Your Profile</h2>
              <p className="text-blue-200 mb-6">Please provide your details to complete registration</p>
              
              {/* {registrationError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                  {registrationError}
                </div>
              )} */}
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-blue-950/50 border border-blue-700/50 rounded-lg text-white placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                    disabled={isProcessing}
                  />
                </div>
                <div>

                  <label htmlFor="referral" className="block text-sm font-medium text-blue-200 mb-2">
                    Referral Code
                  </label>
                  <input
                    type="text"
                    id="referral"
                    value={referralId}
                    onChange={(e) => setReferralId(e.target.value)}
                    className="w-full px-4 py-2 bg-blue-950/50 border border-blue-700/50 rounded-lg text-white placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Optional referral code"
                    disabled={isProcessing}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-x-4 mt-8">
                <Button
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  className="px-6 py-2 bg-blue-950/80 text-blue-200 hover:bg-blue-950 transition-colors duration-200"
                  disabled={isProcessing}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmitRegistration}
                  disabled={!name || isProcessing}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isProcessing ? 'Processing...' : 'Complete Registration'}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rest of the header component remains unchanged */}
      <header className="w-full bg-blue-700 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Edulingo Logo" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            <span className="text-white text-xl font-bold">Edu Lingo</span>
          </Link>
          
          {/* Main Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-white font-medium hover:text-blue-200 transition">
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Courses
              </span>
            </Link>
            <Link href="/about" className="text-white font-medium hover:text-blue-200 transition">
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                About Us
              </span>
            </Link>
            <Link href="/resources" className="text-white font-medium hover:text-blue-200 transition">
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Resources
              </span>
            </Link>
          </nav>
          
          {/* Wallet & CTA */}
          <div className="flex items-center gap-3">
            {connected && account && (
              <Button variant="outline" className="text-white border-blue-400 hover:bg-blue-600">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  {formatAddress(account)}
                </span>
              </Button>
            )}
            <Link href="/learn">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                START LEARNING
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header