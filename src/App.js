import './App.css';
import { FirstPage } from './components/FirstPage';
import { SecondPage } from './components/SecondPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
function App() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleBorrow =(book) => {
      setBorrowedBooks([...borrowedBooks, book]);
      console.log(borrowedBooks);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<FirstPage handleBorrow={handleBorrow}/>} />
          <Route path="/borrowedBooks" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;