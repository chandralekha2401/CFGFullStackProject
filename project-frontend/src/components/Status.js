import React from "react";
import './Status.css';
import  { Link} from 'react-router-dom'

function Status (){
    return(
        
        <div className="status">
            <h1> My Application Status</h1>
            <div className='Space'>       
        </div>
        <div className="Results">
          <label>Your Application status is:</label>
         <input type="status" id="status" className="inputStatus" />
         <br></br>
         <br></br> <Link to='/HomePage'>Home Page</Link> 
        </div> 
        
        </div>
        
        
     
    )
}

export default Status;