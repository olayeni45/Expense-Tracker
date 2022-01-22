import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./css/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const { expenseArray } = props;
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        currentYear={filterYear}
        onChangeYear={filterChangeHandler}
      />
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
