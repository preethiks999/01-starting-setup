import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
const Expenses=(props)=>
{ 
    const [selectedValue,setSelectedValue]=useState('2020');
    const FilterExpensesHandler = (filteredYear)=>{
       setSelectedValue(filteredYear);       
    }
    const filteredExpenses = 
       props.expenses.filter(x=>x.expDate.getFullYear().toString()==selectedValue);
        
  
  
    
    return (
      <div>              
        <Card className='expenses'> 
        <ExpensesFilter selectedYear = {selectedValue} FilterExpenses={FilterExpensesHandler}></ExpensesFilter>  
        {
          filteredExpenses.map((x)=><ExpenseItem expTitle={x.expTitle} expAmount = {x.expAmount} expDate = {x.expDate}></ExpenseItem>)
        }                   
      </Card>
      </div>
    );
}
export default Expenses;