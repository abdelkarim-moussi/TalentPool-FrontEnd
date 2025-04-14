import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { form } from "framer-motion/client";
const DashboardOverview = () => {
  // Sample data for charts
  const applicationStatusData = {
    labels: [
      "Applied",
      "Screening",
      "Interview",
      "Technical Test",
      "Offer",
      "Hired",
      "Rejected",
    ],
    datasets: [
      {
        label: "Application Status",
        data: [65, 42, 28, 15, 8, 5, 18],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(46, 204, 113, 0.6)",
          "rgba(231, 76, 60, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const monthlyApplicationsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications",
        data: [42, 56, 78, 63, 85, 70],
        backgroundColor: "rgba(79, 70, 229, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Applications"
          value="181"
          change="+12%"
          isPositive={true}
        />
        <StatCard
          title="In Process"
          value="93"
          change="+5%"
          isPositive={true}
        />
        <StatCard
          title="Interviews Scheduled"
          value="28"
          change="+18%"
          isPositive={true}
        />
        <StatCard
          title="Average Time to Hire"
          value="18 days"
          change="-3 days"
          isPositive={true}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Applications by Status</h3>
          <div className="h-80">
            <Doughnut
              data={applicationStatusData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Monthly Applications</h3>
          <div className="h-80">
            <Bar
              data={monthlyApplicationsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <ActivityItem
            action="Application Status Updated"
            description="John Doe moved to Interview stage"
            time="10 minutes ago"
          />
          <ActivityItem
            action="New Application"
            description="Sarah Smith applied for Senior Developer"
            time="1 hour ago"
          />
          <ActivityItem
            action="Interview Scheduled"
            description="Meeting with Michael Brown for UI Designer position"
            time="2 hours ago"
          />
          <ActivityItem
            action="Job Ad Created"
            description="New opening for Marketing Specialist"
            time="Yesterday"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, isPositive }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p
        className={`text-sm mt-2 ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change} {isPositive ? "↑" : "↓"}
      </p>
    </div>
  );
};

const ActivityItem = ({ action, description, time }) => {
  return (
    <div className="flex py-2 border-b border-gray-100">
      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
      <div className="flex-1">
        <p className="text-sm font-medium">{action}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  );
};

export default DashboardOverview;
