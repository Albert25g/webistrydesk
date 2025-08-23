export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-tight py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} WebistryDesk (Pty) Ltd
      </div>
    </footer>
  );
}