import React, { useRef, useState } from 'react';
import './Video.css'
import VideoFooter from './VideoFooter.js';
import VideoSidebar from './VideoSidebar.js';


function Video({ url, channel, description, song, likes, comments, shares }) {

    const [playing, setPlaying] = useState(false);
    const eleRef = useRef(null);

    const onVideoClick = () => {
        //if video is palying
        //pause the video on click
        //and change the state value to true
        if (playing) {
            eleRef.current.pause();
            setPlaying(false);
        } else {
            eleRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className='video'>
            {/* Video */}
            {/* add controls as attribute in video to give more functionality */}
            <video onClick={onVideoClick} ref={eleRef} className='actual_video' loop width="350px" height="250px" src={url}></video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                likesParams={likes}
                commentParams={comments}
                shareParams={shares}

            />
            {/* "https://v16m.tiktokcdn.com/f0b00a77e4a06d0924b4a84ccf21520f/5f50172b/video/tos/useast2a/tas-useast2a-ve-0068c003/17791fe438be4573994ff56ebd54a762/?a=1233&br=2618&
            bt=1309&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009021605210101902092163013B973&rc" */}
        </div>
    )
}

export default Video
