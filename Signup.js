import React from 'react'
import "./signup.css"

export const Signup = () => {
    return (
        <div className='signupcontainer'>
        <div className="cardnew" >
            <div className="card-body">
                <div className='font-awesome1'>
                    <i className="fa-brands fa-twitter"></i></div>
                <h6 className='card-title'>Join twitter today</h6>
                <div className='btn-g'>
                    <button type="button" className="btn btn-info" ><i class="fa-brands fa-google"></i>Sign in with Google</button></div>
                <div className='btn-a'>
                    <button type="button" className="btn btn-info" ><i class="fa-brands fa-apple"></i>Sign in with Aapple</button></div>
                <div className="mt-2">
                    <h6 className=" divider text-center text-muted">OR</h6>
                    {/* <hr className="text-muted "></hr>
                                               <hr className="hr-text " data-content="OR"/> */} </div>
                <div className='btn-ca'>
                    <button type="button" className="btn btn-info" >Create an Account</button></div>
                <div className='last-1'>
                    {/* Dont have an account?
                            <button type="button" class="btn btn-link">signup</button></div> */}
                    <span className=" fs-2">By signing-up you agree</span>
                    <a href="#"><span className="mt-1 text-info fw-bold"   >Terms and Condtion </span></a>
                    <span className=" fs-2">and </span>
                    <br></br>
                    <a href="#"><span className="mt-1 text-info fw-bold"   >Privacy policy </span></a>
                    <span className=" fs-2">,including</span>
                    <a href="#"><span className="mt-1 text-info fw-bold"   >Cookiee </span></a></div>
                    <div className='last2'>
                    <span className=" fs-2">Have an account already?</span>
                    <a href="#"><span className="mt-1 text-info fw-bold"   >Login </span></a></div>
                    </div>
            </div>


        </div>
        
  )
}
