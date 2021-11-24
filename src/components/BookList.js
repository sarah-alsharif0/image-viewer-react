import '../assets/styles/BookList.css'
import { BookCard } from './BookCard';
import React from 'react'

export const BookList = (props) => {
    const { books } = props;
    return (
        <div className="books-container">
           {books.map((book,index)=> <BookCard index={index} key={new Date().getTime()*index} book={book} handleClick={props.handleClick} />)}
        </div>
    );
}