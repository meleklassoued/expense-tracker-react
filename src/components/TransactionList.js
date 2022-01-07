import React from "react";
import TransactionItem from "./TransactionsItem";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transactions } = React.useContext(GlobalContext);
  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(({ id, text, amount }) => (
          <TransactionItem key={id} text={text} amount={amount} id={id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
