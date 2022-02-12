import React, { useState } from 'react';
import './Signin.css';
import Signup from './Signup';
import {useRef} from 'react';
import {auth} from './firebase';


function Signin() {
const emailRef=useRef(null);
const passwordRef =useRef(null);
const signIn=(e)=>{
  e.preventDefault();
  auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then(authUser=>{
    console.log(authUser)
  }).catch(error=>{
    alert(error.message)
  })
}





  const [logup,Setlogup]=useState(false);
  const Log=(e)=>{
    e.preventDefault();
    Setlogup(true);
  }
  return (
      <>
  {
    logup ? (<Signup/>):(
    
    <>
      <div className="all">
    <div className="form-container">
     <h1>Sign In</h1>
 <form action="">
  <input type="email"  placeholder='email' ref={emailRef}/>
  <input type="password" name="" id="" placeholder='password' ref={passwordRef}/>
 <button className='enter' onClick={signIn} >Signin</button>
 </form>
  <p>Don't have an account ! <span onClick={Log}>SignUp</span></p>
       
       </div> 
    </div>
    
    
    </>)
  }
     
      </>
  );
}

export default Signin;
