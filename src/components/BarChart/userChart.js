import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    date: 'Mar 10',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: 'Mar 11',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: 'Mar 12',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: 'Mar 13',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: 'Mar 14',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: 'Mar 15',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: 'Mar 16',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: 'Mar 17',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: 'Mar 18',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: 'Mar 19',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: 'Mar 20',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: 'Mar 21',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];


const UserChart = () => {
  return (
    <ResponsiveContainer width="99%" aspect={2}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#A0D4FF" />
        <Bar dataKey="uv" fill="#FE9399" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default UserChart;
