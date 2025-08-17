import {
  isFirebaseConfigured,
  getFirebasePublicConfig,
} from '../../../lib/firebase';

export default function DebugPage() {
  const configured = isFirebaseConfigured();
  const cfg = getFirebasePublicConfig();

  return (
    <main className="min-h-screen p-6 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Firebase Debug</h1>
        <p className="mb-4">
          Configured: <strong>{String(configured)}</strong>
        </p>
        <h2 className="text-lg font-semibold mb-2">Public config</h2>
        <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(cfg, null, 2)}
        </pre>
        <p className="mt-4 text-sm text-gray-400">
          If this shows <code>false</code> or <code>null</code>, copy
          `.env.example` → `.env.local` and fill the keys, then restart the dev
          server.
        </p>
      </div>
    </main>
  );
}
