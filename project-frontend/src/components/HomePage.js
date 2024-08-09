import React from "react";
import './HomePage.css';
import  { Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function HomePage() {
    const navigate=useNavigate();

    const SignOff=() => {
        navigate('/')
    };
    return(
        <div className="home">
            <h1>Welcome To Home Loan Application</h1>
            <div  >
            <Link style={{color: 'beige'}} className="links" to='/Status'>Status</Link> | <Link style={{color: 'beige'}} className="links" to="/profileDetails">User Profile</Link> | <Link style={{color: 'beige'}} className="links" to="/loanApplicationPage">loan Application</Link>
            </div>
            <div className='otherInput'>       
        </div> 
            <img src={require ("../Pic/homepage.jpg")} alt="" height={460}/>
            <div className='otherInput'>       
        </div> 
        <button onClick={SignOff}>Sign Off</button> 
        </div>
        
    )
}

export default HomePage;
