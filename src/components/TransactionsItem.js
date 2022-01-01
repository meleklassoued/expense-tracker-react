import React from "react";
// import "../index.css";

function TransactionItem({ text, amount }) {
  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      cash{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className='delete-btn'>{text}</button>
    </li>
  );
}

export default TransactionItem;
