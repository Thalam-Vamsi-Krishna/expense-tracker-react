import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const initial_expenses = [
  {
    id: "e1",
    date: new Date(2022, 11, 24),
    item: "Food",
    price: "50",
  },
  {
    id: "e2",
    date: new Date(2022, 11, 25),
    item: "Petrol",
    price: "100",
  },
  {
    id: "e3",
    date: new Date(2022, 11, 27),
    item: "Movie",
    price: "200",
  },
  {
    id: "e4",
    date: new Date(2022, 11, 28),
    item: "Shopping",
    price: "300",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
