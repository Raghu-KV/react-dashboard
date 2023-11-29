import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Wiget from "../components/Wiget";
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
      accentColor: "yellow",
      icon: <MdOutlinePerson size={25} />,
    },
    {
      title: "ORDERS",
      count: 12,
      isCurrency: false,
      linkContent: "View all orders",
      accentColor: "blue",
      icon: <MdShoppingCart size={25} />,
    },
    {
      title: "EARNINGS",
      count: 20000,
      isCurrency: true,
      linkContent: "See details",
      accentColor: "green",
      icon: <MdCurrencyRupee size={25} />,
    },
    {
      title: "BALANCE",
      count: 10000,
      isCurrency: true,
      linkContent: "See details",
      accentColor: "violet",
      icon: <MdAccountBalanceWallet size={25} />,
    },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="basis-5/6">
        <NavBar />
        <div className="flex gap-7 px-6 py-4">
          {wigetData.map((data) => (
            <Wiget data={data} key={data.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
