export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} WebistryDesk (Pty) Ltd</div>
        <div className="text-white/60 text-sm">
          <a className="link-muted" href="#value">Value</a> · <a className="link-muted" href="#proof">Proof</a> · <a className="link-muted" href="#locations">Locations</a>
        </div>
      </div>
    </footer>
  );
}
