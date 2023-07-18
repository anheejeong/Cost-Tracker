import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // 비효율적
        // setUserInput({
        //     ...userInput, // 다른 키와 쌍이 버려지지 않도록 함, 하지만 업데이트 제대로 안 될 수 있음
        //     enteredTitle: event.target.value,
        // })

        // 이전 상태에 의존할 때 사용
        // 가장 최신 상태의 스냅샷, 항상 계획된 상태 업데이트를 염두에 두고 있음을 보장
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault(); // 서버 반응 막기(지금은 실행하면 서버에 제출하는 것까지는 안 함)

        // 객체 생성
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        //console.log(expenseData);
        props.onSaveExpenseData(expenseData); // 부모 함수 실행(포인터 실행)
        // 초기화
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;