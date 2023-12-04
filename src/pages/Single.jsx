import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import SingleUser from "./../components/SingleUser";
import Chart from "./../components/Chart";
import OrdersTable from "../components/OrdersTable";

function Single() {
  return (
    <div className="flex">
      <SideBar />
      <div className="basis-5/6 font-poppins">
        <NavBar />
        <div className="px-6 py-2 flex gap-4">
          {/* single user component */}
          <SingleUser />
          <Chart />
        </div>
        {/* user order tabel */}
        <div className="mx-6 my-2 px-6 py-2 border-2 rounded-lg">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}

export default Single;
