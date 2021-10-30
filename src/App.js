import './App.css';
import IncomeHistoryTransaction from './components/incomeHistory';
import ExpenseHistoryTransaction from './components/expenseHistory';
import TotalBalance from './components/totalBalance';
import IncomeTrans from './components/incomeTransaction';
import ExpenseTrans from './components/expenseTransaction';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h2>
        expense tracker
        <TotalBalance/>
        <hr/>
        <IncomeTrans />
        <hr/>
        <ExpenseTrans />
        <hr/>
        <IncomeHistoryTransaction />
        <hr/>
        <ExpenseHistoryTransaction />
        </h2>
      </header>
    </div>
  );
}

export default App;