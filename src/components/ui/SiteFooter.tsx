export default function SiteFooter() {
  return (
    <footer className="bg-black text-gray-400 py-8 text-center border-t border-gray-800">
      <div className="mb-2">
        Contact:{' '}
        <a
          href="mailto:hello@webistrydesk.com"
          className="text-[#00f0ff] hover:underline"
        >
          hello@webistrydesk.com
        </a>
      </div>
      <div className="text-xs">
        © {new Date().getFullYear()} WebistryDesk. All rights reserved.
      </div>
    </footer>
  );
}
