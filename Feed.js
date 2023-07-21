import React from 'react'
import "./Feed.css"
import { Tweetbox } from './Tweetbox'
import { Post } from './Post'
// import {tweetsRef} from './firebaseconf'
// import { onSnapshot } from 'firebase/firestore';

export const Feed = () => {
  //   const [posts, setposts] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(tweetsRef, snapshot => {
  //       const tweetData = snapshot.docs.map(doc => doc.data());
  //       setposts(tweetData);
  //   });
  //   return () => unsubscribe();
// }, []);

  return (
    <div className='feed'>
        <header className='feed_header'>
            <h2>Home</h2>
          
        </header>
        <Tweetbox/>
        
         <Post
        
         />
   
       
    </div>
  )
}
