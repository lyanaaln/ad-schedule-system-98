import { Calendar as CalendarIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";

const Schedule = () => {
  const scheduleData = [
    {
      id: 1,
      displayName: "Центральный экран",
      date: "2024-03-20",
      startTime: "09:00",
      endTime: "18:00",
      advertiser: "Coca Cola",
      status: "Активно",
    },
    {
      id: 2,
      displayName: "Экран на площади",
      date: "2024-03-21",
      startTime: "10:00",
      endTime: "20:00",
      advertiser: "McDonald's",
      status: "Ожидание",
    },
    {
      id: 3,
      displayName: "Торговый центр",
      date: "2024-03-22",
      startTime: "08:00",
      endTime: "22:00",
      advertiser: "Samsung",
      status: "Активно",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Расписание показов</h1>
            <p className="mt-2 text-gray-600">
              Управление расписанием рекламных показов
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-500">Март 2024</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Дисплей</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Время начала</TableHead>
                <TableHead>Время окончания</TableHead>
                <TableHead>Рекламодатель</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.displayName}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.startTime}</TableCell>
                  <TableCell>{item.endTime}</TableCell>
                  <TableCell>{item.advertiser}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        item.status === "Активно"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Schedule;