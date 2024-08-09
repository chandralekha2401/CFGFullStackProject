import './ForgotPassword.css';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios'
import {validateUsername,validatePassword,validateConfirmPassword} from "./ValidationChecks";


function ForgotPassword (){

    const [userNameReg,setuserNameReg]= useState('')
    const [IsuserNameRegValid,setIsuserNameRegValid]= useState(false)

    const [passwordReg,setpasswordReg]= useState('')
    const [IsPasswordRegValid,setIsPasswordRegValid]= useState(false)
    const [ConfirmPasswordReg,setConfirmPasswordReg]= useState('')
    const [IsConfirmPasswordRegValid,setIsConfrimPasswordRegValid]= useState(false)

    const handleuserName = (e) =>{
        setuserNameReg(e.target.value)
        setIsuserNameRegValid(e.target.value !== "")
      }

    const handleChangePassword = (e) =>{
        setpasswordReg(e.target.value)
        setIsPasswordRegValid(e.target.value !== "")
      }
      const handleChangeConfirmPassword = (e) =>{
        setConfirmPasswordReg(e.target.value)
        setIsConfrimPasswordRegValid(e.target.value !== "" && e.target.value === passwordReg)
      }


    const navigate=useNavigate();
    const Reset=()=>{
        Axios.post('http://www.localhost:3001/passwrd', {userName:userNameReg,password:ConfirmPasswordReg
  }).then((res)=>{
   if(res.body !== " "){
    console.log("Password Changed Successfully");
    navigate('/')
   }else{
    console.log("Password not Updated");

   }
  }).catch()
        
    }
    return(
        <div className='Pass'>
            <div className='Pass-2'>
            <h1 className='title'>Forgot Password?</h1>
            <div>
                <label htmlFor="User Name">User Name</label><br></br>
                <img src={require ("../Pic/username.jpg")} alt="" className='user'/>
                <input type="text" id="userName" className='name' onChange={handleuserName}/>
                <div  className='fieldMandatory'>{validateUsername(userNameReg)}</div>   
                <div className='otherInput'> 
            </div>
            </div>
            <div>
                <label htmlFor="New Password">New Password </label><br></br>
                <img src={require ("../Pic/password.jpg")} alt="" className='user'/>
                <input type="text" id="New Password" className='name' onChange={handleChangePassword}/>
                <div  className='fieldMandatory'>{validatePassword(passwordReg)}</div>   
                <div className='otherInput'> 
        </div> 
            </div>
            <label htmlFor="Confirm Password">Confirm Password </label><br></br>
            <img src={require ("../Pic/password.jpg")} alt="" className='user'/>
            <input type="text" id=" Confirm Password" className='name' onChange={handleChangeConfirmPassword}/>
            <div  className='fieldMandatory'>{validateConfirmPassword(ConfirmPasswordReg, passwordReg)}</div>
            <div className='otherInput'> 
        </div> 
        <img src={require ("../Pic/OIP.jpg")} alt="" width={400}/>
        <div className='otherInput'> 
        </div > 
        <div className='footer'>
              <button disabled={!IsuserNameRegValid && !IsPasswordRegValid && !IsConfirmPasswordRegValid} onClick={Reset}>Reset Password</button>
          </div>     
        </div>     
     </div>   
    )
}

export default ForgotPassword;