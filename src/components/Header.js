import React from 'react'
import {auth} from '../utils/firebase'
import { signOut,onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser,addUser } from '../utils/userSlice'
import { useEffect } from 'react'
const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid, email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate('/browse')
      }
      else{
        dispatch(deleteUser());
        navigate('/');
      }
    })
    return () => unsubscribe();
  },[]);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      dispatch(deleteUser);
      navigate('/');
    }).catch((error) => {
      
    });
  }
  
    return (
      <div className='absolute  px-8 py-2 bg-gradient-to-t from-black z-10 w-screen flex justify-between'>
          <img className='w-40' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'></img>
          
          {user&&
        <div className='flex'>
          <img className='h-10 mx-2 rounded-md' src={user.photoURL}></img>
        <button className='bg-red-600 h-8 p-1 rounded-md' onClick={handleSignOut}>Sign out</button>
        </div>
}
      </div>
          
    )
}

export default Header