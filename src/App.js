import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

function App() {
  const { transactions } = React.useContext(GlobalContext);

  return (
    <div className='container'>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList Transactions={transactions} />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
