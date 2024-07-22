import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between h-full">
        <SheetHeader>
          <SheetTitle>
            {/* <div className="flex items-center gap-3">
              <div className="h-6 w-6 relative rounded-full overflow-hidden">
                <Image
                  src={sessionUser?.image || 'https://github.com/shadcn.png'}
                  alt={sessionUser?.name || 'User'}
                  fill
                  className="object-cover absolute"
                />
              </div>
              <p>{sessionUser?.name!}</p>
            </div> */}
            <p>Hello</p>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 mt-20">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer">
              <Link href="/dashboard">〰️ Dashboard</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/forum">🔗 Forum</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/chat">🤖 Chat</Link>
            </li>
          </ul>
        </div>
        <SheetFooter className="flex justify-end">
          <div className="flex gap-2">
            {/* <SignOutBtnForm />
            <ModeToggle /> */}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
