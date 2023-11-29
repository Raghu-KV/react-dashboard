import { MdOutlineDarkMode } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";

function NavBar() {
  return (
    <div>
      <div className="h-20 border-b">
        <div className="flex items-center justify-between h-20 w-full px-5">
          <div className="flex items-center rounded-full px-6 py-3 bg-blue-100">
            <input
              type="text"
              name=""
              id=""
              className="focus:outline-none bg-transparent placeholder:italic text-blue-600 w-full px-1"
              placeholder="search..."
            />
            <MdOutlineSearch
              size={30}
              className="text-blue-600 hover:cursor-pointer"
            />
          </div>
          <div className="flex gap-5 text-gray-500 cursor-pointer">
            <div className="flex items-center">
              <MdLanguage size={25} />
              <p className="font-semibold">English</p>
            </div>
            <div className="cursor-pointer flex items-center">
              <MdOutlineDarkMode size={25} />
            </div>
            <div className="cursor-pointer flex items-center">
              <MdFullscreenExit size={25} />
            </div>
            <div className="cursor-pointer flex items-center relative">
              <MdNotifications size={25} />
              <div
                className="bg-rose-600 text-white rounded-full flex justify-center items-center min-w-full h-5 text-sm font-semibold absolute top-1
               right-[-12px] p-2"
              >
                3
              </div>
            </div>
            <div className="cursor-pointer flex items-center relative">
              <MdChat size={25} />
              <div
                className="bg-rose-600 text-white rounded-full flex justify-center items-center min-w-full h-5 text-sm font-semibold absolute top-1
               right-[-12px] p-2"
              >
                2
              </div>
            </div>
            <div className="cursor-pointer flex items-center">
              <MdFormatListBulleted size={25} />
            </div>
            <div className="rounded-full">
              <img
                src="https://pbs.twimg.com/media/DsrWmlsWwAEU-dJ.jpg"
                alt="profile image"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
