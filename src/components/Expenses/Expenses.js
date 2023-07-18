import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        //console.log(selectedYear);
    }

    const filterExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <ExpensesList />

    if (filterExpenses.length > 0) {
        expensesContent = filterExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id} // 아이템 식별 버그 fix
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {/* {props.expenses.map((expense) => ( */}
            { /*
            {filterExpenses.length === 0 ? <ExpensesList /> :
                (
                    filterExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id} // 아이템 식별 버그 fix
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />
                    ))
                )
            }
        */ }
            {expensesContent}

            { /* delete hard coding
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            ></ExpenseItem> */}
        </Card>
    );
}

export default Expenses;