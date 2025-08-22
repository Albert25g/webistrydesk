import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <footer id="footer" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
          <div className="mb-3">WebistryDesk — Design & Development</div>
          <div className="mb-2">
            Emails:
            <a href="mailto:info@webistrydesk.com">info@webistrydesk.com</a>
            {' • '}
            <a href="mailto:support@webistrydesk.com">
              support@webistrydesk.com
            </a>
            {' • '}
            <a href="mailto:andre@webistrydesk.com">andre@webistrydesk.com</a>
            {' • '}
            <a href="mailto:albert@webistrydesk.com">albert@webistrydesk.com</a>
          </div>
          <div className="mb-2">
            Phone: <a href="tel:+27797302436">+27 79 730 2436</a>
          </div>
          <div className="mb-2">
            HQ: Nelspruit (Mbombela), South Africa
            <br />
            Satellites: Pretoria, Cape Town
          </div>
          <div id="copyright" className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="WebistryDesk Logo"
                width={100}
                height={100}
                className="rounded"
              />
            </div>
            <div className="flex-1 text-center">
              © {new Date().getFullYear()} WebistryDesk. All rights reserved.
            </div>
            <div className="w-8"></div> {/* Spacer for balance */}
          </div>
          <div className="mt-2 text-xs text-gray-500">
            <a href="/terms">Terms &amp; Conditions</a>
            {' • '}
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
