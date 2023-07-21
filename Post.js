import React,{useEffect,useState} from 'react'
import "./Post.css"
import {tweetsRef} from './firebaseconf'
import { onSnapshot } from 'firebase/firestore';

export const Post = () => {
    const [posts, setposts] = useState([]);
   
  useEffect(() => {
    const unsubscribe = onSnapshot(tweetsRef, snapshot => {
        const tweetData = snapshot.docs.map(doc => doc.data());
        setposts(tweetData);
    });
    return () => unsubscribe();
}, []);

 return (
        <div className='post'>
            <div className='post_header'>
                <h5><i class="fa-solid fa-user"></i>John Deo <span className='title1'>@jhondeo</span> </h5>

            </div>
            <div className='post-description'>
                Impossible is Nothing
                <img src="https://images.unsplash.com/photo-1626025437642-0b05076ca301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVzc2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" height="500px" width="500px"></img>
                <div className='lower'>
                    <i class="fa-solid fa-comment"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-square-poll-vertical"></i>
                </div>
                <div className='next'>
                    <div className='post_header1'>
                        <h5><i class="fa-solid fa-user"></i>Rachel <span className='title1'>@Rachel123</span> </h5>

                    </div>
                    <div className='post-description'>
                        Mood...
                        <img src="https://images.unsplash.com/photo-1544194215-541c2d3561a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVvdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" height="500px" width="500px"></img>
                        <div className='lower'>
                            <i class="fa-solid fa-comment"></i>
                            <i class="fa-solid fa-retweet"></i>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-square-poll-vertical"></i>
                        </div>
                        <div className='posts'><i class="fa-solid fa-user">
                            </i>
                        {posts.map((tweet)=>(<div>
                            <h4> {tweet.tweetMessage}</h4>
                            <h4><img src= {tweet.tweetImage}></img></h4>
                            <div className='lower'>
                            <i class="fa-solid fa-comment"></i>
                            <i class="fa-solid fa-retweet"></i>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-square-poll-vertical"></i>
                        </div>
                        </div>))

}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
