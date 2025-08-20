'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/20">
      <nav className="container-tight flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">
          WebistryDesk
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm hover:text-white/90 ${
                  pathname === l.href ? 'text-white' : 'text-white/70'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-gold">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
