'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getFirebaseAuth, initFirebaseClient } from '@/lib/firebaseClient';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    initFirebaseClient();
    const auth = getFirebaseAuth();
    if (!auth) {
      router.replace('/login');
      return;
    }
    const unsub = auth.onIdTokenChanged(
      (user: import('firebase/auth').User | null) => {
        if (!user) {
          router.replace('/login');
        }
      }
    );
    return () => unsub && unsub();
  }, [router]);

  return <>{children}</>;
}
