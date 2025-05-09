import React, { useState } from 'react';
import axios from "axios";
import Style from '../App.module.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateAccountPage() {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [region, setRegion] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [education, setEducation] = useState('');
    const [industry, setIndustry] = useState('');
    const [governmentId, setGovernmentId] = useState('');

    async function getUserDetails(event) {
        event.preventDefault();
    
        const data = {
            fullName,
            mobileNumber,
            email,
            password,
            region,
            preferredLanguage,
            education,
            industry,
            governmentId,
        };
    
        if (Object.values(data).every(field => field)) {
            try {
                const response = await axios.post("http://localhost:5000/createAccount", data);
                
                if (response.status === 201) {
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                        className: Style.customToast,
                    });
                } else {
                    toast.warn(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                        className: Style.customToast,
                    });
                }
            } catch (error) {
                console.error("Error:", error.response?.data || error.message);
                toast.error(error.response?.data.message || "Failed to create account. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    className: Style.customToast,
                });
            }
        } else {
            toast.warn("Please fill out all fields.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                className: Style.customToast,
            });
        }
    }

    return (
        <div className={Style.mainPage} style={{ overflowY: 'auto' }}>
            <div className={Style.loginMainPage}>
                <div className={Style.loginMainPageInnerDiv}>
                    <div className={Style.loginMainPageInnerDiv1}>
                    <div className={Style.overlay}>
    <h1>Join Us Today!</h1>
    <p>Take the first step toward achieving your entrepreneurial dreams.</p>
</div>
                    </div>

                    <div className={Style.loginMainPageInnerDiv2}>
                        <form className={Style.loginForm} onSubmit={getUserDetails}>
                            <h2 className={Style.createAccountHeading}>Create Account</h2>
                            <p>Your Partner in Business Growth.</p>

                            <div className={Style.inputGroup}>
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="mobileNumber">Mobile Number</label>
                                <input type="text" id="mobileNumber" placeholder="Enter your mobile number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="region">Region/Location</label>
                                <input type="text" id="region" placeholder="Enter your region or location" value={region} onChange={(e) => setRegion(e.target.value)} />
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="preferredLanguage">Preferred Language</label>
                                <select id="preferredLanguage" value={preferredLanguage} onChange={(e) => setPreferredLanguage(e.target.value)}>
                                    <option value="">Select Language</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="marathi">Marathi</option>
                                    <option value="tamil">Tamil</option>
                                    <option value="telugu">Telugu</option>
                                    <option value="bengali">Bengali</option>
                                </select>
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="education">Highest Level of Education</label>
                                <select id="education" value={education} onChange={(e) => setEducation(e.target.value)}>
                                    <option value="">Select Education Level</option>
                                    <option value="10th">10th</option>
                                    <option value="12th">12th</option>
                                    <option value="graduate">Graduate</option>
                                    <option value="postGraduate">Post Graduate</option>
                                </select>
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="industry">Industry/Category</label>
                                <select id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                                    <option value="">Select Industry</option>
                                    <option value="agriculture">Agriculture</option>
                                    <option value="handicrafts">Handicrafts</option>
                                    <option value="retail">Retail</option>
                                    <option value="homeBusiness">Home Business</option>
                                </select>
                            </div>

                            <div className={Style.inputGroup}>
                                <label htmlFor="governmentId">Government ID (Aadhaar Number)</label>
                                <input type="text" id="governmentId" placeholder="Enter your Aadhaar number" value={governmentId} onChange={(e) => setGovernmentId(e.target.value)} />
                            </div>

                            <button type="submit" className={Style.loginButton}>CREATE ACCOUNT</button>

                            <div className={Style.SwitchToLogin}>
                                <h5>Already have an account? <Link to="/">Back to SignIn</Link></h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default CreateAccountPage;

