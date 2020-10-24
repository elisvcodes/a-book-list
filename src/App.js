import BookContextProvider from './context/BookContext';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <HomePage />
      </BookContextProvider>
    </div>
  );
}

export default App;
