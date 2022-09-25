import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const TransactionList = ({transaction}) => {

  const allProducts = transaction.products.split("-");

  const changeClassName = (status) => {
    if (transaction.status === 'Pending') {
      return 'transactions__statusbar--pending';
    } else if (transaction.status === 'Shipped') {
      return 'transactions__statusbar--shipped';
    } else if (transaction.status === 'Delivered') {
      return 'transactions__statusbar--delivered';
    } else if (transaction.status === 'Cancelled') {
      return 'transactions__statusbar--cancelled';
    }
  };

  useEffect(() => {
    changeClassName();
  })

  return (
    <div className="transactions__list">
      <div className="transactions__firstlist">
        <div className="transactions__id">
          <h3 className="transactions__title">Transaction ID</h3>
          <p className="transactions__numbers">{transaction.tracking_id}</p>
        </div>
        <div className="transactions__products">
          <h3 className="transactions__title">Products</h3>
          {
            allProducts.map((product) => {
              return (
                <p className="transactions__numbers" key={uuidv4()}>{product }</p>
              )
            })
          }
        </div>
      </div>
      <div className="transactions__secondlist">
        <div className="transactions__customer">
          <h3 className="transactions__title">Customer</h3>
          <p className="transactions__numbers">{transaction.customer}</p>
        </div>
        <div className="transactions__date">
          <h3 className="transactions__title">Date</h3>
          <p className="transactions__numbers">{transaction.date}</p>
        </div>
      </div>
      <div className="transactions__thirdlist">
        <div className="transactions__amount">
          <h3 className="transactions__title">Amount</h3>
          <p className="transactions__numbers">{transaction.amount}</p>
        </div>
        <div className="transactions__payment">
          <h3 className="transactions__title">Payment Method</h3>
          <p className="transactions__numbers">{transaction.payment}</p>
        </div>
      </div>
      <div className="transactions__fourthlist">
        <div className="transactions__status">
          <h3 className="transactions__statustitle">Status</h3>
          <p className={changeClassName(transaction.status)}>{transaction.status}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;