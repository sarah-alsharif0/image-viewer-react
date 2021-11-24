import React,{useState,useEffect} from 'react';
import {Navbar} from '../components/Navbar'
import {BookList} from '../components/BookList'
import { Modal } from './Modal';
import {getBooks} from '../services/books'

export const FirstPage = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [books,setBooks] = useState([]);
    const [currBook, setCurrBook] = useState(-1);

    useEffect(() => {
        if(books.length === 0)
         getBooks().then((tmpBooks) => {
           setBooks(tmpBooks.data);
         });
       },[books]);

    const handleBorrow = (data) => {

      const borrowedBooks = JSON.parse(localStorage.borrowedBooks || '[]');
      
      borrowedBooks.push({
        studentInfo: data,
        bookInfo: books[currBook]
      });

      localStorage.borrowedBooks = JSON.stringify(borrowedBooks);

      togglePopup(-1);
      console.log(borrowedBooks);
    }
    


    const togglePopup = (index) => {
      setIsOpen(!isOpen);
      setCurrBook(index);
  }
    return (
        <div>
            {isOpen && <Modal handleBorrow={handleBorrow} handleClose={togglePopup}/>}
            <Navbar/>
            <BookList  books={books} handleClick={togglePopup}/>
        </div>
    )
}