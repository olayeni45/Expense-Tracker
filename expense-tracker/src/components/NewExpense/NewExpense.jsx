import React, { useState } from "react";
import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";

const NewExpense = (props) => {
  const { onAddExpense } = props;
  const [createExpense, setCreateExpense] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    onAddExpense(expense);
  };

  const showAddExpenseHandler = (status) => setCreateExpense(status);

  return (
    <div className="new-expense">
      {createExpense ? (
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          onAddExpense={showAddExpenseHandler}
        />
      ) : (
        <AddExpense onAddExpense={showAddExpenseHandler} />
      )}
    </div>
  );
};

export default NewExpense;
