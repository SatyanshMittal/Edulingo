import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Toaster } from 'sonner'
import { MetaMaskProviderWrapper } from '@/components/providers/metamask-provider'
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";

const font = Nunito({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#3B82F6",
};

export const metadata: Metadata = {
  title: "EduLingo - Learn Languages with Web3",
  description: "Learn languages while earning rewards with blockchain technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Toaster theme="light" richColors closeButton />
        <ExitModal />
        <HeartsModal />
        <PracticeModal />
        <MetaMaskProviderWrapper>
          {children}
        </MetaMaskProviderWrapper>
      </body>
    </html>
  );
}
