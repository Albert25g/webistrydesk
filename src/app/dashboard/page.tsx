'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [guest, setGuest] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const g = localStorage.getItem('wd_guest');
      if (!g) {
        router.push('/login');
      } else {
        setGuest(true);
      }
    } catch {
      router.push('/login');
    }
  }, [router]);

  if (!guest) return <div />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                WebistryDesk Dashboard
              </h1>
              <p className="text-gray-600">
                Business intelligence & lead management
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                Live
              </span>
              <button
                onClick={() => {
                  try {
                    localStorage.removeItem('wd_guest');
                  } catch {}
                  router.push('/');
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
                <p className="text-3xl font-bold text-gray-900">$24,750</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +23% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New Leads</p>
                <p className="text-3xl font-bold text-gray-900">47</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +15% this week
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
                <p className="text-sm text-blue-600 flex items-center mt-1">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  3 launching this week
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900">24.3%</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +5.2% improvement
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Leads */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  🔥 Hot Leads (Last 24h)
                </h2>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Follow up required
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                    <p className="text-sm text-gray-600">
                      sarah@techstartup.com
                    </p>
                    <p className="text-xs text-gray-500">
                      Downloaded: Conversion Toolkit • 2 hours ago
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                      Call
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      Email
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Marcus Rivera
                    </h4>
                    <p className="text-sm text-gray-600">
                      m.rivera@lawfirm.com
                    </p>
                    <p className="text-xs text-gray-500">
                      Form: Free Strategy Call • 4 hours ago
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                      Call
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      Email
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Lisa Thompson
                    </h4>
                    <p className="text-sm text-gray-600">
                      lisa@fitnessworld.com
                    </p>
                    <p className="text-xs text-gray-500">
                      Downloaded: SEO Guide • 6 hours ago
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                      Called
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      Follow-up
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                  View All Leads
                </button>
              </div>
            </div>
          </div>

          {/* Project Pipeline */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                💼 Project Pipeline
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      TechFlow E-commerce
                    </h4>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Complete online store with payment integration
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Due: Jan 15</span>
                    <span className="font-semibold text-gray-900">$8,500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      Legal Eagles Website
                    </h4>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      Design Phase
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Professional law firm website with client portal
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Due: Jan 22</span>
                    <span className="font-semibold text-gray-900">$4,200</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      FitLife Studio Redesign
                    </h4>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                      Proposal Sent
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Modern fitness website with booking system
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Proposal expires: Jan 20
                    </span>
                    <span className="font-semibold text-gray-900">$5,800</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-yellow-600 h-2 rounded-full"
                      style={{ width: '10%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              📊 Traffic & Conversion Analytics
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-600">Website Visitors</div>
                <div className="text-sm text-green-600">+12% this month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">693</div>
                <div className="text-sm text-gray-600">
                  Lead Magnet Downloads
                </div>
                <div className="text-sm text-green-600">+28% this month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">168</div>
                <div className="text-sm text-gray-600">
                  Strategy Call Bookings
                </div>
                <div className="text-sm text-green-600">+35% this month</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                🎯 Top Converting Pages
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>/services</span>
                  <span className="font-semibold">34.2% conversion</span>
                </div>
                <div className="flex justify-between">
                  <span>/</span>
                  <span className="font-semibold">24.8% conversion</span>
                </div>
                <div className="flex justify-between">
                  <span>/contact</span>
                  <span className="font-semibold">41.5% conversion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
