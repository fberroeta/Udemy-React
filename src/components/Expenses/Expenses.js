import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* 3-Forma mas legible y limpia de hacerlo */}
      {/* {expensesContent} */}

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
