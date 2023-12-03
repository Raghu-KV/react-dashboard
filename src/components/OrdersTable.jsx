import { MdOpenInNew } from "react-icons/md";
function OrdersTable() {
  const tableData = [
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
    {
      id: 7895,
      product: "Lenovo Ideapad",
      img: "https://m.media-amazon.com/images/I/61rLSGPItQL._SX679_.jpg",
      customer: "Raju",
      date: "1 march",
      amount: 72500,
      paymentMode: "online",
      status: "approved",
    },
  ];

  console.log(tableData.length);

  return (
    <div className="p-6">
      <table className="border-collapse table-auto border-slate-500 w-full">
        <thead className="text-blue-600">
          <tr>
            <th className="border-b border-gray-400 font-semibold">
              Tracking ID
            </th>
            <th className="border-b border-gray-400 font-semibold p-2 roun">
              Product
            </th>
            <th className="border-b border-gray-400 font-semibold">Customer</th>
            <th className="border-b border-gray-400 font-semibold">Date</th>
            <th className="border-b border-gray-400 font-semibold">Amount</th>
            <th className="border-b border-gray-400 font-semibold">
              Payment Method
            </th>
            <th className="border-b border-gray-400 font-semibold">Status</th>
            <th className="border-b border-gray-400 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tableData.map((data) => (
            <tr className="hover:bg-gray-200" key={data.id}>
              <td className="border-b border-gray-400 p-4">{data.id}</td>
              <td className="border-b border-gray-400">{data.product}</td>
              <td className="border-b border-gray-400">{data.customer}</td>
              <td className="border-b border-gray-400">{data.date}</td>
              <td className="border-b border-gray-400">{data.amount}</td>
              <td className="border-b border-gray-400">{data.paymentMode}</td>
              <td className="border-b border-gray-400">{data.status}</td>
              <td className="border-b border-gray-400 cursor-pointer">
                <MdOpenInNew className="mx-auto inline-block mr-2" size={22} />
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
