import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div id="header-wrapper">
      <div className="container">
        <header id="header">
          <div className="inner">
            <h1><Link href="/" id="logo">Webistrydesk</Link></h1>

            <nav id="nav" aria-label="Main navigation">
              <ul>
                <li className="current_page_item"><Link href="/">Home</Link></li>
                <li>
                  <a href="#">Dropdown</a>
                  <ul>
                    <li><a href="#">Lorem ipsum dolor</a></li>
                    <li><a href="#">Magna phasellus</a></li>
                    <li>
                      <a href="#">Phasellus consequat</a>
                      <ul>
                        <li><a href="#">Lorem ipsum dolor</a></li>
                        <li><a href="#">Phasellus consequat</a></li>
                        <li><a href="#">Magna phasellus</a></li>
                        <li><a href="#">Etiam dolore nisl</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Veroeros feugiat</a></li>
                  </ul>
                </li>
                <li><a href="/left-sidebar.html">Left Sidebar</a></li>
                <li><a href="/right-sidebar.html">Right Sidebar</a></li>
                <li><a href="/no-sidebar.html">No Sidebar</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
