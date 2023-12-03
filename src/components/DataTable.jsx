import { MdOpenInNew } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function DataTable() {
  const tableData = [
    {
      id: 7895,
      userName: "Gandhi",
      email: "gandhi@gmail.com",
      status: "active",
    },
    {
      id: 7895,
      userName: "Gandhi",
      email: "gandhi@gmail.com",
      status: "active",
    },
    {
      id: 7895,
      userName: "Gandhi",
      email: "gandhi@gmail.com",
      status: "active",
    },
    {
      id: 7895,
      userName: "Gandhi",
      email: "gandhi@gmail.com",
      status: "active",
    },
    {
      id: 7895,
      userName: "Gandhi",
      email: "gandhi@gmail.com",
      status: "active",
    },
  ];
  return (
    <div className="p-6">
      <table className="border-collapse table-auto border-slate-500 w-full">
        <thead className="text-blue-600">
          <tr>
            <th className="border-b border-gray-400 font-semibold">User ID</th>
            <th className="border-b border-gray-400 font-semibold p-2 roun">
              User Name
            </th>
            <th className="border-b border-gray-400 font-semibold">Email</th>
            <th className="border-b border-gray-400 font-semibold">Status</th>
            <th className="border-b border-gray-400 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tableData.map((data) => (
            <tr className="hover:bg-gray-200" key={data.id}>
              <td className="border-b border-gray-400 p-4">{data.id}</td>
              <td className="border-b border-gray-400">{data.userName}</td>
              <td className="border-b border-gray-400">{data.email}</td>
              <td className="border-b border-gray-400">{data.status}</td>
              <td className="border-b border-gray-400">
                <div className="flex items-center justify-center gap-3">
                  <div className="cursor-pointer flex items-center justify-center gap-1">
                    <MdOpenInNew className="mx-auto inline-block" size={22} />
                    View
                  </div>
                  <p>|</p>
                  <div className="cursor-pointer flex items-center justify-center gap-1 text-rose-600">
                    <MdDelete className="mx-auto inline-block" size={22} />
                    Delete
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
