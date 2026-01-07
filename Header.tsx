'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BookOpen, Menu, User, LogOut } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Subjects', href: '/subjects' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'Nashville', href: '/nashville' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Tutors', href: '/tutors' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const getDashboardLink = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'ADMIN':
        return '/admin';
      case 'LEAD_SPECIALIST':
        return '/specialist';
      case 'TUTOR':
        return '/tutor';
      case 'PARENT':
        return '/parent';
      default:
        return '/';
    }
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">615 Learning For All</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={getDashboardLink()}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild className="hidden sm:inline-flex">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                        pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
