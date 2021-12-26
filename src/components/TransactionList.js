import React from "react";

function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul id='list'>
        <li className='minus'>
          cash <span>-$400</span> <button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  );
}

export default TransactionList;
