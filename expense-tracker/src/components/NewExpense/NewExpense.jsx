import React from "react";
import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const { onAddExpense } = props;

  const saveExpenseDataHandler = (expense) => {
    onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
