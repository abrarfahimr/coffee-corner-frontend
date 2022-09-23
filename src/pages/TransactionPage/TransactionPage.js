import './TransactionPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import TransactionList from '../../components/TransactionList/TransactionList';

const API_URL = process.env.REACT_APP_API_URL;

const TransactionPage = () => {
  const [transactions, setTransaction] = useState([]);
  const [alterClass, setAlterClass] = useState("");

  useEffect(() => {
    const url = `${API_URL}/transactions`;
    axios.get(url).then((response) => {
      setTransaction(response.data);
    });
  }, []);

  return (
    <div className="transactions">
      <div className="transactions__top">
        <h1 className="transactions__heading">Transactions</h1>
        <div className="transactions__topright">
          <form className="transactions__form">
            <input
              className="transactions__search"
              type={'search'}
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
      <div className="transactions__column">
        <div className="transactions__firstlist">
          <div className="transactions__id">
            <h3 className="transactions__titleid">Transaction ID</h3>
          </div>
          <div className="transactions__products">
            <h3 className="transactions__titleproduct">Products</h3>
          </div>
        </div>
        <div className="transactions__secondlist">
          <div className="transactions__customer">
            <h3 className="transactions__titlecustomer">Customer</h3>
          </div>
          <div className="transactions__date">
            <h3 className="transactions__titledate">Date</h3>
          </div>
        </div>
        <div className="transactions__thirdlist">
          <div className="transactions__amount">
            <h3 className="transactions__titleamount">Amount</h3>
          </div>
          <div className="transactions__payment">
            <h3 className="transactions__titlemethod">Payment Method</h3>
          </div>
        </div>
        <div className="transactions__fourthlist">
          <h3 className="transactions__titlestatus">Status</h3>
        </div>
      </div>
      {transactions.map((transaction) => {
        return (
          <TransactionList
            transaction={transaction}
            key={uuidv4()}
            alterClass={alterClass}
            setAlterClass={setAlterClass}
          />
        );
      })}
    </div>
  );
};

export default TransactionPage;
