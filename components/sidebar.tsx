'use client'

import { UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button";

type SidebarProps = {
  className?: string;
};

interface SidebarItemProps {
  label: string
  href: string
  iconSrc: string
}

const SidebarItem = ({ label, href, iconSrc }: SidebarItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  
  return (
    <Link href={href}>
      <Button
        variant="sidebar"
        className={cn(
          'w-full justify-start mb-1',
          isActive && 'bg-blue-50 text-blue-700 border-blue-200'
        )}
      >
        <Image
          src={iconSrc}
          alt={label}
          height={32}
          width={32}
          className="mr-3 h-6 w-6"
        />
        {label}
      </Button>
    </Link>
  )
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/logo.png" alt="Mascot" height={40} width={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
            Edulingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Tournament" href="/tournament" iconSrc="/quests.svg" />
        <SidebarItem label="Referal" href="/referal" iconSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <Link href="/lang-selection">
          <Button 
            className="w-full flex items-center gap-x-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-600"
            size="sm"
          >
            <UserCircle className="h-5 w-5" />
            <span>Change Language</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};