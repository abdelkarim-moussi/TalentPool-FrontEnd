import React, { useState } from 'react';
import DashboardOverview from './DashboardOverview';
import ApplicationsManager from './ApplicationsManager';
import CreateJobAd from './CreateJobAd';

import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { form } from 'framer-motion/client';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-4 text-sm text-gray-500">Welcome, Recruiter</span>
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
              RD
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 ${activeTab === 'overview' 
                ? 'border-b-2 border-indigo-500 text-indigo-600 font-medium' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Overview & Statistics
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`pb-4 px-1 ${activeTab === 'applications' 
                ? 'border-b-2 border-indigo-500 text-indigo-600 font-medium' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Manage Applications
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`pb-4 px-1 ${activeTab === 'create' 
                ? 'border-b-2 border-indigo-500 text-indigo-600 font-medium' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Create Job Ad
            </button>
          </nav>
        </div>
        
        <div className="mt-6">
          {activeTab === 'overview' && <DashboardOverview />}
          {activeTab === 'applications' && <ApplicationsManager />}
          {activeTab === 'create' && <CreateJobAd />}
        </div>
      </main>
    </div>
  );
};

export default RecruiterDashboard;