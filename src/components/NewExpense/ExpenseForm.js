import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  /*const [userInput, setUserInput] = useState({
    enteredDate: "",
    enteredItem: "",
    enteredPrice: "",
  });
  const itemChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredItem: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredPrice: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };*/
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      date: new Date(enteredDate),
      item: enteredItem,
      price: enteredPrice,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredDate("");
    setEnteredItem("");
    setEnteredPrice("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-01-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Item</label>
          <input type="text" value={enteredItem} onChange={itemChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
