'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useLenis } from 'lenis/react';
import { useState } from 'react';

const MobileNav = () => {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(target) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element);
    }
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" onClick={() => setIsOpen(true)}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between h-full">
        <SheetHeader>
          <SheetTitle>
            <p>Hello</p>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 mt-20">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#services"
                onClick={e => handleLinkClick(e, '#services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="#media" onClick={e => handleLinkClick(e, '#media')}>
                Media
              </Link>
            </li>
            <li>
              <Link href="#cases" onClick={e => handleLinkClick(e, '#cases')}>
                Cases
              </Link>
            </li>
            <li>
              <Link href="#faq" onClick={e => handleLinkClick(e, '#faq')}>
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#contacts"
                onClick={e => handleLinkClick(e, '#contacts')}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
