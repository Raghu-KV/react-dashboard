import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const data = [
    {
      month: "JAN",
      amount: 20000,
    },
    {
      month: "FEB",
      amount: 45000,
    },
    {
      month: "MAR",
      amount: 100000,
    },
    {
      month: "APR",
      amount: 120000,
    },
    {
      month: "MAY",
      amount: 96000,
    },
    {
      month: "JUN",
      amount: 70000,
    },
  ];
  return (
    <div className="p-3 border-2 rounded-xl basis-4/6  text-gray-500">
      <h2 className="font-bold mb-8">Last 6 months Revenue</h2>

      <ResponsiveContainer width="100%" height={"75%"}>
        <AreaChart
          width={730}
          height={500}
          data={data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
