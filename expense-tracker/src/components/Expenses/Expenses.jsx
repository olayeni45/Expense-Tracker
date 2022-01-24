import React, { useState } from "react";
import Card from "../UI/Card";
import "./css/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const { expenseArray } = props;
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenseArray.filter(
    (exp) => exp.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        currentYear={filterYear}
        onChangeYear={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList list={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
