import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export default function TransectionList() {
    const {transaction} = useContext(GlobalContext);
  return <div>
            <h3>History</h3>
                <ul id="list" className="list">
                    {transaction.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} />))}
                </ul>
        </div>;
}
