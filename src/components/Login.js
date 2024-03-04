import React, { useRef, useState } from "react";
import Header from "./Header";
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateCurrentUser} from "firebase/auth";
import {updateProfile} from 'firebase/auth'
import { checkValidation } from "../utils/validate";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const user = useSelector(store => store.user);
  const password = useRef(null);
  const handleClick = () => {
    //console.log(email.current.value, password.current.value);
    setErrorMessage(
      checkValidation(email.current.value, password.current.value)
    );
    if (isSignIn) {//sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: user.displayName, photoURL: "https://i.pinimg.com/736x/ec/65/40/ec65407c06bcdd015a81e76add16d55c.jpg"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser();
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          }).catch((error) => {
            // An error occurred
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else { //Sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="w-full absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 my-32 mx-auto left-0 right-0 bg-black bg-opacity-70"
        >
          <label className="w-full text-stone-100 text-2xl font-bold py-4 m-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </label>
          {!isSignIn && (
            <input
              className="w-full rounded-md p-2 m-2 bg-gray-700"
              type="text"
              placeholder="Name"
            ></input>
          )}
          <input
            ref={email}
            className="w-full  p-2 m-2 bg-gray-700"
            type="text"
            placeholder="Email address"
          ></input>
          <input
            ref={password}
            className="w-full  p-2 m-2 bg-gray-700"
            type="password"
            placeholder="password"
          ></input>
          <p className="text-slate-300 px-2 m-0">{errorMessage}</p>
          <div className="text-center">
            <button
              onClick={handleClick}
              className="bg-red-600 rounded-md p-2 m-2 w-full text-xl cursor-pointer"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p className="text-white p-4 cursor-pointer" onClick={toggleSignIn}>
            {!isSignIn
              ? "Already registered? Sign in now"
              : "New to Netflix? Sign Up here"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
