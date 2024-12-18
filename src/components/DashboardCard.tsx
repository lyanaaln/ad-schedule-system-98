import { Card } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

const DashboardCard = ({ title, value, icon, description }: DashboardCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <div className="text-primary">{icon}</div>
      </div>
    </Card>
  );
};

export default DashboardCard;