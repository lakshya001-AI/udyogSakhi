import React from 'react'
import Style from "./App.module.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './Components/loginPage';
import CreateAccountPage from './Components/createAccountPage';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/createAccountPage' element={<CreateAccountPage/>}/>
  </Routes>
  </BrowserRouter>

  </>
}

export default App