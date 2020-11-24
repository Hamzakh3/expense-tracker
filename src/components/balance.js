import React, {useContext} from 'react'
import { RootContext } from "../context/GlobalState"


const Balance = () => {
    let {transactions} = useContext(RootContext)
    const amount = transactions.map((transaction) => transaction.amount)
    const total = amount.reduce((total, value)=> total += value , 0)
    console.log(total)
    return(
        <div className = 'balance'>
            <h6>Rupees</h6>
            <h2>{total < 0 ? '-': '' }{Math.abs(total).toFixed(2)}</h2>
            <h5>Current Balance</h5>
        </div>
    )
}

export default Balance
