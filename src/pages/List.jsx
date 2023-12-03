import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import DataTable from "../components/DataTable";

function List() {
  return (
    <div className="flex">
      <SideBar />
      <div className="basis-5/6 font-poppins">
        <NavBar />
        {/* DATA TABLE */}
        <div className="px-6 py-6">
          <div className="border-2 rounded-xl p-3 h-screen">
            <h2 className="font-bold text-gray-500">User Data</h2>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
