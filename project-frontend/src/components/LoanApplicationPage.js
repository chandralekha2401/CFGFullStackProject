import React from 'react';
import './LoanApplicationPage.css'
import  { Link, Navigate} from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate  } from 'react-router-dom';


function LoanApplication(){
  const navigate = useNavigate ()

  const submit=()=>{
     navigate('/ApplicationSubmitted')
  }
    return (
        <form >
        <div className='formBody'>
        <div><h4 className="heading">Application Form</h4></div>
        <center>
        <table>
        <thead>
      <tr><td>
      <h4 className="Sub-heading">Personal Information</h4>
      </td>
        </tr>
      <tr>
      <td><label>Title:</label></td>
      <td><select>
      <option>Mr</option>
      <option>Mrs</option>
      <option>Miss</option>
        </select></td>
      </tr>
      <tr>     
      <td><label>First Name :</label></td>
      <td><input type="text" name="txt1" className="formInputs"/></td>
       </tr>
    
    <tr>
      
      <td><label>Middle Name :</label></td>
      <td><input type="text" name="txt2"className="formInputs" /></td>
       </tr>
       <tr>
      
      <td><label>LastName :</label></td>
      <td><input type="text" name="txt3" className="formInputs" /></td>
       </tr>
       <tr>
      
      <td><label>Date of Birth :</label></td>
      <td><input type="date" name="txt4"className="formInputs" /></td>
       </tr>
       <tr>
      
      <td><label>Gender :</label></td>
      <td><input type="text" name="txt5" className="formInputs"/></td>
       </tr>
       <tr>
      
      <td><label>Marriage Status:</label></td>
      <td><select>
      <option>Single</option>
      <option>Married</option>
      <option>Other</option>
        </select></td>
       </tr>
       <tr>
      
      <td><label>Nationality :</label></td>
      <td><input type="text" name="txt7"className="formInputs" /></td>
       </tr>
       <tr>
      
      <td><label>Mobile Number :</label></td>
      <td><input type="text" name="txt8"className="formInputs" /></td>
       </tr>
       <tr>
      
      <td><label>Email:</label></td>
      <td><input type="email" name="txt9"className="formInputs" /></td>
       </tr>
       <tr>     
      <td><label>Address Line 1 :</label></td>
      <td><input type="text" name="txt10"className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>Address line 2 :</label></td>
      <td><input type="text" name="txt10"className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>City :</label></td>
      <td><input type="text" name="txt10"className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>State/Province:</label></td>
      <td><input type="text" name="txt10"className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>Postal/Zip Code:</label></td>
      <td><input type="text" name="txt10"className="formInputs" /></td>
       </tr>
       <tr></tr>
       <tr>
      
      <td><label>Visa Type :</label></td>
      <td><input type="file" name="file1"  accept="application/pdf" className="formInputs" /></td>
       </tr>
       <tr>
      
      <td><label>Proof of Identity :</label></td>
      <td><input type="file" name="file2" accept="application/pdf"  className="formInputs"/></td>
       </tr><tr>
      
      <td><label>Proof of Address </label></td>
      <td><input type="file" name="file3" accept="application/pdf" className="formInputs"/></td>
       </tr>
       <tr><td>
      <h4 className="Sub-heading">Employment Information</h4>
      </td>
        </tr>
        <tr>
      <td><label>Employer/Company Name :</label></td>
      <td><input type="text" name="txt11" className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>Job Title:</label></td>
      <td><input type="text" name="txt11" className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>Employment type :</label></td>
      <td><select>
        <option>Part-time</option>
        <option>Full-time</option>
        <option>Self Employment</option>
      </select>
      
      </td>
       </tr>
       <tr>
      <td><label>Employer/Company Contact Number :</label></td>
      <td><input type="text" name="txt11" className="formInputs" /></td>
       </tr>
       <tr>
      
      <td><label>Income before Tax(Yearly):</label></td>
      <td><input type="text" name="txt12" className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>Income After Tax(Yearly)  :</label></td>
      <td><input type="text" name="txt13"className="formInputs" /></td>
       </tr>
       <tr>
      <td><label>Proof of Income(payslips) :</label></td>
      <td><input type="file" name="txt13" accept="application/pdf" /></td>
       </tr>
       <tr>
      <td><label>Credit Score:</label></td>
      <td><input type="number" name="txt13"className="formInputs" /></td>
       </tr>
       </thead>
       <tfoot>
</tfoot>
</table>
</center>
<h4 className="Sub-heading">Terms and condition</h4>
<div>
    <p>I authorize prospective Credit Grantors/Lending/Leasing Companies to obtain personal and credit information about me from my employer and credit bureau, or credit reporting agency, any person who has or may have any financial dealing with me, or from any references I have provided. This information, as well as that provided by me in the application, will be referred to in connection with this lease and any other relationships we may establish from time to time. Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies. </p>
    <input type="checkbox" name="allow" value="1" required></input>
</div>
<div>
<p>I hereby agree that the information given is true, accurate and complete as of the date of this application submission. </p>
<input type="checkbox" name="allow" value="1" required></input>
</div>
<center><button onClick={submit}>Submit Application</button></center>
</div>   
     
      </form>
    )
}

export default LoanApplication;