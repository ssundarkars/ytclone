import React from 'react'
import { Discription, Info, Title } from './captionBar';
import Player from './youtubePlayer';

function playerAndComp(props) {
  console.log(props,'inplayerandComp',props.element.PvideoId);
  return (<>
    {props.element===undefined?<></>:
    <div style={{height:'min-content'}}>
        <Player PvideoId={props.element.videoId}/>
        <Title title={props.element.title}/>
        <Info channelTitle={props.element.channelTitle} likes={props.element.likes} />
        <Discription disc={props.element.discription} view={props.element.views} timeFromUpload={props.element.timeFromUpload} />
    </div>}
    </>
  )
}

export default playerAndComp
