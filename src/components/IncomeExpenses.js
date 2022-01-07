import React from "react";

function IncomeExpenses({ Transactions }) {
  const amounts = Transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  console.log(income);

  const outcome = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          -${outcome}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
