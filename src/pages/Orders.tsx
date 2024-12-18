import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";

const Orders = () => {
  const ordersData = [
    {
      id: 1,
      customer: "Иван Петров",
      display: "Центральный экран",
      date: "2024-03-19",
      duration: "5 дней",
      amount: "50,000 ₽",
      status: "Оплачен",
    },
    {
      id: 2,
      customer: "ООО Рекламное Агентство",
      display: "Экран на площади",
      date: "2024-03-18",
      duration: "10 дней",
      amount: "95,000 ₽",
      status: "В обработке",
    },
    {
      id: 3,
      customer: "Анна Сидорова",
      display: "Торговый центр",
      date: "2024-03-17",
      duration: "3 дня",
      amount: "30,000 ₽",
      status: "Оплачен",
    },
    {
      id: 4,
      customer: "ИП Смирнов",
      display: "Центральный экран",
      date: "2024-03-16",
      duration: "7 дней",
      amount: "70,000 ₽",
      status: "Ожидает оплаты",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Заказы пользователей</h1>
          <p className="mt-2 text-gray-600">
            Управление заказами на размещение рекламы
          </p>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Клиент</TableHead>
                <TableHead>Дисплей</TableHead>
                <TableHead>Дата заказа</TableHead>
                <TableHead>Длительность</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordersData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.customer}</TableCell>
                  <TableCell>{order.display}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.duration}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        order.status === "Оплачен"
                          ? "bg-green-100 text-green-800"
                          : order.status === "В обработке"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
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

export default Orders;