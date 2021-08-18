import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses found</p>
        ) : (
          filteredExpenses.map((expesnse) => (
            <ExpenseItem
              key={expesnse.id}
              title={expesnse.title}
              amount={expesnse.amount}
              date={expesnse.date}
            ></ExpenseItem>
          ))
        )} */}

        {/*  */}

        {/* *The above ternary syntax can be also written in the way mentioned below */}

        {/* {filteredExpenses.length === 0 && <p>No Expenses found</p>}
        {/* The part after && is rendered if the part before && becomes true. */}
        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expesnse) => (
            <ExpenseItem
              key={expesnse.id}
              title={expesnse.title}
              amount={expesnse.amount}
              date={expesnse.date}
            ></ExpenseItem>
          ))} */}

        {/* Or we can create a seperate variable/component and assign the content to that variable/component and just use that variable/component to render the data.*/}

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
