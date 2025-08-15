import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-gray-950/70">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="font-semibold text-white text-lg">WebistryDesk</div>
          <p className="text-sm text-gray-400 mt-2">
            Living Digital Architecture — modern web services for growing businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-sm font-semibold text-gray-200">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-sm font-semibold text-gray-200">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="underline" href="mailto:info@webistrydesk.com">info@webistrydesk.com</a></li>
            <li><a className="underline" href="mailto:support@webistrydesk.com">support@webistrydesk.com</a></li>
            <li className="text-gray-500">Johannesburg, South Africa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {year} WebistryDesk. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">X</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
