import React, { useState } from 'react'
import PageHeading from "../Components/PageHeading";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
    const auth = getAuth();

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState('')
    let [errorMessage2, setErrorMessage2] = useState('')
  
const handleEmail = (e) => {
    setEmail(e.target.value)

}
const handleSubmit = () => {

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        console.log("Enter Your valid Email");
        
    }
    if(!email){
        setErrorMessage("Enter Your Email")
    }
    if(!password ){
        setErrorMessage2("Enter Your password")
        

        }else if(!/(?=.*[a-z])/.test(password)){
            setErrorMessage2("password er moddhe lower case de")
        }else if(!/(?=.*[A-Z])/.test(password)){
            setErrorMessage2("password er moddhe upper case de")
        }else if(!/(?=.*[0-9])/.test(password)){
            setErrorMessage2("password er moddhe number de")
        }else{
            
        }
    
     


if(email && password && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){

}
    createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
        console.log("Authentication done");
        
  })
  .catch((error) => {

    const err = error.code
    console.log(err);
    
   
  });
}
console.log(errorMessage);



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
            <input onChange={handleEmail} className='border-2 border-gray-300 p-2 w-1/3 m-2 outline-none' type="email" placeholder='Enter Your Email' /> <br />
            {
                errorMessage && 
                <p className='bg-primary text-white py-4 w-1/3 mx-auto'>{errorMessage}</p>

            }

            <input onChange={(e)=> setPassword(e.target.value)} className='border-2 border-gray-300 p-2 w-1/3 m-2 outline-none' type="Password" placeholder='Enter Your Password' />
            {errorMessage2 && 
            <p>{errorMessage2}</p>
            }
            <p className='mt-5'>Forgot your password?</p>
            <button onClick={handleSubmit} className='bg-primary my-5 cursor-pointer text-white w-1/3 py-2 rounded-sm'>SignUp</button>
            <p>Don’t have an Account?Create account</p>
          </div>
          
        </div>
      
    </section>
  )
}

export default LogIn
