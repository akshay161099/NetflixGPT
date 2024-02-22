import React from 'react'
import {auth} from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../utils/userSlice'
import Login from './Login'
const Header = () => {
  
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      dispatch(deleteUser);
      navigate('/');
    }).catch((error) => {
      
    });
  }
  
    return (
      <div className='w-44 absolute  px-8 py-2 bg-gradient-to-t from-black z-10 w-screen flex justify-between'>
          <img className='w-40 ' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'></img>
          {console.log(user)}
          {user&&<div className='flex'>
          <img className='h-10 mx-2 rounded-md' src={user.photoURL}></img>
        <button className='bg-red-600 h-8 p-1 rounded-md' onClick={handleSignOut}>Sign out</button>
        </div>
}
          </div>
          
    )
}

export default Header