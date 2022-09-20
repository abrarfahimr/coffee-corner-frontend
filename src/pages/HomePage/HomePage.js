import './HomePage.scss';

const HomePage = () => {
  return (
    <main className="homepage">
      <h1 className="homepage__title">Overview</h1>
      <div className="homepage__cards">
        <div className="homepage__card homepage__card--first">
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
      <div className='homepage__report'>
        <h2 className='homepage__title'>Sales Report</h2>
      </div>
    </main>
  );
}

export default HomePage;