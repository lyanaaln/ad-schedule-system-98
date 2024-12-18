import { Home, Calendar, Monitor, Users, Settings, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();

  const adminMenuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "User Orders", path: "/orders" },
    { icon: Monitor, label: "Displays", path: "/displays" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: Settings, label: "Account", path: "/account" },
  ];

  const guestMenuItems = [
    { icon: Monitor, label: "Displays", path: "/displays" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: CreditCard, label: "Subscription", path: "/subscription" },
    { icon: Settings, label: "Account", path: "/account" },
  ];

  const menuItems = user?.role === 'admin' ? adminMenuItems : guestMenuItems;

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Ad Manager</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
        <button
          onClick={logout}
          className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors w-full"
        >
          <Settings className="h-5 w-5 mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;