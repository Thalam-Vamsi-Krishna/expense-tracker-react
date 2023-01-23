import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const initial_expenses = [
  {
    id: "e1",
    date: new Date(2023, 0, 14),
    item: "Movie",
    price: "500",
  },
  {
    id: "e2",
    date: new Date(2023, 0, 12),
    item: "Shopping",
    price: "800",
  },
  {
    id: "e3",
    date: new Date(2022, 11, 27),
    item: "Petrol",
    price: "300",
  },
  {
    id: "e4",
    date: new Date(2022, 11, 28),
    item: "Food",
    price: "200",
  },
  {
    id: "e5",
    date: new Date(2021, 11, 28),
    item: "Books",
    price: "100",
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
