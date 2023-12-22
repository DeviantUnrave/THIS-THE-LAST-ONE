import React, { useState } from "react";
import './entry.css';

function EmployeeData({ EmployeeID, firstName, lastName, Birthday, Contact, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedFirstName, setEditedFirstName] = useState(firstName);
    const [editedLastName, setEditedLastName] = useState(lastName);
    const [editedBirthday, setEditedBirthday] = useState(Birthday);
    const [editedContact, setEditedContact] = useState(Contact);
    const [showSalaryDetails, setShowSalaryDetails] = useState(false);

    const handleDelete = () => {
        onDelete(EmployeeID);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        const updatedData = {
            firstName: editedFirstName,
            lastName: editedLastName,
            Birthday: editedBirthday,
            Contact: editedContact,
        };
        console.log('Updated employee data:', updatedData);

        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedFirstName(firstName);
        setEditedLastName(lastName);
        setEditedBirthday(Birthday);
        setEditedContact(Contact);
        setIsEditing(false);
    };

    const salaryClick = () => {
        // Toggle the visibility of salary details pop-up
        setShowSalaryDetails(!showSalaryDetails);
    };

    const employeeClick = () => {
        window.location.href = '/Dashboard';
    };

    return (
        <div className="userData">
            {!isEditing ? (
                <div className="wrds">
                    <div className="detail1"> {EmployeeID}</div>
                    <div className="detail2"> {firstName}</div>
                    <div className="detail3"> {lastName}</div>
                    <div className="detail4"> {Birthday}</div>
                    <div className="detail5"> {Contact}</div>
                </div>
            ) : (
                <div className="editFields">
                    <input
                        type="text"
                        className="detailed1"
                        value={editedFirstName}
                        onChange={(e) => setEditedFirstName(e.target.value)}
                    />
                    {/* Other input fields for editing */}
                </div>
            )}

            <div className="btns">
                <button className="Sa" onClick={salaryClick}>Salary</button>
                <button className="Sd" onClick={employeeClick}>Employee Account</button>
                {!isEditing ? (
                    <button className="Ed" onClick={handleEdit}>Edit</button>
                ) : (
                    <div className="SaveCancel">
                        <button className="Ed" onClick={handleSave}>Save</button>
                        <button className="Ed" onClick={handleCancel}>Cancel</button>
                    </div>
                )}
                <button className="De" onClick={handleDelete}>Delete</button>
            </div>

            {showSalaryDetails && (
                <div className="popup">
                    <button onClick={salaryClick}>Close</button>

                    <div className="emp1">Employee ID: {EmployeeID}</div>
                    <div className="ln1">Last Name: {lastName}</div>
                    <div className="fn1">First Name: {firstName}</div>
                    <div className="bd1">Birthday: {Birthday}</div>
                    <div className="cn1"> Contact: {Contact}</div>
                    <div className="sal1"> Salary:  </div>


                </div>
            )}
        </div>
    );
}

export default EmployeeData;
