import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import Expenses from "./Expenses";
function ExpenseItem(props) {
  const deleteExpense = () => {};
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.item}</h2>
        <ExpenseAmount price={props.price} />
        <button onClick={deleteExpense}>Delete</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
