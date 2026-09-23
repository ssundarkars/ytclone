import React from 'react'
import PlayerAndComp from './playerAndComp';
import VdoListContainer from './vidSgnContainer';
import './ytContainerCss.css'
import CommentBox from './commentContainer'
function ytContainer(props) {
  return (
    <div className='main-ytContainer'>
      <div className='left-content'>
        <PlayerAndComp element={props.element} />
        <div className='outer-container'>
          <CommentBox videoId={props.element.videoId} />
        </div>
      </div>
      <VdoListContainer />
    </div>
  )
}

export default ytContainer
