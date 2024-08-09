import './login.css';
import  { Link, Navigate} from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate  } from 'react-router-dom';




const LoginPage = () => {

  
  
  //const alert = useAlert()
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate ()
  const [usernameReg,setuserNameReg]= useState('')
  const [isUserNameRegValid,setIsUserNameRegValid]= useState(false)
  const [passwordReg,setpasswordReg]= useState('')
  const [IsPasswordRegValid,setIsPasswordRegValid]= useState(false)

  const handleChangeUsername = (e) =>{
    setuserNameReg(e.target.value)
    setIsUserNameRegValid(e.target.value !== "")
  }

  const handleChangePassword = (e) =>{
    setpasswordReg(e.target.value)
    setIsPasswordRegValid(e.target.value !== "")
  }


  const login=() => {

    var username = document.getElementById("username").value;
    localStorage.setItem("username", JSON.stringify(username));
    console.log(username)
    document.getElementById("username").innerHTML = localStorage.getItem("username");
    console.log(localStorage.username)
    
    Axios.post('http://www.localhost:3001/login', {username:usernameReg,password:passwordReg
   }).then((res)=>{
    
    if(res.data.length==0){
      console.log("Login Unsuccessful, Check username/password");
      setErrorMessage('Incorrect password/username!');
     // alert("Incorrect Details Provided!");
     //console.log("empty array",res);
    }
    else{
      console.log("Login successful");
      navigate('/HomePage')
     //console.log("non-empty array",res);
    }
   }).catch()
  
   };
   
   const managerLogin=()=>{

    navigate('/ManagerHomePage')
   };
   
  return (
    <div className="Main-App">
    <div className='Sub-App'>
      <div>
        <div className='image'>
          <div className='img'>
            <img src={require ("../Pic/icon.jpg")} alt="" className='icon' />
          </div>
        </div>
        <div>
          <h1 className='title'>Login Page</h1> 
        </div>
        <div>
          <img src={require ("../Pic/username.jpg")} alt="" className='user'/>
          <input type="username" id="username" placeholder='username' className='name' onChange={handleChangeUsername}/>
          <div className='otherInput'> 
        </div> 
          <img src={require ("../Pic/password.jpg")} alt="" className='user'/>
          <input type="password"  id="password" placeholder='password' className='name' onChange={handleChangePassword}/>
          <div className='otherInput'>       
        </div> 
        {errorMessage && <div className="error"> {errorMessage} </div>}
          <button disabled={!isUserNameRegValid && !IsPasswordRegValid} onClick={e => usernameReg == "Admin" && passwordReg == "12345" ? managerLogin(e) : login(e)}>LogIn</button> 
        </div>
          <Link to='/forgotpassword'>Forgot password</Link> Or <Link to="/reg">SignUp</Link>
      </div>  
    </div>
    </div>
  );
}



export default LoginPage;


