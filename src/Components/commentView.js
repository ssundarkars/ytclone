import React from 'react'
import './commentViewCss.css'
import LimitedParagraph from './LimitContentSize'

function commentView(props) {
  return (
    <div className='message-pile-box'>
        <div className="profile-pic"><img src={props.data.snippet.topLevelComment.snippet?.authorProfileImageUrl} alt="" srcset="" /></div>
        <div className="message-info">
            <span className="propfile-name">{props.data.snippet.topLevelComment.snippet?.authorDisplayName}</span>
            <span className="time-commented">{props.data.snippet.topLevelComment.snippet?.publishedAt}</span>
            <div className="message-content">
            <LimitedParagraph text={props.data.snippet.topLevelComment.snippet?.textDisplay} maxWords={30} />
            </div>
            <div className="react-comment">
                <button type='button' className='like-comment'> 👍 {props.data.snippet.topLevelComment.snippet?.likeCount} </button>
                <button type='button' className='dislike-comment'>👎</button>
                {/* <button type='button' className='reply-comment'>Reply</button> */}
            </div>
        </div>
    </div>
  )
}

export default commentView
