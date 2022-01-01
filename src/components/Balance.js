import React from "react";

function Balance({ Transactions }) {
  const Amounts = Transactions.map((transaction) => transaction.amount);
  const total = Amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </>
  );
}

export default Balance;
