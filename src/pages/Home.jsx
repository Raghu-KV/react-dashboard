import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Wiget from "../components/Wiget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
//icons
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";

function Home() {
  const wigetData = [
    {
      title: "USERS",
      count: 101,
      isCurrency: false,
      linkContent: "See all users",
      accentColor: "bg-yellow-200",
      textColor: "text-yellow-600",
      icon: <MdOutlinePerson size={25} />,
    },
    {
      title: "ORDERS",
      count: 12,
      isCurrency: false,
      linkContent: "View all orders",
      accentColor: "bg-blue-200",
      textColor: "text-blue-600",
      icon: <MdShoppingCart size={25} />,
    },
    {
      title: "EARNINGS",
      count: 20000,
      isCurrency: true,
      linkContent: "See details",
      accentColor: "bg-green-200",
      textColor: "text-green-600",
      icon: <MdCurrencyRupee size={25} />,
    },
    {
      title: "BALANCE",
      count: 10000,
      isCurrency: true,
      linkContent: "See details",
      accentColor: "bg-violet-200",
      textColor: "text-violet-600",
      icon: <MdAccountBalanceWallet size={25} />,
    },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="basis-5/6">
        <NavBar />
        {/* WIDGET */}
        <div className="flex gap-4 px-6 py-4">
          {wigetData.map((data) => (
            <Wiget data={data} key={data.title} />
          ))}
        </div>
        {/* CHARTS */}
        <div className="px-6 flex gap-4">
          <Featured />
          <Chart />
        </div>
        {/* Table */}
        <div></div>
      </div>
    </div>
  );
}

export default Home;
