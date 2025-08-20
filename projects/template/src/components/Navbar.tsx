import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/20">
      <nav className="container-tight flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">WebistryDesk</Link>
        <div className="text-white/70 text-sm">Executive Site</div>
      </nav>
    </header>
  );
}