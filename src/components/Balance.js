import React from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = React.useContext(GlobalContext);
  console.log(transactions);
  const Amounts = transactions.map((transaction) => transaction.amount);
  const total = Amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </>
  );
}

export default Balance;
