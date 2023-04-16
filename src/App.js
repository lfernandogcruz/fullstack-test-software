import './App.css';
import QueryProvider from './context/QueryProvider';
import Header from './components/Header';

function App() {
  return (
    <QueryProvider>
      <div className="App">
        <Header />
      </div>
    </QueryProvider>
  );
}

export default App;
