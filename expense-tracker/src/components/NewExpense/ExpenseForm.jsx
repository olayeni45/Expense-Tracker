import React, { useState } from "react";
import "./css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onSaveExpense, onAddExpense } = props;
  const [details, setDetails] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const formHandler = (evt) => {
    const { name, value } = evt.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    details.id = `e${Math.random() * 10}`;
    details.date = new Date(details.date);
    details.amount = +details.amount;
    onSaveExpense(details);
    onAddExpense(false);
    setDetails({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={details.title}
            onChange={formHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={details.amount}
            min="0.01"
            step="0.01"
            onChange={formHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={details.date}
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            onChange={formHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => onAddExpense(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
