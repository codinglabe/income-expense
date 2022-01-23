import React,{Fragment} from 'react';
import { GlobalProvider } from '../context/GlobalState';
import AddTransection from './AddTransection';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import TransectionList from './TransectionList';

export default function Home() {
  return (
    <Fragment>
        <GlobalProvider>
            <h2>Expense Tracker</h2>
            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <TransectionList/>
                <AddTransection/>
            </div>
        </GlobalProvider>
    </Fragment>
  );
}
