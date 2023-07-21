import React, { useState } from 'react'
import "./tweetbox.css"
import { addDoc, collection, } from 'firebase/firestore'
import { db } from "./firebaseconf"
// import { firebase } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js'




// const admin = require('firebase-admin').default;
// firebase.db.collection("tweets").add({
//     createdAt: firebase.FieldValue.serverTimestamp(),
//     name: "Tokyo",
//     country: "Japan"
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });



export const Tweetbox = () => {
    const [ tweetMessage, setTweetMessage ] = useState()
    const [ tweetImage, setTweetImage ] = useState()
    // const sendTweet=(e)=>{
    //     e.preventDefault();

    //     db.collection('tweets').add({
    //         displayName:"rk",
    //         userName:"akky_im",
    //         verified:true,
    //         text:tweetMessage,
    //         image:tweetImage


    //     })
    //     .then(()=>{
    //         alert('message has been send')
    //     })
    //     .catch(error=>{
    //         alert(error.message)
    //     });
    //     setTweetMessage("")
    //     setTweetImage("")
    // }
   
// const ref = firestore.collection('tweets').doc('foo')
// ref.set({
//     createdAt: firebase.firestore.FieldValue.serverTimestamp()
// })
// .then(() => {
//     console.log('Done')
// })
// .catch(error => {
//     console.error(error)
// })
    const userCollectionRef = collection(db, "tweets")

    const handleSubmit = () => {
        addDoc(userCollectionRef, {
           tweetMessage:tweetMessage,
            tweetImage:tweetImage,
           
           
        })
    }
    return (
        <div className='tweetbox'>
            <form className='tweetbox__form'>
                <i class="fa-solid fa-user"></i>
                <div className='tweetbox__form-field'>
                    <div className='tweetbox_input'>
                        <input
                            value={tweetMessage}
                            onChange={e => {
                                setTweetMessage(e.target.value)
                            }}

                            type='text' placeholder="What's happening today">

                        </input>
                    </div>
                    <div className='tweetbox_imageinput'>
                        <input value={tweetImage}
                            onChange={e => {
                                setTweetImage(e.target.value)
                            }}
                            type='text' placeholder="optional:enter image url">

                        </input>
                    </div>
                    <div className='tweetbox_input'>
                        <div className='tweetbox_icons'>
                            <i class="fa-solid fa-image"></i>
                            <i class="fa-solid fa-hand-holding-heart"></i>
                            <i class="fa-sharp fa-solid fa-square-poll-vertical"></i>
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            <i class="fa-solid fa-calendar-days"></i>

                        </div>
                        <button onClick={handleSubmit}
                            type="button" class="btn btn-primary" >Tweet</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
