import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
// 무상태 컴포넌트(프리젠테이셔널 또는 dumb 컴포넌트) : 아무 상태를 갖지 않고 단지 데이터를 출력하기 위해 존재
export default ExpenseItem;
