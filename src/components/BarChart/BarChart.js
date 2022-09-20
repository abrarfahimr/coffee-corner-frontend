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
    name: 'Mar 13',
    lastMonth: 45,
    thisMonth: 50,
  },
  {
    name: 'Mar 14',
    lastMonth: 58,
    thisMonth: 65,
  },
  {
    name: 'Mar 15',
    lastMonth: 23,
    thisMonth: 18,
  },
  {
    name: 'Mar 16',
    lastMonth: 70,
    thisMonth: 65,
  },
  {
    name: 'Mar 17',
    lastMonth: 30,
    thisMonth: 26,
  },
  {
    name: 'Mar 18',
    lastMonth: 70,
    thisMonth: 84,
  },
];

const GraphChart = () =>{
  return (
    <ResponsiveContainer width="99%" aspect={1.5}>
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
        <CartesianGrid strokeOpacity="0.3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="thisMonth" fill="#002651" />
        <Bar dataKey="lastMonth" fill="#CBD5E1" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GraphChart;