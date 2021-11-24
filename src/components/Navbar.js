import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/library-logo.png';

export const Navbar = () => {
    const [date,setDate] = useState(new Date().toDateString())
    useEffect(() => {
        setInterval(() => setDate(new Date()), 30000);
      }, []);
    
    return (
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} className="logo" alt=""  />
                    <h1 className="website-title">
                        Library System
                    </h1>
                </div>
                <div>
                    <Link className="button" to="/">Books</Link> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="button" to="/borrowedBooks">Borrowed Books</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="date"> <b>Date:</b> {date} </span>
                </div>
                
            </nav>
    )
}