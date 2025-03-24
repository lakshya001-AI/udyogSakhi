import React, { useState } from 'react'
import Style from "../App.module.css"
import { Link } from 'react-router-dom';

function LoginPage() {

    const[emailOrMobile, setEmailOrMobile] = useState("");
    const[password, setPassword] = useState("");

    function getUserDetails(e){
        e.preventDefault();
        if(emailOrMobile && password){
            alert("Yes everything is there");
        }else{
            alert("No not there");
        }
    }


  return <>
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
          <input type="text" id="email" placeholder="Enter your email or mobile" value={emailOrMobile} onChange={(e)=>setEmailOrMobile(e.target.value)}/>
        </div>

        <div className={Style.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button className={Style.loginButton} type='submit'>SIGN IN</button>

        {/* Here if the user dont have account then give an option to create account */}
        <div className={Style.SwitchToLogin}>
        <h5>Don't have an account? <Link to="/createAccountPage">Create Account</Link></h5>
        </div>
      </form>
    </div>

  </div>
</div>

  </div>
  </>
}

export default LoginPage;