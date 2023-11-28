function SideBar() {
  return (
    <div className="border-r basis-1/6 font-poppins h-screen bg-white">
      <div className="p-6 border-b flex justify-center items-center">
        <span className="font-bold text-xl text-blue-600">Azen Admin</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notification</span>
          </li>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">colorOptions</div>
    </div>
  );
}

export default SideBar;
