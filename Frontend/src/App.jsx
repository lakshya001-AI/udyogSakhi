import React from 'react'
import Style from "./App.module.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './Components/loginPage';
import CreateAccountPage from './Components/createAccountPage';
import MainPage from './Components/mainPage';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/createAccountPage' element={<CreateAccountPage/>}/>
    <Route path='/MainPage' element={<MainPage/>}/>
  </Routes>
  </BrowserRouter>

  </>
}

export default App