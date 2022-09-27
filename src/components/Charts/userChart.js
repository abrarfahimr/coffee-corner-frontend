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
    website: 4000,
    adclick: 2400,
    amt: 2400,
  },
  {
    date: 'Mar 11',
    website: 3000,
    adclick: 1398,
    amt: 2210,
  },
  {
    date: 'Mar 12',
    website: 2000,
    adclick: 9800,
    amt: 2290,
  },
  {
    date: 'Mar 13',
    website: 2780,
    adclick: 3908,
    amt: 2000,
  },
  {
    date: 'Mar 14',
    website: 1890,
    adclick: 4800,
    amt: 2181,
  },
  {
    date: 'Mar 15',
    website: 2390,
    adclick: 3800,
    amt: 2500,
  },
  {
    date: 'Mar 16',
    website: 3490,
    adclick: 4300,
    amt: 2100,
  },
  {
    date: 'Mar 17',
    website: 4000,
    adclick: 2400,
    amt: 2400,
  },
  {
    date: 'Mar 18',
    website: 3000,
    adclick: 1398,
    amt: 2210,
  },
  {
    date: 'Mar 19',
    website: 2000,
    adclick: 9800,
    amt: 2290,
  },
  {
    date: 'Mar 20',
    website: 2780,
    adclick: 3908,
    amt: 2000,
  },
  {
    date: 'Mar 21',
    website: 1890,
    adclick: 4800,
    amt: 2181,
  },
];


const UserChart = () => {
  return (
    // responsive container changes the chart depending on the size of it's container
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
        <Bar dataKey="adclick" fill="#A0D4FF" />
        <Bar dataKey="website" fill="#FE9399" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default UserChart;
