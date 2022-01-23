import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Transaction({transaction}) {
    const {transactionDelete}  = useContext(GlobalContext)
    const sign = transaction.amount <0 ? '-':'+';
    const style = transaction.amount <0 ? 'minus':'plus';
    
  return(
        <li className={style}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>transactionDelete(transaction.id)} className="delete-btn">x</button>
        </li>
  );
}
