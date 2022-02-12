import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import './Navbar.css';



function Navbar() {
    const[show ,handleshow]=useState(false);
    const transition=()=>{
        if(window.scrollY>100){
            handleshow(true)
        }
        else{
            handleshow(false)
        }
    }
    useEffect(()=>{

window.addEventListener("scroll",transition)

return()=>{
    window.removeEventListener("scroll",transition)
}


    },[])
  return(
      <>
      <div className={`nav ${show&& "nav-back"}`}>
          <div className="nav-body">
              <h1>NETFLIX</h1>
              <button onClick={()=>firebase.auth().signOut()}>Logout</button>


          </div>
      </div>
      </>
  );
}

export default Navbar;
