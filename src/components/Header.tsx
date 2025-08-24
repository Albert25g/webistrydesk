'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Header */}
      <header id="header">
        <Link href="/" className="logo">
          WebistryDesk
        </Link>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          <li className={isActive('/') ? 'active' : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive('/services') ? 'active' : ''}>
            <Link href="/services">Services</Link>
          </li>
          <li className={isActive('/portfolio') ? 'active' : ''}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link href="/about">About</Link>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a
              href="https://linkedin.com/company/webistrydesk"
              className="icon brands fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/webistrydesk"
              className="icon brands fa-facebook-f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/webistrydesk"
              className="icon brands fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/webistrydesk"
              className="icon brands fa-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
