import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import {useState} from 'react';
const ExpenseItem = (props)=>{ 
    
    return (
    <Card
        className='expense-item'>
            <ExpenseDate expDate = {props.expDate}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>
               {props.expTitle}
            </h2>
            <div className='expense-item__price'>
              {props.expAmount}
            </div>
        </div>        
    </Card>
    );
}
export default ExpenseItem;