import React, { useReducer, createContext } from 'react'
import { Reducer } from './Reducer'

const initialState = {
    
}

export const RootContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    
    const deleteTransaction = (id)=>{
        dispatch({
            type:'DELETE',
            payload:id
        })
    }
    const addTransaction = (addNew)=>{
        dispatch({
            type:'ADD',
            payload:addNew
        })
    }
    return (
        <RootContext.Provider value={{
            transactions:state.transactions?state.transactions:[],
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </RootContext.Provider>
    )
}