// import React, { useState } from 'react'
// import Style from "../App.module.css"
// import { Link } from 'react-router-dom';

// function LoginPage() {

//     const[emailOrMobile, setEmailOrMobile] = useState("");
//     const[password, setPassword] = useState("");

//     function getUserDetails(e){
//         e.preventDefault();
//         if(emailOrMobile && password){
//             alert("Yes everything is there");
//         }else{
//             alert("No not there");
//         }
//     }


//   return <>
//   <div className={Style.mainPage}>
//   <div className={Style.loginMainPage}>
//   <div className={Style.loginMainPageInnerDiv}>

//     <div className={Style.loginMainPageInnerDiv1}>
//       <div className={Style.overlay}>
//         <h1>Welcome Back!</h1>
//         <p>Empowering Women Entrepreneurs to Achieve Their Dreams.</p>
//       </div>
//     </div>

//     <div className={Style.loginMainPageInnerDiv2}>
//       <form className={Style.loginForm} onSubmit={getUserDetails}>
//         <h2>Sign in to udyogSakhi</h2>
//         <p>Your Partner in Business Growth.</p>
//         <div className={Style.inputGroup}>
//           <label htmlFor="email">Email or Mobile</label>
//           <input type="text" id="email" placeholder="Enter your email or mobile" value={emailOrMobile} onChange={(e)=>setEmailOrMobile(e.target.value)}/>
//         </div>

//         <div className={Style.inputGroup}>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//         </div>

//         <button className={Style.loginButton} type='submit'>SIGN IN</button>

//         {/* Here if the user dont have account then give an option to create account */}
//         <div className={Style.SwitchToLogin}>
//         <h5>Don't have an account? <Link to="/createAccountPage">Create Account</Link></h5>
//         </div>
//       </form>
//     </div>

//   </div>
// </div>

//   </div>
//   </>
// }

// export default LoginPage;


import React, { useState } from "react";
import Style from "../App.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
    const [emailOrMobile, setEmailOrMobile] = useState("");
    const [password, setPassword] = useState("");

    async function getUserDetails(e) {
        e.preventDefault();

        if (emailOrMobile && password) {
            try {
                const response = await axios.post("http://localhost:5000/loginUser", {
                    emailOrMobile,
                    password,
                });

                if (response.status === 200) {
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

                    // Redirect user or handle successful login
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
                toast.error(
                    error.response?.data.message || "Login failed. Please try again.",
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    }
                );
            }
        } else {
            toast.warn("Please fill out all fields.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    return (
        <>
            <div className={Style.mainPage}>
                <div className={Style.loginMainPage}>
                    <div className={Style.loginMainPageInnerDiv}>
                        <div className={Style.loginMainPageInnerDiv1}>
                            <div className={Style.overlay}>
                                <h1>Welcome Back!</h1>
                                <p>Empowering Women Entrepreneurs to Achieve Their Dreams.</p>
                            </div>
                        </div>

                        <div className={Style.loginMainPageInnerDiv2}>
                            <form className={Style.loginForm} onSubmit={getUserDetails}>
                                <h2>Sign in to udyogSakhi</h2>
                                <p>Your Partner in Business Growth.</p>
                                <div className={Style.inputGroup}>
                                    <label htmlFor="email">Email or Mobile</label>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter your email or mobile"
                                        value={emailOrMobile}
                                        onChange={(e) => setEmailOrMobile(e.target.value)}
                                    />
                                </div>

                                <div className={Style.inputGroup}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button className={Style.loginButton} type="submit">
                                    SIGN IN
                                </button>

                                <div className={Style.SwitchToLogin}>
                                    <h5>
                                        Don't have an account? <Link to="/createAccountPage">Create Account</Link>
                                    </h5>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default LoginPage;
