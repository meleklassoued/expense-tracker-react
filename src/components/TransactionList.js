import React from "react";
import TransactionItem from "./TransactionsItem";
import "../App.css";
// import { GlobalContext } from "../context/GlobalState";

function TransactionList({ Transactions }) {
  console.log(Transactions);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {Transactions.map(({ id, text, amount }) => (
          <TransactionItem key={id} text={text} amount={amount} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
