import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header id="header">
      <div className="inner">
        <Link href="/" className="logo flex items-center gap-2">
          <img
            src="/logo.png"
            alt="WebistryDesk Logo"
            width="100"
            height="100"
            className="rounded"
          />
          Webistrydesk
        </Link>
        <nav id="nav" aria-label="Main">
          <Link href="/services">Our services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
}
