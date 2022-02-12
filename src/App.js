import React ,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Home from './Component/Home';
import Login from './Login';
import { auth } from './Component/firebase';
import { useDispatch } from 'react-redux';





function App() {

  const User = useSelector(selectUser);
  const dispatch =useDispatch();
  useEffect(()=>{
  const unsuscribe= auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          uid:user.uid,
          email:user.email

        }))
      }
      else{
        dispatch(logout);
      }
    })
    return unsuscribe;
  },[])
  return (
 <>
 {!User?(<Login/>):(<Home/>)
 }
 </>
  );
}

export default App;
