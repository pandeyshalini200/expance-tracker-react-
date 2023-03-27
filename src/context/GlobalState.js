import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
         ]
}
// console.log("initialState",initialState.transactions);
//create context
export const GlobalContext = createContext(initialState.transactions);

//provider component
export const GlobalProvider = ( {children} )=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actionss
function deleteTransation(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transactions) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transactions
    
    });
    //   console.log("addTransaction",transactions);
}

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransation,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}