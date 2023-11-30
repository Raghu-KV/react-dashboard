import { MdMoreVert } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="p-3 basis-2/6 border-2 rounded-xl">
      <div className="flex justify-between items-center text-gray-500">
        <h2 className="font-bold">Total Revenue</h2>
        <MdMoreVert size={22} />
      </div>
      <div className="mt-3 flex flex-col justify-center items-center gap-3">
        <div className="w-[35%]">
          <CircularProgressbar
            value={"85"}
            text={"85%"}
            maxValue={"100"}
            strokeWidth={4}
          />
        </div>
        <div className="flex flex-col items-center px-12 gap-4">
          <p className="font-bold text-gray-500 text-lg">
            Total sales made today
          </p>
          <h2 className="text-3xl font-semibold">Rs. 1200</h2>
          <p className="text-sm text-gray-500 text-center">
            Previous transcation processing, Last payment may not be included
          </p>
          <div className="flex w-full justify-between text-gray-500 text-base">
            <div className="flex flex-col gap-1 items-center">
              <p>Target</p>
              <div className="flex items-center text-rose-600 gap-1">
                <MdArrowDownward />
                <p>Rs.500</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p>Last Week</p>
              <div className="flex items-center text-green-600 gap-1">
                <MdArrowUpward />
                <p>Rs.500</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p>Last Month</p>
              <div className="flex items-center text-green-600 gap-1">
                <MdArrowUpward />
                <p>Rs.500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
