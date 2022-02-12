import React  from 'react';
import {useRef} from 'react';
import {auth} from './firebase';
import './Signup.css'

function Signup() {
  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);
    const register=(e)=>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(
        EmailRef.current.value,
        PasswordRef.current.value
      ).then(authUser=>{
        console.log(authUser)
      }).catch(error=>{

alert(error.message)

      })
     
    }




  return (
  <>
  
  <div className="first">
  <div className="holder">
    <h1>Sign Up</h1>
    <div className="logup">
      <input ref={EmailRef} type="email" placeholder='Email' />
      <input ref={PasswordRef} type="password" placeholder='Password'/>
    
    </div>
    <button onClick={register} >Sign Up</button>
  </div>
    
    </div> 
  
  </>
  );
}

export default Signup;

