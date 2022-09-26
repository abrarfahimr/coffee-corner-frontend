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
import { ChartData } from './ChartData/ChartData';

const RevenueBarChart = ({projectA, projectB}) => {
  let data = [];
  const graphdata = ChartData[0].revenue;
  const DataSetA = graphdata.find((graph) => graph.campaign === projectA);
  const DataSetB = graphdata.find((graph) => graph.campaign === projectB);
  data.push(DataSetA, DataSetB);
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
        <XAxis dataKey="campaign" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="twitter" stackId="a" fill="#FE9399" />
        <Bar dataKey="facebook" stackId="a" fill="#FFE7B8" />
        <Bar dataKey="googleAds" stackId="a" fill="#BCE8E1" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueBarChart;
