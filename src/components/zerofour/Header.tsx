import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header id="header">
      <div className="inner">
        <Link href="/" className="logo">
          Webistrydesk
        </Link>
        <nav id="nav" aria-label="Main">
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
}
