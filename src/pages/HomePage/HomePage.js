import './HomePage.scss';
import GraphChart from '../../components/Charts/BarChart';
import UserChart from '../../components/Charts/userChart';
import PieChartGraph from '../../components/Charts/PieChart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const HomePage = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then(response => {
        setProduct(response.data)
      })
  }, []);

  return (
    <main className="homepage">
      <h1 className="homepage__title">Overview</h1>
      <div className="homepage__top">
        <div className="homepage__overview">
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
        </div>

        <div className="homepage__producttable">
          <div className="homepage__products">
            <h2 className="homepage__title">Top Products</h2>
            {
              products && products
                .sort((a, b) => (a.price * a.sales) > (b.price * b.sales) ? -1 : 1)
                .slice(0, 7)
                .map((product) => {
                  return (
                    <Link  to={`/products/${product.id}`} className="homepage__productlist" key={uuidv4()}>
                      <div className="homepage__coffee">
                        <img
                          src={product.image}
                          alt="coffee bag"
                          className="homepage__image"
                        />
                        <p className="homepage__name">{product.product_name}</p>
                      </div>
                      <p className="homepage__price">
                        ${product.price * product.sales}
                      </p>
                    </Link>
                  );
                }) 
            }
          </div>
        </div>
      </div>

      <div className="homepage__states">
        <div className="homepage__leftstates">
          <div className="homepage__activeusers">
            <h3 className="homepage__secondarytitle">Active Users</h3>
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
          <h3 className="homepage__secondarytitle">Calender</h3>
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
            <p className="homepage__date">Sep 29, Wed</p>
            <p className="homepage__description">Demo Day</p>
          </div>
        </div>
        <div className="homepage__piechart">
          <h3 className="homepage__secondarytitle">Order Breakdown</h3>
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