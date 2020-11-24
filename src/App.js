import './App.css';
import AddTransaction from './components/addTransaction';
import Balance from './components/balance';
import Header from './components/header'
import Total from './components/total'
import Transactions from './components/transactions';
import { Provider } from './context/GlobalState';



function App() {

  return (
    <Provider>
      <div className='appContainer'>
        <Header />
        <Balance />
        <Total />
        <Transactions />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
