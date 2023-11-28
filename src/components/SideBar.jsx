import { MdDashboard } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdHardware } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
function SideBar() {
  return (
    <div className="border-r basis-1/6 font-poppins h-screen bg-white">
      <div className="p-6 border-b flex justify-center items-center sticky top-0 bg-white">
        <span className="font-bold text-xl text-blue-600 ">Azen Admin</span>
      </div>
      <div className={``}>
        <ul className={`text-gray-500`}>
          <p className={`mt-4 ml-4 font-bold text-gray-400 text-xs`}>MAIN</p>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdDashboard size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Dashboard</span>
          </li>
          <p className={`mt-4 ml-4 font-bold text-gray-400 text-xs`}>LISTS</p>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdPerson size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Users</span>
          </li>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdHardware size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Products</span>
          </li>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdOutlineCreditCard size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Orders</span>
          </li>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdLocalShipping size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Delivery</span>
          </li>
          <p className={`mt-4 ml-4 font-bold text-gray-400 text-xs`}>USEFUL</p>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdBarChart size={30} className={"text-blue-600"} />

            <span className={"font-medium"}>Stats</span>
          </li>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdNotifications size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Notification</span>
          </li>
          <p className={`mt-4 ml-4 font-bold text-gray-400 text-xs`}>SERVICE</p>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdHealthAndSafety size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>System Health</span>
          </li>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdOutlineReceiptLong size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Logs</span>
          </li>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdSettings size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Settings</span>
          </li>
          <p className={`mt-4 ml-4 font-bold text-gray-400 text-xs`}>USER</p>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdOutlinePets size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>Profile</span>
          </li>
          <li
            className={
              "flex  gap-2 cursor-pointer items-center px-8 py-2  hover:bg-blue-100 duration-150"
            }
          >
            <MdOutlineLogout size={30} className={"text-blue-600"} />
            <span className={"font-medium"}>LogOut</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mt-5 font-bold text-blue-600 ml-4">Theme</h3>
        <div className="flex justify-start ml-8 mt-2 items-center gap-3">
          <div className="h-8 w-8 bg-white border-gray-400 border rounded-lg cursor-pointer"></div>
          <div className="h-8 w-8 bg-slate-700 border-gray-400 border rounded-lg cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
