import Link from 'next/link';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerNavigation = {
  platform: [
    { name: 'Services', href: '/services' },
    { name: 'Subjects', href: '/subjects' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Nashville', href: '/nashville' },
    { name: 'Tutors', href: '/tutors' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">615 Learning</span>
            </Link>
            <p className="text-sm text-gray-600">
              Nashville-based, neurodiversity-affirming tutoring with expert supervision
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerNavigation.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} 615 Learning For All. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
