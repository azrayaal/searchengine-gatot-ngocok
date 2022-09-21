import './App.css';
import Dashboard from './components/dashboard';
import Futer from './components/footer';
import Navb from './components/navbar';

function App() {
  return (
    <div className='flex flex-col h-screen justify-between"'>
      <Navb />
      <Dashboard />
      <Futer />
    </div>
  );
}

export default App;
