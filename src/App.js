import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video.js';
import axiosInstance from "./axios.js";

function App() {

  const [videosPosts, setVideosPosts] = useState([]);

  useEffect(() => {
    async function fetchVideosPosts() {
      const respose = await axiosInstance.get("./v2/posts");
      // as we sent res.json(data) to .data
      setVideosPosts(respose.data);

      // Return read more maybe all asyn func shold have return ;
      // Stops the function from firing;
      return respose;
    }

    fetchVideosPosts();
  }, [])

  console.log("\n VIDEOS from database", videosPosts);


  return (
    <div className="app">
      <div className="yogesh_header">
        {/* <img src="./flag-of-india.jpg" alt="India" /> */}
        <h3> TikTok    by <span>Yogesh</span></h3>
      </div>
      <div className="video_container">
        {videosPosts.map((video) => (
          <Video
            key={video._id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
          />
        ))
        }

      </div>
      <div className="yogesh_header">
        <p>Please wait for 6-8 sec to load</p>
      </div>
    </div>
  );
}

export default App;
