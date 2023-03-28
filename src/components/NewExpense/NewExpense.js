import './NewExpense.css'
import ExpenseForm from '../NewExpense/ExpenseForm'
const NewExpense = (props)=>{
   const expAddedHandler = (expense)=>{
      const expData = {
         ...expense,
         id:Math.random().toString()
      }
      return props.addExpenseToList(expData);
   }

   return (<div className='new-expense'>
    <ExpenseForm NewExpenseAdded={expAddedHandler}>
  
    </ExpenseForm>
   </div>)
}

export default NewExpense;