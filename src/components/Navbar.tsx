import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/20">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <img
            src="/Logo-webistrydesk.png"
            alt="WebistryDesk Logo"
            width="32"
            height="32"
            className="rounded"
            onError={(e) => console.error('Image failed to load:', e)}
            onLoad={() => console.log('Image loaded successfully')}
          />
          WebistryDesk
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm text-white/70">
          <Link href="#value" className="hover:text-white">
            Value
          </Link>
          <Link href="#proof" className="hover:text-white">
            Proof
          </Link>
          <Link href="#locations" className="hover:text-white">
            Locations
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
