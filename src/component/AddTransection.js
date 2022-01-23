import React, { Fragment, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransection() {
    const {addTransaction} = useContext(GlobalContext)
    const [amount,setAmount] = useState([])
    const [text, setName] = useState([])
    // 
    
    
    const onSubmit = () =>{
        const NewTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }
        if(NewTransaction.amount && NewTransaction.text){
            
            addTransaction(NewTransaction)
        }else{
           
        }
        setAmount([])
        setName([])
        
    }
  return <Fragment>
                <h3>Add new transaction</h3>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input onChange={(e)=>setName(e.target.value)} value={text}  type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label>
                    <input onChange={(e)=>setAmount(e.target.value)} value={amount} type="number" placeholder="Enter amount..." />
                </div>
                {/* <input onChange={(e)=>setMinus(e.target.value)} type="checkbox" /><label>For Nagativ</label> */}
                <button onClick={onSubmit} className="btn">Add transaction</button>
        </Fragment>;
}
