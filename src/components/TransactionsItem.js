import React, { useContext } from "react";
// import "../index.css";
import { GlobalContext } from "../context/GlobalState";

function TransactionItem({ id, text, amount }) {
  // console.log(id);
  const { deleteTransaction } = useContext(GlobalContext);
  console.log(deleteTransaction);
  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      cash{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        {text}
      </button>
    </li>
  );
}

export default TransactionItem;
