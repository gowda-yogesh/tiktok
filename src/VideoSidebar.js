import React, { useState } from 'react';
import './Videosidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';

function VideoSidebar({ likesParams, commentParams, shareParams }) {

    // State for like 
    const [likeNumber, setNumber] = useState(likesParams);
    const [stateLike, setStateLike] = useState(true);
    const [color, setColor] = useState("secondary");

    const likes = () => {
        if (stateLike) {
            setNumber(++likesParams);

            setColor("primary");
            setStateLike(false);
        } else {
            setNumber(likesParams);
            setColor("secondary");
            setStateLike(true);
        }
    }

    // State for comment
    const [commentNumber, setcomment] = useState(commentParams);
    const [stateCom, setStateCom] = useState(true);
    const [color2, setColor2] = useState("secondary");
    const comment = () => {
        if (stateCom) {
            setcomment(++commentParams);
            setColor2("primary")
            setStateCom(false);
        } else {
            setcomment(commentParams);
            setColor2("secondary")
            setStateCom(true);
        }

    }

    // State for share
    const [shareNumber, setshare] = useState(shareParams);
    const [stateShare, setStateShare] = useState(true);
    const [color3, setColor3] = useState("secondary");

    const share = () => {
        if (stateShare) {
            setshare(++shareParams);
            setColor3("primary")
            setStateShare(false);
        } else {
            setshare(shareParams);
            setColor3("secondary")
            setStateShare(true);
        }

    }


    return (
        <div className="video_sidebar">
            <div onClick={likes} className="video_s_love">
                <FavoriteBorderIcon color={color} />
                <p className="video_s_num">{likeNumber}</p>
            </div>
            <br />
            <div onClick={comment} className="video_s_comment">
                <RateReviewIcon color={color2} />
                <p className="video_s_num">{commentNumber}</p>
            </div>
            <br />
            <div onClick={share} className="video_s_share">
                <MobileScreenShareIcon color={color3} />
                <p className="video_s_num" >{shareNumber}</p>
            </div>

        </div>

    )
}

export default VideoSidebar
