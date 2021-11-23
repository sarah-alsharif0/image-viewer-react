import React,{useState,useEffect} from 'react';
import {Navbar} from '../components/Navbar'
import {BookList} from '../components/BookList'
import { Modal } from './Modal';
import {getBooks} from '../services/books'

export const FirstPage = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [books,setBooks] = useState([]);
    const [borrowedBook, setBorrowedBook] = useState({
      studentInfo : {},
      bookInfo : {}
    })
    const handleBorrow = (studentInfo,bookInfo) => {
      
    }
    
    useEffect(() => {
        if(books.length === 0)
         getBooks().then((tmpBooks) => {
           setBooks(tmpBooks.data);
         });
       },[books]);

    const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    return (
        <div>
            {isOpen && <Modal handleClose={togglePopup}/>}
            <Navbar/>
            <BookList  books={books} handleClick={togglePopup}/>
        </div>
    )
}