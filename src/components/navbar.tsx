'use client';

import Link from 'next/link';
import Image from 'next/image';

import logoImg from '../../public/logo.png';
import smartphoneIcon from '../../public/smartphoneIcon.png';
import mailIcon from '../../public/mailIcon.png';
import {} from 'next/font/google';
import MobileNav from './mobile-nav';
import { useLenis } from 'lenis/react';

const Navbar = () => {
  const lenis = useLenis();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(target) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element);
    }
  };

  return (
    <nav className="px-6 py-4 w-full md:w-[76.375rem] flex items-center justify-between gap-20 bg-[#fff] rounded-xl">
      <div className="relative h-[3.75rem] w-[10.875rem]">
        <Image
          src={logoImg}
          alt="My Company logo Image"
          fill
          placeholder="blur"
          className="absolute object-cover"
        />
      </div>
      <ul className="max-w-[31.438rem] hidden md:flex items-center gap-6 font-medium text-sm text-[#101828]">
        <li>
          <Link href="#services" onClick={e => handleLinkClick(e, '#services')}>
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
          <Link href="#contacts" onClick={e => handleLinkClick(e, '#contacts')}>
            Contacts
          </Link>
        </li>
      </ul>
      <div className="gap-8 md:flex items-center hidden ">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative">
            <Image
              src={smartphoneIcon}
              alt="Smartphone Icon Image"
              fill
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <p className="flex text-[#80A948] items-center gap-4">
            <span>+91</span>
            <span>000000000</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative">
            <Image
              src={mailIcon}
              alt="Smartphone Icon Image"
              fill
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <p className="text-[#80A948]">demo@gmail.com</p>
        </div>
      </div>
      <div className="md:hidden block">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
