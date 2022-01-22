import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./css/Expenses.css";

const Expenses = (props) => {
  const { expenseArray } = props;

  return (
    <Card className="expenses">
      {expenseArray.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
