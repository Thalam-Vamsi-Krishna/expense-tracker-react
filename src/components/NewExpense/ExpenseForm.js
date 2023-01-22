import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const itemEntered = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-01-31" />
        </div>
        <div className="new-expense__control">
          <label>Item</label>
          <input type="text" onChange={itemEntered} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
