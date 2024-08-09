import './App.css';
import SignupForm from './components/signupForm';
import  { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage'
import Status from './components/Status';
import UserProfile from './components/UserProfile';
import ManagerHomePage from './components/Manager/ManagerHomePage';
import ManagerProfile from './components/Manager/ManagerProfile';
import LoanApplication from './components/LoanApplicationPage';
import ManagerReviewpage from './components/Manager/ManagerReviewPage';
import ApplicationSubmitted from './components/ApplicationSubmitted';


function App() {
  return (
     <Router>
      <Routes>
        <Route  path='/' element={<LoginPage/>}/>
        <Route  path='/reg' element={<SignupForm/>}/>
        <Route  path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route  path='/HomePage' element={<HomePage/>}/>
        <Route  path='/Status' element={<Status/>}/>
        <Route  path='/profileDetails' element={<UserProfile/>}/>
        <Route path = '/loanApplicationPage' element={<LoanApplication/>}/>
        <Route path = '/ApplicationSubmitted' element={<ApplicationSubmitted/>}/>
        <Route  path='/ManagerHomePage' element={<ManagerHomePage/>}/>
        <Route  path='/ManagerProfile' element={<ManagerProfile/>}/>
        <Route path = '/ManagerReviewPage' element={<ManagerReviewpage/>}/>
      </Routes>
    </Router>
  );
}


export default App;
