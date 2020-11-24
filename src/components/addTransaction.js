import React, { useContext, useState } from 'react'
import { RootContext } from '../context/GlobalState'


const AddTransaction = () => {
    let [description, setDescription] = useState('')
    let [amount, setAmount] = useState('')
    let { addTransaction } = useContext(RootContext)
    const check = description === '' || amount === 0 || '' || description.length < 3 || amount.length === 0
    let getId = Math.floor(Math.random() * 10000000)
    const addNewTransaction = {
        id: getId,
        description:description,
        amount:parseInt(amount)
    }
    const add = () => {
        
        if (!check) {
            addTransaction(addNewTransaction);
            setDescription('');
            setAmount('')
        }
        else{
            alert('Some thing Wrong')
        }

    }

    return (
        <div className='addTransaction'>
            <h2>Add New Transaction</h2>
            <hr />
            <div>
                <label htmlFor='description'>Description</label>
                <input
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    name='description'
                    placeholder='Description'
                    value={description}
                />
            </div>
            <div>
                <label htmlFor='amount'>Amount</label>
                <input
                    type='number'
                    onChange={(e) => setAmount(e.target.value)}
                    name='amount'
                    placeholder='Add amount'
                    value={amount}
                />
            </div>
            <button className={check?'btnDisable':''} disabled={check} onClick={()=>add() }>Add Transaction</button>
        </div>
    )
}

export default AddTransaction