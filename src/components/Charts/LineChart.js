import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ChartData } from './ChartData/ChartData';

const data = ChartData[0].lineData;

const CampaignChart = ({ projectA, projectB }) => {
  return (
    // responsive container changes the chart depending on the size of it's container
    <ResponsiveContainer width="99%" aspect={1}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeOpacity="0.4" />
        <XAxis dataKey="xAxis" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={projectA}
          strokeWidth={1.5}
          stroke="#1292EE"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey={projectB}
          stroke="#002651"
          strokeWidth={1.5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CampaignChart;