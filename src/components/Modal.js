import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../assets/styles/Modal.css'

export const Modal = (props) => {  
    const [studentInfo, setStudentInfo] = useState({
        studentName:"",
        studentId:"",
        returnDate:new Date()
    });
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setStudentInfo({...studentInfo,
            [name]: value
        })
    }
    const handleSubmit = () => {
        console.log(studentInfo);
    }
    const handleCancel = () => {
        setStudentInfo({
            studentName:"",
            studentId:"",
            returnDate:new Date()
        })
        props.handleClose();
        console.log(studentInfo);
    }
    return (
        <div className="form-container">
            <div className="form">
                <div className="form-header">
                    <b>Borrow a book</b>
                    <button onClick={props.handleClose} className="close-icon" >x</button>
                </div>
                <div className="form-inputs">
                <label>
                    <b>Student Name:</b>
                    <input type="text" name="studentName" value={studentInfo.studentName} required onChange={handleChange}/>
                </label>
                <label>
                    <b>Student ID:</b>
                    <input type="text" name="studentId" value={studentInfo.studentId} required onChange={handleChange}/>
                </label>
                <label>
                    <b>Return Date:</b>
                    <input type="date" name="returnDate" value={studentInfo.returnDate} required onChange={handleChange}/>
                </label>
                </div>
                <div className="form-buttons">
                    <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                    <button onClick={handleSubmit} className="save-btn">Save</button>
                </div>
            </div> 
        </div>
    )
}