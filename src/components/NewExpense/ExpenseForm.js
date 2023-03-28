import './ExpenseForm.css'
import {useState} from 'react'

const ExpenseForm = (props)=>{
    
    const [userInput,setUserInput] = useState({
        'expTitle':'',
        'expAmount':'',
        'expDate':''
    });

    const clickHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            'expTitle': userInput.expTitle,
            'expAmount':userInput.expAmount,
            'expDate': new Date(userInput.expDate)
        }
        props.NewExpenseAdded(expenseData);
        setUserInput({
            expTitle:'',
            expAmount:'',
            expDate:''
        })

    }

    const titleChangeHandler = (event) =>{
         setUserInput((prevState)=>{
            return {
                ...prevState,
                expTitle:event.target.value
            }
         });
          
    }

    const amountChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                expAmount:event.target.value
            }
         });
    }

    const dateChangeHandler = (event) =>{
        
        setUserInput((prevState)=>{
            return {
                ...prevState,
                expDate:event.target.value
            }
         });
    }



    return (<form onSubmit = {clickHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>
                    Title
                </label>
                <input value={userInput.expTitle} onChange={titleChangeHandler} type='text'>
                </input>

            </div>
            <div className="new-expense__control">
                <label>
                    Amount
                </label>
                <input value={userInput.expAmount} onChange={amountChangeHandler} type='number' step='0.01' min='0.01'>
                </input>

            </div>
            <div className="new-expense__control">
                 <label>
                    Date
                 </label>
                 <input value={userInput.expDate} onChange = {dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31'>
                 </input>
            </div>            
        </div>
        <div className='new-expense__actions'>
            <button>Add Expense</button>

        </div>
    </form>)
}


export default ExpenseForm;