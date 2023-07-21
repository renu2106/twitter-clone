
import React, { useState ,useEffect} from 'react'
import "./Login.css";
// import {auth,signInWithEmailAndPassword} from "./firebaseconf"
import { db ,auth, provider,database} from "./firebaseconf"
// import {signInWithPopup} from "firebase/auth"
import { addDoc, collection, } from 'firebase/firestore'
import { signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[value,setValue]=useState("")
    const userCollectionRef = collection(db, "email")
    // const auth = getAuth();
    const navigate = useNavigate();
const handleNext=(e)=>{
    // e.preventDefult();
    const emailValue=email
    const passwordValue=password
    createUserWithEmailAndPassword(database,emailValue,passwordValue).then(data=>{
        console.log(data,"authData")
        navigate('./Home');
    })
}
    const handleSubmit = () => {
        addDoc(userCollectionRef, {
          email:email,
        //   password:password
            })
        .then(() => {
            signInWithPopup(auth,provider).then((data)=>{
                setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate('./Home');
            })
            } )}
            // .then(()=>{
          
        // })
            // Email added successfully, now sign in the user
    //         auth.signInWithEmailAndPassword(email)
    //           .then((userCredential) => {
    //             // Handle successful sign-in
    //             const user = userCredential.user;
    //             console.log('Signed in:', user);
    //             // Perform any additional actions you want after successful sign-in
    //           })
    // //         .then(() => {
    // //     // Handle successful sign-in
    // //     console.log('Signed in successfully!');
    // // })
    //           .catch((error) => {
    //             // Handle sign-in error
    //             console.log('Sign-in error:', error);
    //           });
    //       })
    //       .catch((error) => {
    //         // Handle Firestore error
    //         console.log('Firestore error:', error);
    //       });
     

    // }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
 })
    
    return (
        
        <div className="container signup-container">
            <div className="row">
                {/* <div className="col-md-12"> */}
                {/* <div className="card shadow"> */}
                {/* <div className="card-body px- "> */}
                {/* <h4 className="  card-title text-center mt-3   ">Twitter</h4> */}
                <div className="card" >
                    <div className="card-body">
                        <div className='font-awesome'>
                            <i className="fa-brands fa-twitter"></i></div>
                        <h6 className='card-title'>Sign-in to twitter</h6>
                        <div className='btn-2'>
                           

                            <button type="button" className="btn btn-info" onClick={handleSubmit}  ><i className="fa-brands fa-google"></i>Sign in with Google</button>
                            </div>
                        <div className='btn-1'>
                            <button type="button" className="btn btn-info" ><i class="fa-brands fa-apple"></i>Sign in with Aapple</button></div>
                        <div className="mt-2">
                            <h6 className=" divider text-center text-muted">OR</h6>
                            {/* <hr className="text-muted "></hr>`
                                               <hr className="hr-text " data-content="OR"/> */} </div>

                        <form>


                            <input type="email" className="p-3 mt-1 mb-2 form-control input-bg" placeholder="Phone number ,username or email"  value={email}  onChange={e => {
                                setEmail(e.target.value)
                            }}
/></form>
<form>


<input type="password" className="p-3 mt-1 mb-2 form-control input-bg" placeholder="password"  value={password}  onChange={e => {
    setPassword(e.target.value)
}}
/></form>
                        <div className='btn-3'>
                        
                            <button type="button" className="btn btn-info"  onClick={handleNext}  >Next</button></div>
                            
                        <div className='btn-4'>
                            <button type="button" class="btn btn-dark">Forget password</button></div>
                        <div className='last'>
                            {/* Dont have an account?
                            <button type="button" class="btn btn-link">signup</button></div> */}
                             <span className=" fs-3">Don't have an account?</span>
                                       <a href="http://localhost:3001/signup.js"><span className=" new  mt-1 text-info fw-bold"   >Sign-up</span></a></div>

                    </div>
                </div>
            </div>
        </div>
        // </div>
        // </div>
        // </div>

    )
}

