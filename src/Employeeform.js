import React, { useState, useEffect, useCallback } from 'react';
import './style.css'
const Employeeform = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
        gender: '',
        jobPosition: '',
        startTime: '',
        endTime: '',
        team: '',
        designation: '',
        billableHours: '',
        isBillable: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Memoized validation function
    const validateForm = useCallback(() => {
        let formErrors = {};
        if (!formData.firstName) formErrors.firstName = 'First name is required';
        if (!formData.lastName) formErrors.lastName = 'Last name is required';
        if (!formData.birthDate) formErrors.birthDate = 'Birth Date is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone Number is required';
        if (!formData.gender) formErrors.gender = 'Gender is required';
        if (!formData.jobPosition) formErrors.jobPosition = 'Job Position is required';
        if (!formData.startTime) formErrors.startTime = 'Start Time is required';
        if (!formData.endTime) formErrors.endTime = 'End Time is required';
        if (!formData.team) formErrors.team = 'Team is required';
        if (!formData.designation) formErrors.designation = 'Designation is required';
        if (!formData.billableHours || formData.billableHours <= 0)
            formErrors.billableHours = 'Billable Hours is required and must be a positive number';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    }, [formData]);

    useEffect(() => {
        if (isSubmitted) {
            validateForm();
        }
    }, [isSubmitted, validateForm]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (validateForm()) {
            // Display an alert message
            alert('Form Submitted Succesfully');

            // Perform form submission (e.g., API call)
            console.log('Form Data Submitted', formData);
        }
    };

    return (
        <div className='Main'>
        <div className="container mt-5">
            <h2 className="head text-center mb-4">Employee Form</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your First Name"
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="middleName" className="form-label">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="middleName"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            placeholder="Enter your Middle Name"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your Last Name"
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="birthDate" className="form-label">Birth Date</label>
                        <input
                            type="date"
                            className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                        {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                        {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="gender" className="form-label">Select Gender</label>
                        <select
                            className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="jobPosition" className="form-label">Job Position</label>
                        <input
                            type="text"
                            className={`form-control ${errors.jobPosition ? 'is-invalid' : ''}`}
                            id="jobPosition"
                            name="jobPosition"
                            value={formData.jobPosition}
                            onChange={handleChange}
                            placeholder="Enter the job position"
                        />
                        {errors.jobPosition && <div className="invalid-feedback">{errors.jobPosition}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="startTime" className="form-label">Start Time</label>
                        <input
                            type="time"
                            className={`form-control ${errors.startTime ? 'is-invalid' : ''}`}
                            id="startTime"
                            name="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                        />
                        {errors.startTime && <div className="invalid-feedback">{errors.startTime}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="endTime" className="form-label">End Time</label>
                        <input
                            type="time"
                            className={`form-control ${errors.endTime ? 'is-invalid' : ''}`}
                            id="endTime"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleChange}
                        />
                        {errors.endTime && <div className="invalid-feedback">{errors.endTime}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="team" className="form-label">Select Team</label>
                        <select
                            className={`form-select ${errors.team ? 'is-invalid' : ''}`}
                            id="team"
                            name="team"
                            value={formData.team}
                            onChange={handleChange}
                        >
                            <option value="">Choose...</option>
                            <option value="teamA">Team A</option>
                            <option value="teamB">Team B</option>
                            <option value="teamC">Team C</option>
                        </select>
                        {errors.team && <div className="invalid-feedback">{errors.team}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="designation" className="form-label">Select Designation</label>
                        <select
                            className={`form-select ${errors.designation ? 'is-invalid' : ''}`}
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                        >
                            <option value="">Choose...</option>
                            <option value="manager">Designer</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Manager</option>
                            <option value="tester">Tester</option>
                        </select>
                        {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="billableHours" className="form-label">Billable Hours</label>
                        <input
                            type="number"
                            className={`form-control ${errors.billableHours ? 'is-invalid' : ''}`}
                            id="billableHours"
                            name="billableHours"
                            value={formData.billableHours}
                            onChange={handleChange}
                            placeholder="Enter billable hours"
                        />
                        {errors.billableHours && <div className="invalid-feedback">{errors.billableHours}</div>}
                    </div>
                    <div className="col-md-4">
                        <div className="form-check mt-4">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="isBillable"
                                name="isBillable"
                                checked={formData.isBillable}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="isBillable">Is Billable?</label>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Employeeform;
