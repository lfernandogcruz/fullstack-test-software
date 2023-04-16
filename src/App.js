import './App.css';
import QueryProvider from './context/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <div className="App">
        <header className="App-header">
          <p>init</p>
        </header>
      </div>
    </QueryProvider>
  );
}

export default App;
