import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Displays = () => {
  const displaysData = [
    {
      id: 1,
      name: "Центральный экран",
      location: "Площадь Ленина",
      resolution: "4K (3840x2160)",
      status: "Активен",
      lastMaintenance: "2024-03-15",
    },
    {
      id: 2,
      name: "Экран на площади",
      location: "Торговая площадь",
      resolution: "2K (2560x1440)",
      status: "Требует обслуживания",
      lastMaintenance: "2024-02-28",
    },
    {
      id: 3,
      name: "Торговый центр",
      location: "ТЦ Мега",
      resolution: "Full HD (1920x1080)",
      status: "Активен",
      lastMaintenance: "2024-03-10",
    },
    {
      id: 4,
      name: "Вокзал",
      location: "Центральный вокзал",
      resolution: "4K (3840x2160)",
      status: "На обслуживании",
      lastMaintenance: "2024-03-18",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Дисплеи</h1>
          <p className="mt-2 text-gray-600">
            Управление рекламными дисплеями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Всего дисплеев</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{displaysData.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Активные</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">
                {displaysData.filter(d => d.status === "Активен").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">На обслуживании</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600">
                {displaysData.filter(d => d.status === "На обслуживании").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Требуют внимания</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-600">
                {displaysData.filter(d => d.status === "Требует обслуживания").length}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название</TableHead>
                <TableHead>Локация</TableHead>
                <TableHead>Разрешение</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Последнее обслуживание</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displaysData.map((display) => (
                <TableRow key={display.id}>
                  <TableCell className="font-medium">{display.name}</TableCell>
                  <TableCell>{display.location}</TableCell>
                  <TableCell>{display.resolution}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        display.status === "Активен"
                          ? "bg-green-100 text-green-800"
                          : display.status === "На обслуживании"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {display.status}
                    </span>
                  </TableCell>
                  <TableCell>{display.lastMaintenance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Displays;