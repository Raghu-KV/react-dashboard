import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Wiget from "../components/Wiget";
//icons
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="basis-5/6">
        <NavBar />
        <div className="flex gap-7 px-6 py-4">
          <Wiget />
          <Wiget />
          <Wiget />
          <Wiget />
        </div>
      </div>
    </div>
  );
}

export default Home;
