import './HomePage.scss';
import GraphChart from '../../components/Charts/BarChart';
import UserChart from '../../components/Charts/userChart';
import PieChartGraph from '../../components/Charts/PieChart';
import coffeeImage1 from '../../assets/images/image01.png';
import coffeeImage2 from '../../assets/images/image02.png';
import coffeeImage3 from '../../assets/images/image03.png';
import coffeeImage4 from '../../assets/images/image04.png';
import coffeeImage5 from '../../assets/images/image05.png';
import coffeeImage6 from '../../assets/images/image06.png';

const HomePage = () => {
  return (
    <main className="homepage">
      <h1 className="homepage__title">Overview</h1>
      <div className="homepage__cards">
        <div className="homepage__card">
          <h2 className="homepage__cardtitle">Total Income</h2>
          <p className="homepage__amount">$100,000</p>
          <p className="homepage__increase">+5% last month</p>
        </div>
        <div className="homepage__card">
          <h2 className="homepage__cardtitle">Total Expenses</h2>
          <p className="homepage__amount">$60,000</p>
          <p className="homepage__increase">-1.5% last month</p>
        </div>
        <div className="homepage__card">
          <h2 className="homepage__cardtitle">New Users</h2>
          <p className="homepage__amount">2000</p>
          <p className="homepage__increase">+5% last month</p>
        </div>
      </div>
      <div className="homepage__report">
        <h2 className="homepage__title">Sales Report</h2>
        <div className="homepage__graph">
          <GraphChart />
        </div>
      </div>
      <div className="homepage__products">
        <h2 className="homepage__title">Top Products</h2>
        <div className="homepage__productlist">
          <div className="homepage__coffee">
            <img src={coffeeImage1} alt="" className="homepage__image" />
            <p className="homepage__name">Lava Coffee</p>
          </div>
          <p className="homepage__price">$540</p>
        </div>
        <div className="homepage__productlist">
          <div className="homepage__coffee">
            <img src={coffeeImage2} alt="" className="homepage__image" />
            <p className="homepage__name">Egoest Latte</p>
          </div>
          <p className="homepage__price">$429</p>
        </div>
        <div className="homepage__productlist">
          <div className="homepage__coffee">
            <img src={coffeeImage3} alt="" className="homepage__image" />
            <p className="homepage__name">VintageBee Coffee</p>
          </div>
          <p className="homepage__price">$346</p>
        </div>
        <div className="homepage__productlist">
          <div className="homepage__coffee">
            <img src={coffeeImage4} alt="" className="homepage__image" />
            <p className="homepage__name">Ancient twist kava</p>
          </div>
          <p className="homepage__price">$274</p>
        </div>
        <div className="homepage__productlist">
          <div className="homepage__coffee">
            <img src={coffeeImage5} alt="" className="homepage__image" />
            <p className="homepage__name">Beaneriffic</p>
          </div>
          <p className="homepage__price">$224</p>
        </div>
        <div className="homepage__productlist">
          <div className="homepage__coffee">
            <img src={coffeeImage6} alt="" className="homepage__image" />
            <p className="homepage__name">Missile Brew</p>
          </div>
          <p className="homepage__price">$180</p>
        </div>
      </div>
      <div className="homepage__states">

        <div className='homepage__leftstates'>
          <div className="homepage__activeusers">
            <h3 className="homepage__title">Active Users</h3>
            <p className="homepage__subtitle">Per Page Visited</p>
            <UserChart />
          </div>
          <div className="homepage__target">
            <div className="homepage__targetleft">75%</div>
            <div className="homepage__targetright">
              <p className="homepage__targetstates">
                <span className="homepage__current">10,000</span>/13,000 Target
              </p>
              <p className="homepage__orders">Orders in periods</p>
            </div>
          </div>
        </div>

        <div className="homepage__calender">
          <h3 className="homepage__title">Calender</h3>
          <div className="homepage__entry">
            <p className="homepage__date">16 Mar, Tue</p>
            <p className="homepage__description">Meeting with Director</p>
          </div>
          <div className="homepage__entry">
            <p className="homepage__date">22 Mar, Mon</p>
            <p className="homepage__description">Deadline for P1</p>
          </div>
          <div className="homepage__entry">
            <p className="homepage__date">24 Mar, Wed</p>
            <p className="homepage__description">Meeting with CRM</p>
          </div>
          <div className="homepage__entry">
            <p className="homepage__date">Sep 28, Wed</p>
            <p className="homepage__description">Demo Day</p>
          </div>
        </div>
        <div className="homepage__piechart">
          <h3 className="homepage__title">Order Breakdown</h3>
          <PieChartGraph />
          <div className="homepage__labels">
            <div className="homepage__box">
              <p className="homepage__description">In Shipment</p>
            </div>
            <div className="homepage__box homepage__box--refunds">
              <p className="homepage__description">Refunds</p>
            </div>
            <div className="homepage__box homepage__box--delivered">
              <p className="homepage__description">Delivered</p>
            </div>
            <div className="homepage__box homepage__box--processing">
              <p className="homepage__description">Processing</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;