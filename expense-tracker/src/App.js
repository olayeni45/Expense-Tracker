import React from "react";
import { INITIAL_EXPENSES } from "./static";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses expenseArray={INITIAL_EXPENSES} />
    </div>
  );
};

export default App;
