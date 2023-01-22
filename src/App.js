import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      date: new Date(2022, 11, 24),
      item: "Food",
      price: "$ 50",
    },
    {
      date: new Date(2022, 11, 25),
      item: "Petrol",
      price: "$ 100",
    },
    {
      date: new Date(2022, 11, 27),
      item: "Movie",
      price: "$ 200",
    },
    {
      date: new Date(2022, 11, 28),
      item: "Shopping",
      price: "$ 300",
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
