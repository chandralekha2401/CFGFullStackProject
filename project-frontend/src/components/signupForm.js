import React, {useState} from 'react';
import './signup.css'
import Axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import { validateUsername, 
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateMobileNumber, 
  validateLastname,
  validateFirstname} from "./ValidationChecks";



const SignupForm = () => {

  const navigate = useNavigate()
  const [firstNameReg,setfirstNameReg]= useState('')
  const [isFirstNameRegValid, setIsFirstNameRegValid] = useState(false)
  const [lastNameReg,setlastNameReg]= useState('')
  const [isLastNameRegValid,setIsLastNameRegValid] = useState(false)
  const [emailReg,setemailReg]= useState('')
  const [isEmailRegValid,setIsEmailRegValid]= useState(false)
  const [userNameReg,setuserNameReg]= useState('')
  const [isUserNameRegValid,setIsUserNameRegValid]= useState(false)
  const [mobileReg,setmobileReg]= useState('')
  const [isMobileRegValid,setIsMobileRegValid]= useState(false)
  const [passwordReg,setpasswordReg]= useState('')
  const [IsPasswordRegValid,setIsPasswordRegValid]= useState(false)
  const [ConfirmPasswordReg,setConfirmPasswordReg]= useState('')
  const [IsConfirmPasswordRegValid,setIsConfrimPasswordRegValid]= useState(false)


const handleChangeFirstName = (e) =>{
  setfirstNameReg(e.target.value)
  setIsFirstNameRegValid(e.target.value !== "")
}
const handleChangeLastName = (e) =>{
  setlastNameReg(e.target.value)
  setIsLastNameRegValid(e.target.value !== "")
}
const handleChangeEmail = (e) =>{
  setemailReg(e.target.value)
  setIsEmailRegValid(e.target.value !== "")
}
const handleChangeUsername = (e) =>{
  setuserNameReg(e.target.value)
  setIsUserNameRegValid(e.target.value !== "")
}
const handleChangeMobileNumber = (e) =>{
  setmobileReg(e.target.value)
  setIsMobileRegValid(e.target.value !== "")
}
const handleChangePassword = (e) =>{
  setpasswordReg(e.target.value)
  setIsPasswordRegValid(e.target.value !== "")
}
const handleChangeConfirmPassword = (e) =>{
  setConfirmPasswordReg(e.target.value)
  setIsConfrimPasswordRegValid(e.target.value !== "" && e.target.value === passwordReg)
}

  const signup=() => {

    
   Axios.post('http://www.localhost:3001/reg', {firstName:firstNameReg,lastName:lastNameReg,
   email:emailReg,username:userNameReg,mobile:mobileReg,password:passwordReg
  }).then((res)=>{
   if(res.body !== " "){
    console.log("Account Created Successfully");
    navigate('/')
   }
   else{
    console.log("Failed to create account");
   }
  }).catch()

  };

    return( 
      
      <div className='form'>
      <div className="form-body">
      <h1 className='title'>Signup Details</h1>
      <form>
        <div className="username">
        <label className="form__label"  htmlFor="firstName">First Name </label>
            <input  type="text" id="firstName" className='form__input' onChange={handleChangeFirstName} />
        </div>
        <div  className='fieldMandatory'>{validateFirstname(firstNameReg)}</div>
        <div className="lastname">
              <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input type="text" id="lastName"  className="form__input"  onChange={handleChangeLastName}/>
              </div> 
              <div  className='fieldMandatory'>{validateLastname(lastNameReg)}</div>            
              <div className="email">
              <label className="form__label" htmlFor="email">Email </label>
                  <input type="email" id="email" className="form__input" onChange={handleChangeEmail}  />
              </div>
              <div  className='fieldMandatory'>{validateEmail(emailReg)}</div>   
              <div className="username">            
              <label className="form__label" htmlFor="username">Username </label>
                  <input type="username" id="username" className="form__input" onChange={handleChangeUsername}   />
              </div>
               <div  className='fieldMandatory'>{validateUsername(userNameReg)}</div> 
              <div className="Mobile Number">
              <label className="form__label" htmlFor="Mobile Number">Mobile Number </label>
                  <input  type="Mobile Number" id="Mobile Number" className="form__input" onChange={handleChangeMobileNumber} />
              </div>   
              <div  className='fieldMandatory'>{validateMobileNumber(mobileReg)}</div>            
              <div className="password">             
              <label className="form__label" htmlFor="Password">Password</label>
                <input  type="password"  id="password" className="form__input" onChange={handleChangePassword}  />
              </div>
              <div  className='fieldMandatory'>{validatePassword(passwordReg)}</div>   
              <div className="confirm-password">
              <label className="form__label" htmlFor="Confirm Password">Confirm Password</label>
                  <input  type="password" id="confirmPassword" className="form__input" onChange={handleChangeConfirmPassword}  />
              </div>
              <div  className='fieldMandatory'>{validateConfirmPassword(ConfirmPasswordReg, passwordReg)}</div>   
              </form>
          <div className='footer'>
         <button disabled={!isFirstNameRegValid && !isLastNameRegValid && !isEmailRegValid && !isUserNameRegValid && !isUserNameRegValid
         && !isMobileRegValid && !IsPasswordRegValid && !IsConfirmPasswordRegValid} 
         onClick={signup}>Register</button>    
    </div>
    </div>
  </div>
          
       
      
    )       
}
export default SignupForm;