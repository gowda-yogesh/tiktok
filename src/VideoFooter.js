import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import RadioIcon from '@material-ui/icons/Radio';

function VideoFooter({ channel, description, song }) {
    return (
        <div className="video_footer">
            <div className="video_footer_text">
                <h4>{channel}</h4>
                <p>{description}</p>
                <div className="video_f_icon_ticker" >
                    <MusicNoteIcon className="video_f_icon" color="secondary" />
                    <Ticker className="video_f_ticker" mode="smooth">
                        {({ index }) => (
                            <>
                                <p style={{ color: "white" }}>{song} </p>

                            </>
                        )}
                    </Ticker>

                </div>
            </div>

            <RadioIcon className="video_f_spin" color="secondary" />

        </div>
    )
}

export default VideoFooter
