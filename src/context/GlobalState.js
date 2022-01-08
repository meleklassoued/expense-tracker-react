import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state
const data = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];
const initialState = {
  transactions: data,
};

const GlobalContext = createContext(initialState);

//Provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // console.log(state);
  // console.log(initialState);

  //Actions:
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTIONS",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
