import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // 1. useState를 독립해서 쓰는 방법
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 2. useState를 통합해서 쓰는 방법
  // const [userInput, setUserInput] = useState({
  //   setEnteredTitle: "",
  //   setEnteredAmount: "",
  //   setEnteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // 2.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // 2.
    // setUserInput({
    //   ...userInput,
    //   setEnteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // 2.
    // setUserInput({
    //   ...userInput,
    //   setEnteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 동작하지 않게 해주는 기본JS문장(페이지 다시 로드x)

    const expenseData = {
      // 객체생성
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    // 빈 문자열로 다시 설정하는 기능
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // 양방향 라이딩
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
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
