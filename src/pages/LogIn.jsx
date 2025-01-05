import React, { useState } from 'react'
import PageHeading from "../Components/PageHeading";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
    const auth = getAuth();

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState('')
  


createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
        console.log("Authentication done");
        
  })
  .catch((error) => {

    const err = error.code
    
    if(err.includes('auth/invalid-email')){
        setErrorMessage("Email is not valid")
    }
  });


  return (
    <section>
        <div className="container mx-auto">
        <div>
            <PageHeading heading="My Account" pageName="My Account" />
          </div>
          <div className='mt-20 mb-5'>
            <h2 className='text-xl sm:text-3xl text-primary text-center font-bold'>Register</h2>
            <p className='text-sm text-[#9096B2] text-center'>Please login using account detail bellow.</p>
          </div>
          <div className='text-center'>
            <input onChange={(e)=> setEmail(e.target.value)} className='border-2 border-gray-300 p-2 w-1/3 m-2 outline-none' type="email" placeholder='Enter Your Email' /> <br />
            <p>{errorMessage}</p>

            <input onChange={(e)=> setPassword(e.target.value)} className='border-2 border-gray-300 p-2 w-1/3 m-2 outline-none' type="Password" placeholder='Enter Your Password' />
            <p>Forgot your password?</p>
            <input  className='bg-primary p-2 w-1/3 m-2 outline-none text-center text-white' type="text" placeholder='SignIn'  />
            <p>Don’t have an Account?Create account</p>
          </div>
          
        </div>
      
    </section>
  )
}

export default LogIn
