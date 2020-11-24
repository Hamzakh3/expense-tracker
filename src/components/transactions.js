import React, { useContext } from 'react'
import { RootContext } from '../context/GlobalState'
import Transaction from './transaction/transaction'

const Transactions = () => {
    const {transactions} = useContext(RootContext)
    console.log(transactions)
    return(
        <div className='transactions'>
            <h2>Transaction History</h2>
            <hr/>
            <ul className='transactionList'>
                {transactions.length > 0 ?
                transactions.map(transaction => {
                    return(
                        <Transaction transaction={transaction} key={transaction.id} />
                    )
                

                }): <li>Here are no Transactions</li>
            }
                 
                
                
                


            </ul>
        </div>
    )
}

export default Transactions