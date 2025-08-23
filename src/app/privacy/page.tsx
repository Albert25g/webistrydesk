export default function PrivacyPage(){
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-10 text-sm text-gray-700">
        <h1 className="text-xl font-semibold mb-4">Privacy Policy</h1>
        <p className="mb-2">We respect your privacy. This site collects minimal data and uses localStorage only for a temporary guest flag for demo purposes.</p>
        <p className="mb-2">For production deployments, ensure you provide full disclosure about cookies, analytics, and data storage.</p>
        <p className="text-xs text-gray-500 mt-6">Contact privacy@webistrydesk.com for questions.</p>
      </div>
    </main>
  );
}
