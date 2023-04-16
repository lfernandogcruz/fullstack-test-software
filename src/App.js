import './App.css';
import QueryProvider from './context/QueryProvider';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <QueryProvider>
      <div className="App">
        <Header />
        <Board />
      </div>
    </QueryProvider>
  );
}

export default App;
