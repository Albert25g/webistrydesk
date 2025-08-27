import Link from 'next/link';
import React from 'react';

export default function DashboardSidebar() {
  return (
    <aside className="w-full md:w-64 bg-white border-r border-gray-200 h-full p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link
          href="/dashboard"
          className="text-gray-800 hover:text-brand font-medium"
        >
          Overview
        </Link>
        <Link
          href="/dashboard/analytics"
          className="text-gray-600 hover:text-brand"
        >
          Analytics
        </Link>
        <Link
          href="/dashboard/profile"
          className="text-gray-600 hover:text-brand"
        >
          Profile
        </Link>
        <Link
          href="/dashboard/settings"
          className="text-gray-600 hover:text-brand"
        >
          Settings
        </Link>
        {/* Add more dashboard links here as needed */}
      </nav>
    </aside>
  );
}
