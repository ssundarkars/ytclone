import React, { useRef ,useEffect, useState } from 'react'
import './captionBarCss.css'
import LimitedParagraph from './LimitContentSize'
export function Title(props) {
    const title={
        fontWeight:'600',
        color:'black',
        margin:'10px 0px 0px 10px',
        fontFamily: 'Arial Narrow Bold',
        width:'97%',
        color:'white'
    }
    return (
    <div>
      <h3 style={title}>{props.title}</h3>
    </div>
  )
}



export function Info(props){
    const [subscribe,changeSubscription]= useState({status:false,content:'Subscribe',class:'Unsubscribe',count:0});
    function handleSubscription(){
        if (subscribe.status===true){
            changeSubscription({status:false,content:'Subscribe',class:'Unsubscribe',count:subscribe.count-1});   
        }
        else{
            changeSubscription({status:true,content:'Unsubscribe',class:'Subscribe',count:subscribe.count+1});
        }

    }
    const [like,setLiked]=useState({status:false,content:props.likes,class:'unlike'});
    function handleLikes(){
        if (like.status===true && like.content>=1){
            setLiked({status:false,content:like.content-1,class:'unlike'});   
        }
        // else if (like.content===0){setLiked({status:true,content:like.content+1,class:'unlike'});}
        else{
            setLiked({status:true,content:like.content+1,class:'like'});
            if(dislike.status===true){setDisLiked({status:false,content:dislike.content-1,class:'not-dislike'});   
}
        }
}
    const [dislike,setDisLiked]=useState({status:false,content:0,class:'not-dislike'});
    
    function handleDisLikes(){
        if (dislike.status===true && dislike.content>=1){
            setDisLiked({status:false,content:dislike.content-1,class:'not-dislike'});   
        }
        // else if (dislike.content===0){setDisLiked({status:true,content:dislike.content+1,class:'dislike'});}
        else{
            setDisLiked({status:true,content:dislike.content+1,class:'dislike'});
            if(like.status===true){setLiked({status:false,content:like.content-1,class:'unlike'});   
            
        }}

    }
    return (
        <div className='wrapper'>
        <div className='info-box'>
            <div className="channel-img"></div>
            <div className="channel">
                <h3>{props.channelTitle}</h3>
                <h5>{subscribe.count} subscribers</h5>
            </div>
            <button className={subscribe.class} type='button' onClick={handleSubscription}>{subscribe.content}</button>
        </div>
        <div className='Interaction'>
            <button type='button' className={like.class} onClick={handleLikes}>👍 {like.content}</button>
            <button type='button' className={dislike.class} onClick={handleDisLikes}>👎</button>
            <button type='button' className="share">Share</button>
            <button type='button' className="more">---</button>
        </div>
        </div>

    )
}






export function Discription(props){
    //Demo
    // props.views='10k';
    // props.timepassed='10 months';
    return (
        <div className="outer-disc">
            <div className="head-line">
                <div className="views">{props.views}</div>
                <div className="time-upload">{props.timeFromUpload} ago</div>
                <div className="additional">{props.additional}</div>
            </div>
            <div className="content" >
                <LimitedParagraph text={props.disc}/>
                

            </div>
        
        </div>
    )
}

