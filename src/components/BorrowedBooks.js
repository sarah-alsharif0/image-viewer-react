import React from 'react'
import '../assets/styles/BorrowedBooks.css'
import {useState, useEffect} from 'react'
export const BorrowedBooks = () => {
    const [bBooks, setBBooks] = useState([]);

    useEffect(() =>{
        const borrowedBooks = JSON.parse(localStorage.borrowedBooks || '[]');
        setBBooks(borrowedBooks);
    }, []);

    const handleReturn = (index) => {
        const tmpBooks = [...bBooks];
        tmpBooks.splice(index , 1);
        localStorage.borrowedBooks = JSON.stringify(tmpBooks);
        setBBooks(tmpBooks);
    }
    return (
        <div className="table-container">
            {!bBooks.length && <h3 className="alert-title">looks like you haven't borrowed any book :(</h3>}
            {bBooks.length > 0 && <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>ISBN</th>
                        <th>Student Name</th>
                        <th>Student Number</th>
                        <th>Student Return Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bBooks.map((item,index) => (
                            <tr key={new Date().getTime()*index}>
                                <td>
                                    {item.bookInfo.title}
                                </td>
                                <td>
                                    {item.bookInfo.isbn}
                                </td>
                                <td>
                                    {item.studentInfo.studentName}
                                </td>
                                <td>
                                    {item.studentInfo.studentId}
                                </td>
                                <td>
                                    {item.studentInfo.returnDate}
                                </td>
                                <td>
                                    <button className="return-btn" onClick={() => handleReturn(index)}>Retrun</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>}
        </div>
    )
}
