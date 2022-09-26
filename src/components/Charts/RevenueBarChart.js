import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 2780,
    pv: 3908,
    zv: 2000,
  },
  {
    name: 'Page B',
    uv: 3490,
    pv: 4300,
    zv: 2100,
  },
];

const RevenueBarChart = () => {
  return (
    <ResponsiveContainer width="99%" aspect={1}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeOpacity={0.4} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#FE9399" />
        <Bar dataKey="uv" stackId="a" fill="#FFE7B8" />
        <Bar dataKey="zv" stackId="a" fill="#BCE8E1" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueBarChart;
