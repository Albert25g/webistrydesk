'use client';

import React, { useState } from 'react';
import DashboardSidebar from '../../../components/DashboardSidebar';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30days');

  // Sample data - in a real app, this would come from your backend
  const stats = {
    totalRevenue: 125000,
    activeProjects: 8,
    completedProjects: 24,
    totalClients: 15,
    monthlyGrowth: 12.5,
    projectsGrowth: 8.3,
    clientsGrowth: 15.2,
  };

  const recentProjects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      client: 'TechCorp',
      status: 'In Progress',
      progress: 75,
    },
    {
      id: 2,
      name: 'Corporate Website',
      client: 'ABC Holdings',
      status: 'Completed',
      progress: 100,
    },
    {
      id: 3,
      name: 'Mobile App Design',
      client: 'StartupXYZ',
      status: 'Planning',
      progress: 25,
    },
    {
      id: 4,
      name: 'SEO Optimization',
      client: 'Local Business',
      status: 'In Progress',
      progress: 60,
    },
  ];

  const monthlyRevenue = [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 92000 },
    { month: 'Mar', revenue: 78000 },
    { month: 'Apr', revenue: 105000 },
    { month: 'May', revenue: 118000 },
    { month: 'Jun', revenue: 125000 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="3months">Last 3 months</option>
              <option value="1year">Last year</option>
            </select>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Revenue
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    R{stats.totalRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-2xl">💰</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-600 text-sm font-medium">
                  +{stats.monthlyGrowth}%
                </span>
                <span className="text-gray-600 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Projects
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.activeProjects}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">📊</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-blue-600 text-sm font-medium">
                  +{stats.projectsGrowth}%
                </span>
                <span className="text-gray-600 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Completed Projects
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.completedProjects}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-2xl">✅</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-gray-600 text-sm">All time</span>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Clients
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.totalClients}
                  </p>
                </div>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-600 text-2xl">👥</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-cyan-600 text-sm font-medium">
                  +{stats.clientsGrowth}%
                </span>
                <span className="text-gray-600 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Chart */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Monthly Revenue</h3>
              <div className="space-y-4">
                {monthlyRevenue.map((data, index) => (
                  <div
                    key={data.month}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-gray-600">
                      {data.month}
                    </span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-brand-500 h-2 rounded-full"
                          style={{ width: `${(data.revenue / 125000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      R{data.revenue.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Recent Projects</h3>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        {project.name}
                      </h4>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : project.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {project.client}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              project.progress === 100
                                ? 'bg-green-500'
                                : project.progress >= 50
                                ? 'bg-blue-500'
                                : 'bg-yellow-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card mt-8">
            <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="btn btn-primary justify-start text-left">
                <span className="mr-3">➕</span>
                Add New Project
              </button>
              <button className="btn btn-secondary justify-start text-left">
                <span className="mr-3">📊</span>
                Generate Report
              </button>
              <button className="btn btn-outline justify-start text-left">
                <span className="mr-3">👤</span>
                Add New Client
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
