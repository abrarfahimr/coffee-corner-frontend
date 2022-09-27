import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ChartData } from './ChartData/ChartData';


const ClicksBarChart = ({ projectA, projectB }) => {
  //grab the data that is the same as the select field and push them to an empty array to be parsed on the graph. This is so we dont parse all the data but the ones we want.
  let data = [];
  const graphdata = ChartData[0].clicks;
  const DataSetA = graphdata.find((graph) => graph.campaign === projectA);
  const DataSetB = graphdata.find((graph) => graph.campaign === projectB);
  data.push(DataSetA, DataSetB);

  return (
    // responsive container changes the chart depending on the size of it's container
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
        <Bar dataKey="facebook" stackId="a" fill="#ffc453" />
        <Bar dataKey="googleAds" stackId="a" fill="#5dc7b7" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ClicksBarChart