import React, { useState } from 'react';
import Signin from './Component/Signin';
import Signup from './Component/Signup';

import './Login.css';







function Login() {
    const[signup,Setsignup]=useState(false);
    const show=(e)=>{
        e.preventDefault();
        Setsignup(true);
    }
    const[signin,Setsignin]=useState(false);
    const load=(e)=>{
        e.preventDefault();
        Setsignin(true);
    }
  return(
      <>
   <div className="body">
       <div className="header">
          <h1 className='logo'>NETFLIX</h1>
          <button className='signin' onClick={load}>Sign in</button>
       </div>
 {
     signin ? (<Signin/>):(<> { signup ? (<Signup/>):(
        <>
        
        <div className="contant">
           <h1>Unlimited movies, TV shows, and more.</h1>
           <h3>Watch anywhere. Cancel anytime.</h3>
           <p>Ready to watch? Enter your email to create or restart your membership.</p>
        
       </div>
       <div className="searchbtn">
       <input type="email" name="email" id="" className="email" placeholder='Email address' />
       <button className='search'  onClick={show}>Get started</button>
       </div>
        
        </>
    )}</>)
}
   </div>
      </>
  );
}

export default Login;
