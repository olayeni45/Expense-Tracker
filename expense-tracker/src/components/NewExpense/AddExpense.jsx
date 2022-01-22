import React from "react";

const AddExpense = (props) => {
  const { onAddExpense } = props;
  return (
    <div>
      <button type="button" onClick={() => onAddExpense(true)}>
        Add New Expense
      </button>
    </div>
  );
};

export default AddExpense;
