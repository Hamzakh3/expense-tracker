import React, { useContext } from 'react'
import { RootContext } from '../../context/GlobalState'

const Transaction = ({ transaction }) => {
    let { deleteTransaction } = useContext(RootContext)
    let sign = transaction.amount > 0 ? 'plus' : 'minus'
    return (
        <li className={'transaction ' + sign}>
            <h3 onClick={() => deleteTransaction(transaction.id)}>x</h3>
            <span>{transaction.description}</span>
            <span>{transaction.amount}</span>
        </li>

    )
}

export default Transaction
