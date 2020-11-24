import React, { useContext } from 'react'
import { RootContext } from '../context/GlobalState'

const Total = () => {
    let {transactions} = useContext(RootContext)
    const amounts = transactions.map((transaction) => transaction.amount)
    const incomeTotal = amounts.reduce((total, value) => value > 0 ? total = total + value : total+0, 0)
    const expenseTotal = amounts.reduce((total, value) => value < 0 ? total =total + value : total+0, 0)

    console.log(amounts,incomeTotal, expenseTotal)
    return(
        <div className='total'>
            <div className='income'>
                <h3>Income</h3>
    <p><b>{Math.abs(incomeTotal).toFixed(2)}</b></p>
            </div>
            <div className='verticalLine'></div>
            <div className='expense'>
                <h3>Expense</h3>
    <p><b>{Math.abs(expenseTotal).toFixed(2)}</b></p>
            </div>
        </div>
    )
}

export default Total