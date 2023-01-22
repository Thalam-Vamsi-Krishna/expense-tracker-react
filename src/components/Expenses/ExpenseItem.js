import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [price, setPrice] = useState(props.price);
  const updatePrice = () => {
    setPrice("$ 100");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.item}</h2>
        <div className="expense-item__price">{price}</div>
        <button onClick={updatePrice}>Update</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
