import React from 'react'
import PlayerAndComp from './playerAndComp';
import VdoListContainer from './vidSgnContainer';
import './ytContainerCss.css'
import CommentBox from './commentContainer'
function ytContainer(props) {
    return (
    <div className='main-ytContainer'>
        <PlayerAndComp element={props.element}/>
        <VdoListContainer /> 
        <div className='outer-container'>
        <CommentBox videoId={props.element.videoId}/>
        </div>
    </div>
  )
}
 
export default ytContainer
