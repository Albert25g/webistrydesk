import React from 'react';
import DashboardSidebar from '../../components/DashboardSidebar';
import AuthGuard from './AuthGuard';

export default function Dashboard() {
  return (
    <AuthGuard>
      {
        <div className="min-h-screen flex bg-gray-50">
          <DashboardSidebar />
          <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-700">
              Welcome to your dashboard. This is the starting point for your
              admin and analytics features.
            </p>
          </main>
        </div>
      }
    </AuthGuard>
  );
}
