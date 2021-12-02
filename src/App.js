// import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Comida',
      amount: 80000,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Nueva TV',
      amount: 350000,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Seguro Auto',
      amount: 50000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Cuenta Internet',
      amount: 40000,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
