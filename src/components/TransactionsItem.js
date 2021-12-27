import React from "react";

function TransactionItem({ text, amount }) {
  return (
    <li className='minus'>
      cash <span>-${amount}</span>{" "}
      <button className='delete-btn'>{text}</button>
    </li>
  );
}

export default TransactionItem;
