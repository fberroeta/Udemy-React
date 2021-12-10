import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No hay gastos encontrados.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        //se puede agregar key a cualquier componente par ayudar a react a identificar elementos unicos
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* 3-Forma mas legible y limpia de hacerlo */}
      {expensesContent}

      {/* 1- expresion de javascript de comparacion */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No hay gastos encontrados.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            //se puede agregar key a cualquier componente par ayudar a react a identificar elementos unicos
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) 
      )} */}
    </Card>
  );
};
export default Expenses;
