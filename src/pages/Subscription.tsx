import { CreditCard, DollarSign, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const Subscription = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Subscription Plans</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Basic</h2>
            <p className="text-gray-600 mb-4">Perfect for small businesses</p>
            <div className="text-3xl font-bold mb-4">$29<span className="text-sm text-gray-500">/month</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Up to 5 displays
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Basic analytics
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 24/7 support
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Select Plan
            </button>
          </Card>

          <Card className="p-6 border-blue-500 border-2">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Professional</h2>
            <p className="text-gray-600 mb-4">For growing businesses</p>
            <div className="text-3xl font-bold mb-4">$99<span className="text-sm text-gray-500">/month</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Up to 20 displays
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Advanced analytics
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Priority support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Custom branding
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Select Plan
            </button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
            <p className="text-gray-600 mb-4">For large organizations</p>
            <div className="text-3xl font-bold mb-4">$299<span className="text-sm text-gray-500">/month</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Unlimited displays
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Custom analytics
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 24/7 dedicated support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> API access
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Subscription;