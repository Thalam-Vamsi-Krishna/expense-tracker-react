import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        item={props.items[0].item}
        price={props.items[0].price}
      />
      <ExpenseItem
        date={props.items[1].date}
        item={props.items[1].item}
        price={props.items[1].price}
      />
      <ExpenseItem
        date={props.items[2].date}
        item={props.items[2].item}
        price={props.items[2].price}
      />
      <ExpenseItem
        date={props.items[3].date}
        item={props.items[3].item}
        price={props.items[3].price}
      />
    </Card>
  );
}

export default Expenses;
