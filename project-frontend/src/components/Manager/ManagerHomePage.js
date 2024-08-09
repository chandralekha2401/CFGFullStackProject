import React from "react";
import './ManagerHomePage.css';
import  { Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function ManagerHomePage() {
    const navigate=useNavigate();

    const SignOff=() => {
        navigate('/')
    };
    return(
        <div className="Managerhome">
            <h1>Welcome Manager!! To Home Loan Application </h1>
            <div className="links">
         <Link style={{color: 'beige'}} to="/ManagerProfile">My Profile</Link> | <Link style={{color: 'beige'}}  to="/ManagerReviewPage">Application Review</Link>
            </div>
            <div className='otherInput'>       
        </div> 
            <img src={require ("../../Pic/HomeLoans.jpg")} alt="" height={460}/>
            <div className='otherInput'>       
        </div> 
        <button onClick={SignOff}>Sign Off</button> 
        </div>
        
    )
}

export default ManagerHomePage;
