import React from "react";
import "./css/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const { list } = props;

  if (list.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {list.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          date={exp.date}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
