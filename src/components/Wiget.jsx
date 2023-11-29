import { MdArrowForward } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
function Wiget() {
  return (
    <div className="flex flex-1 justify-between border-2 font-poppins p-3 rounded-xl bg-white duration-200">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-gray-500">USERS</p>
        <h3 className="text-5xl">100</h3>
        <p className="border-b-2 border-gray-500 text-gray-500">
          See All Users
          <MdArrowForward size={20} className="ml-1 inline-block" />
        </p>
      </div>
      <div className="flex justify-between items-center flex-col">
        <div className="flex items-center text-green-600">
          <MdKeyboardDoubleArrowUp size={25} />
          <p className="font-semibold ">10%</p>
        </div>
        <div className="bg-yellow-200 p-1 rounded-xl">
          <MdOutlinePerson size={30} className="text-yellow-600" />
        </div>
      </div>
    </div>
  );
}

export default Wiget;
