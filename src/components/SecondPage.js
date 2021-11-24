import React from 'react'
import { BorrowedBooks } from './BorrowedBooks';
import { Navbar } from './Navbar'

export const SecondPage = () => {

    return (
        <div>
            <Navbar/>
            <BorrowedBooks/>
        </div>
    )
}