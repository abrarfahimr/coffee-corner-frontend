import { useEffect, useState } from 'react';
import './MarketingPage.scss';
import CampaignChart from '../../components/Charts/LineChart';
import ClicksBarChart from '../../components/Charts/ClicksBarChart';
import RevenueBarChart from '../../components/Charts/RevenueBarChart';
import { ChartData } from '../../components/Charts/ChartData/ChartData';
import { v4 as uuidv4 } from 'uuid';

const MarketingPage = () => {
  const [graphdata, setGraphData] = useState([]);
  const [projectA, setProjectA] = useState("");
  const [projectB, setProjectB] = useState("");

  useEffect(() => {
    const Data = ChartData[0].campaign;
    setGraphData(Data);
  },[])
  
  const handleChangeA = (event) => {
    setProjectA(event.target.value);
  }

  const handleChangeB = (event) => {
    setProjectB(event.target.value);
  }

  return (
    <div className="marketing">
      <div className="marketing__overview">
        <div className="marketing__cards">
          <div className="marketing__card">
            <h2 className="marketing__cardtitle">Total Adspend</h2>
            <p className="marketing__amount">$10,000</p>
            <p className="marketing__increase">+10% last month</p>
          </div>
          <div className="marketing__card">
            <h2 className="marketing__cardtitle">Total Income through Ads</h2>
            <p className="marketing__amount">$28,000</p>
            <p className="marketing__increase">+15% last month</p>
          </div>
          <div className="marketing__card">
            <h2 className="marketing__cardtitle">ROI</h2>
            <p className="marketing__amount">2.50%</p>
            <p className="marketing__increase">+0.80% last month</p>
          </div>
        </div>
      </div>
      <div className="marketing__breakdown">
        <h1 className="marketing__heading">Campaign Breakdown</h1>
        <form className="marketing__dropdown">
          <div className="marketing__container">
            <label htmlFor="projectA" className="addproduct__label">
              Choose Project A
            </label>
            <select
              name="projectA"
              className="marketing__select"
              value={projectA}
              onChange={handleChangeA}
            >
              <option value=""> Please select an option</option>
              {graphdata.map((element) => {
                return (
                  <option value={element.codename} key={uuidv4()}>
                    {element.name}
                  </option>
                );
              })}
            </select>
            <span className="marketing__downarrow"></span>
          </div>
          <div className="marketing__container">
            <label htmlFor="projectB" className="addproduct__label">
              Choose Project B
            </label>
            <select
              name="projectB"
              className="marketing__select"
              value={projectB}
              onChange={handleChangeB}
            >
              <option value=""> Please select an option</option>
              {graphdata.map((element) => {
                return (
                  <option value={element.codename} key={uuidv4()}>
                    {element.name}
                  </option>
                );
              })}
            </select>
            <span className="marketing__downarrow"></span>
          </div>
        </form>
        <h2 className="marketing__graphheading">Cost Per Lead</h2>
        <div className="marketing__graph">
          <div className="marketing__linechart">
            <CampaignChart projectA={projectA} projectB={projectB} />
          </div>
        </div>
        <div className="marketing__chartcontainer">
          <div className="marketing__barcharts">
            <div className="marketing__clicks">
              <h2 className="marketing__subheading">Clicks</h2>
              <p className="marketing__paragraph">Total by month</p>
              <ClicksBarChart projectA={projectA} projectB={projectB} />
            </div>
            <div className="marketing__revenue">
              <h2 className="marketing__subheading">Revenue</h2>
              <p className="marketing__paragraph">Total by month</p>
              <RevenueBarChart  projectA={projectA} projectB={projectB}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingPage;