import React, {createContext,useReducer} from "react";
import AppReducer from './AppReducer';
//Initial State

const initialState = {
    transaction: [
        {id:'1', text:'Flower', amount:-20},
        {id:'2', text:'Book', amount:300},
        {id:'3', text:'Salary', amount:-50},
        {id:'4', text:'Camera', amount:120},
    ]
}

// Create Context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
        const [state, dispatch] = useReducer(AppReducer,initialState);
        
        function transactionDelete(id){
            dispatch({
                type:"DELETE_TRANSACTION",
                payload: id
            })
        }

        function addTransaction(transaction){
            
            dispatch({
                type:"ADD_TRANSACTION",
                payload:transaction
            })
        }


        return (
            <GlobalContext.Provider value={{ 
                transaction: state.transaction,
                transactionDelete,
                addTransaction
             }}>
                {children}
            </GlobalContext.Provider>
        );
}