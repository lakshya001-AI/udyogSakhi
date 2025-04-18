import React from 'react'
import Style from "./App.module.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './Components/loginPage';
import CreateAccountPage from './Components/createAccountPage';
import MainPage from './Components/mainPage';
import ProtectedRoute from './Components/protectedRoute';
import DonationPage from './Components/donationPage';
import ProfilePage from './Components/ProfilePage';
import FinancingModel from './Components/financingModel';
import CreditEvaluation from './Components/creditEvaluation';
import FinancialLiteracy from './Components/financialLitracy';
import MarketPlace from './Components/marketPlace';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/createAccountPage' element={<CreateAccountPage/>}/>
    <Route path='/MainPage' element={<ProtectedRoute><MainPage/></ProtectedRoute>}/>
    <Route path='/donationPage' element={<ProtectedRoute><DonationPage/></ProtectedRoute>}/>
    <Route path='/ProfilePage' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
    <Route path='/financingModel' element={<ProtectedRoute><FinancingModel/></ProtectedRoute>}/>
    <Route path='/creditEvaluation' element={<ProtectedRoute><CreditEvaluation/></ProtectedRoute>}/>
    <Route path='/financialLiteracy' element={<ProtectedRoute><FinancialLiteracy/></ProtectedRoute>}/>
    <Route path='/marketPlace' element={<ProtectedRoute><MarketPlace/></ProtectedRoute>}/>
  </Routes>
  </BrowserRouter>

  </>
}

export default App