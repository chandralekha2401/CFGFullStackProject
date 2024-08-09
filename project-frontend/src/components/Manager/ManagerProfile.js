import React,{useState} from "react";
import './ManagerProfile.css';
import  { Link} from 'react-router-dom'
import Axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import {validateAge,
  validateAlternativeContact,
  validateGender,
  validateNationality,
  validatePermanentAddress,
  validateResidentialAddress} from '../ValidationChecks'


function ManagerProfile () {

   const navigate = useNavigate ()
  const [ageReg,setageReg]= useState('')
  const [isAgeRegValid,setIsAgeRegValid] = useState(false)
  const [genderReg,setgenderReg]= useState('')
  const [isGenderRegValid,setIsGenderRegValid] = useState(false)
  const [nationalityReg,setnationalityReg]= useState('')
  const [isNationalityRegValid,setIsNationalityRegValid] = useState(false)
  const [alternativeContactReg,setalternativeContactReg]= useState('')
  const [isAlternativeContactRegValid,setIsAlternativeContactRegValid] = useState(false)
  const [residentialAddressReg,setresidentialAddressReg]= useState('')
  const [isResidentialAddressRegValid,setIsResidentialAddressRegValid] = useState(false)
  const [permanentAddressReg,setpermanentAddressReg]= useState('')
  const [isPermanentAddressRegValid,setIsPermanentAddressRegValid] = useState(false)

  const handleChangeAge = (e) =>{
    setageReg(e.target.value)
    setIsAgeRegValid(e.target.value !== "")
  }
  const handleChangeGender = (e) =>{
    setgenderReg (e.target.value)
    setIsGenderRegValid(e.target.value !== "")
  }
  const handleChangeNationality = (e) =>{
    setnationalityReg (e.target.value)
    setIsNationalityRegValid(e.target.value !== "")
  }
  const handleChangeAlternativeContact = (e) =>{
    setalternativeContactReg (e.target.value)
    setIsAlternativeContactRegValid(e.target.value !== "")
  }
  const handleChangeResidentialAddress = (e) =>{
    setresidentialAddressReg(e.target.value)
    setIsResidentialAddressRegValid(e.target.value !== "")
  }
  const handleChangePermanentAddress = (e) =>{
    setpermanentAddressReg(e.target.value)
    setIsPermanentAddressRegValid(e.target.value !== "")
  }
  
  

  const save=() => {
    var userName = "Admin"
   Axios.post('http://www.localhost:3001/profileDetails', {userName: userName,age:ageReg,gender:genderReg,nationality:nationalityReg,
   alternativeContact:alternativeContactReg,residentialAddress:residentialAddressReg,
   permanentAddress:permanentAddressReg
   }).then((res)=>{
    if(res.body !== " "){
     console.log("User Details Saved Successfully");
     navigate('/ManagerHomePage')
    }
    else{
     console.log("Failed to save user details");
    }
   }).catch()
 
   };
    return(
      
      <div className='form2'>
          <div className="form-body">
          <div className="image">
          <img src={require ("../../Pic/ManagerProfile.png")} alt="" className='Managericon'/>
          </div>
          <div className="title">
          <h1>Manager Details</h1>
          </div>
          <form>
            <div className="Age">
            <label className="form__label" htmlFor="Age">Age </label>
                <input  type="text" id="Age" className='form__input' onChange={handleChangeAge}/>
            </div>
            <div  className='fieldMandatory'>{validateAge(ageReg)}</div> 
            <div className="Gender ">
            <label className="form__label" htmlFor="Gender">Gender </label>
                <input  type="text" id="Gender"  className="form__input" onChange={handleChangeGender}/>
            </div>
            <div  className='fieldMandatory'>{validateGender(genderReg)}</div> 
            <div className="Nationality ">
            <label className="form__label"  htmlFor="Nationality">Nationality </label>
                <input  type="text" id="Nationality" className="form__input" onChange={handleChangeNationality} />
            </div>
            <div  className='fieldMandatory'>{validateNationality(nationalityReg)}</div> 
            <div className="Alternate Contact Number">            
            <label className="form__label"  htmlFor="Alternate Contact Number">Alternate Contact Number </label>
                <input  type="text" id="Alternate Contact Number" className="form__input" onChange={handleChangeAlternativeContact}/>
            </div>
            <div  className='fieldMandatory'>{validateAlternativeContact(alternativeContactReg)}</div> 
            <div className="Residential Address ">
            <label className="form__label"  htmlFor="Residential Address">Residential Address </label>
                <input  type="text" id="Residential Address" className="form__input"  onChange={handleChangeResidentialAddress}/>
            </div>
            <div  className='fieldMandatory'>{validateResidentialAddress(residentialAddressReg)}</div> 
            <div className="Permanent Address">             
            <label className="form__label"  htmlFor="Permanent Address">Permanent Address</label>
              <input type="text"  id="Permanent Address" className="form__input" onChange={handleChangePermanentAddress} />
            </div>
            <div  className='fieldMandatory'>{validatePermanentAddress(permanentAddressReg)}</div>  
        
        </form>
        <div className='footer'>
            <button disabled={!isAgeRegValid && !isAlternativeContactRegValid && !isGenderRegValid && !isNationalityRegValid 
            && !isResidentialAddressRegValid && !isPermanentAddressRegValid} onClick={save}>Save</button> <br></br> <br></br><Link to='/ManagerHomePage'>Home Page</Link>
        </div>
      </div>
      </div>
      
  )
}

export default ManagerProfile;