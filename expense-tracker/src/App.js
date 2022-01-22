import React, { useState } from "react";
import { INITIAL_EXPENSES } from "./static";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpense = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenseArray={expenses} />
    </div>
  );
};

export default App;
