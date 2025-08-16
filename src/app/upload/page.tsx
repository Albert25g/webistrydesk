'use client';
import { useRef, useState } from 'react';
import type { PutBlobResult } from '@vercel/blob';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Upload</h1>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const file = inputRef.current?.files?.[0];
        if (!file) return;
        const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
          method: 'POST',
          body: file,
        });
        setBlob(await res.json());
      }}>
        <input ref={inputRef} type="file" required />
        <button className="ml-2 px-3 py-1 rounded bg-black text-white">Upload</button>
      </form>
      {blob && <p className="break-all">URL: <a className="underline" href={blob.url}>{blob.url}</a></p>}
    </main>
  );
}
