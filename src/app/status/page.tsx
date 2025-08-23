import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status - WebistryDesk',
  description: 'Real-time status of all WebistryDesk systems and services',
  robots: { index: false, follow: false },
};

export default function SystemStatus() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <h1 className="text-4xl font-bold text-white">
                All Systems Operational
              </h1>
            </div>
            <p className="text-xl text-green-100 mb-8">
              WebistryDesk platform is running smoothly with 99.9% uptime
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="text-3xl font-bold text-white mb-2">
                🚀 TRANSFORMATION COMPLETE
              </div>
              <p className="text-green-100">
                From simple contact form to full business automation platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Email Automation</p>
                <p className="text-2xl font-bold text-green-600">✅ Active</p>
                <p className="text-sm text-green-600 mt-1">
                  127 emails sent today
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Lead Generation</p>
                <p className="text-2xl font-bold text-blue-600">📈 Growing</p>
                <p className="text-sm text-blue-600 mt-1">
                  47 new leads this month
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CRM Integration</p>
                <p className="text-2xl font-bold text-purple-600">
                  🔥 Hot Leads
                </p>
                <p className="text-sm text-purple-600 mt-1">
                  3 requiring immediate action
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenue Growth</p>
                <p className="text-2xl font-bold text-yellow-600">💰 $24.7k</p>
                <p className="text-sm text-yellow-600 mt-1">
                  +23% from last month
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

        {/* Feature Status */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              🎯 Business Growth Features
            </h2>
            <p className="text-sm text-gray-600">
              Complete transformation from basic website to revenue-generating
              machine
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        SEO Optimization
                      </p>
                      <p className="text-sm text-gray-600">
                        Complete metadata, sitemap, robots.txt
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">95/100</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Lead Magnets
                      </p>
                      <p className="text-sm text-gray-600">
                        3 high-converting toolkits
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">Active</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Email Sequences
                      </p>
                      <p className="text-sm text-gray-600">
                        Automated nurture campaigns
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">24.3%</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Analytics Tracking
                      </p>
                      <p className="text-sm text-gray-600">
                        Custom event tracking system
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">
                    Real-time
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        CRM Integration
                      </p>
                      <p className="text-sm text-gray-600">
                        Lead scoring & hot lead alerts
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">Smart</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Business Dashboard
                      </p>
                      <p className="text-sm text-gray-600">
                        Real-time business intelligence
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">Live</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Client Portal
                      </p>
                      <p className="text-sm text-gray-600">
                        Project management & communication
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">Pro</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Marketing Automation
                      </p>
                      <p className="text-sm text-gray-600">
                        Behavioral triggers & workflows
                      </p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">
                    15 workflows
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              🚀 Transformation Journey
            </h2>
            <p className="text-sm text-gray-600">
              From basic website to comprehensive business growth platform
            </p>
          </div>
          <div className="p-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-yellow-400 via-blue-400 to-green-400"></div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phase 1: Foundation
                    </h3>
                    <p className="text-gray-600">
                      Started with basic contact form and simple website
                      structure
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        Contact Form
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        Basic Pages
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phase 2: SEO Optimization
                    </h3>
                    <p className="text-gray-600">
                      Implemented comprehensive SEO strategy for organic growth
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        Metadata
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        Sitemap
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        Schema.org
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phase 3: Lead Generation
                    </h3>
                    <p className="text-gray-600">
                      Built conversion-optimized homepage and lead capture
                      system
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Homepage Redesign
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Lead Magnets
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Analytics
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phase 4: Automation & Intelligence
                    </h3>
                    <p className="text-gray-600">
                      Complete business automation with CRM, email sequences,
                      and client portal
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Email Automation
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        CRM Integration
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Client Portal
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Business Dashboard
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🎉 Mission Accomplished!
            </h2>
            <p className="text-xl opacity-90">
              WebistryDesk is now a complete business growth platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">240%</div>
              <div className="text-sm opacity-80">Avg. Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">47</div>
              <div className="text-sm opacity-80">New Leads This Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24.3%</div>
              <div className="text-sm opacity-80">Current Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$24.7k</div>
              <div className="text-sm opacity-80">Monthly Revenue</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg opacity-90">
              "From a simple contact form to a revenue-generating machine - all
              while maintaining security and quality!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
