import { Clock, DollarSign, Play, Users } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome to your advertising management system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Ad Time"
            value="124 hours"
            icon={<Clock className="h-6 w-6" />}
            description="This month"
          />
          <DashboardCard
            title="Active Campaigns"
            value="12"
            icon={<Play className="h-6 w-6" />}
            description="Currently running"
          />
          <DashboardCard
            title="Revenue"
            value="$45,231"
            icon={<DollarSign className="h-6 w-6" />}
            description="Last 30 days"
          />
          <DashboardCard
            title="Advertisers"
            value="48"
            icon={<Users className="h-6 w-6" />}
            description="Active clients"
          />
        </div>

        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium">Campaign {i} started</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;