import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App=()=> {
  const dummy_expenses = [
    {
      'expDate': new Date(2021,2,2),
      'expTitle':'Car Insurance',
      'expAmount':'277.6'
    },
    {
      'expDate': new Date(2022,3,2),
      'expTitle':'New TV Insurance',
      'expAmount':'297.6'
    },
    {
      'expDate': new Date(2023,12,22),
      'expTitle':'Modem Insurance',
      'expAmount':'797.6'
    },
    {
      'expDate': new Date(2020,3,2),
      'expTitle':'Test TV Insurance',
      'expAmount':'287.6'
    },
    
  ]
  const [expenses,setExpenses]=useState(dummy_expenses);
  

  const addExpenseToListHandler = (newExpense)=>{
    setExpenses((prev)=>{return [...prev,newExpense]}); 
  }

  
  return (
    <div>
      <NewExpense addExpenseToList = {addExpenseToListHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>     
    </div>
  );
}

export default App;
