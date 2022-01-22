import React from "react";
import { INITIAL_EXPENSES } from "./static";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const addExpense = (expense) => {
    console.log("IN APP.JS");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenseArray={INITIAL_EXPENSES} />
    </div>
  );
};

export default App;
