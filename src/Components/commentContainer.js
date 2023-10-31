import React, { useEffect, useState } from 'react'
import CommentView from './commentView'
import APIKEY from './API'
function CommentContainer(props) {
  const [content,setContent]=useState([]);
  console.log(props,'incommentcontainer');
  const url=`https://youtube.googleapis.com/youtube/v3/commentThreads?maxResults=100&part=snippet&videoId=${props.videoId}&key=${APIKEY}`
  // const url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${props.videoId}&key=${APIKEY}`
  useEffect(()=>{
    async function commentLoader(){
      var cmntList= await fetch(url);
      cmntList=await cmntList.json();
      setContent(cmntList.items);
      console.log(cmntList,'dadddddddd');
    }
    commentLoader();
  },[props.videoId]);
  console.log('follwed',content);
  var component=[];
  var cmpLen=content?.length;
  for( let i=0;i<cmpLen;i++){
    component.push(<CommentView data={content[i]}/>);
  }

  return (
    <div>
      {component}
    </div>
  )
}



export default CommentContainer;


