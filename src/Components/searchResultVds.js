import React, { useEffect, useState } from 'react'
import './searchResultVdsCss.css'
import YoutubePlayer from './youtubePlayer';
import YtContainer from './ytContainer';
import APIKEY from './API';



function SearchList(props) {
    const [video,setVideo] = useState();
    //console.log(props.element,'element');
    const videoId=props.element.id.videoId;
    const itemSnippet=props.element.snippet;
    var url=`https://www.googleapis.com/youtube/v3/videos?key=${APIKEY}&part=snippet,player,contentDetails,statistics&maxResults=1&id=${videoId}`;    
    useEffect(()=>{
        async function Fetchvideo(url){
            try{
                var videoResult= await fetch(url);
                videoResult= await videoResult.json();
                setVideo(videoResult.items);
                console.log('Configured result',video);
            }
            catch{
                console.log('error');
            }
        }
        Fetchvideo(url);
    },[videoId]);    
    var fineData={vidDuration:undefined,
        views:undefined,
        likes:undefined,
        player:undefined,
        thumbnail:undefined,
        title:undefined,
        channelTitle:undefined,
        discription:undefined,
        tags:undefined,
        timeFromUpload:undefined,
        videoId:undefined};


    try{
        fineData.player=video[0].player;
        fineData.thumbnail=itemSnippet.thumbnails.high.url;
        fineData.title=itemSnippet.title;
        fineData.channelTitle=itemSnippet.channelTitle;
        fineData.discription=video[0].snippet.description;
        fineData.tags=video[0].snippet.tags;
        fineData.timeFromUpload=video[0].snippet.publishedAt;
        fineData.videoId=video[0].id;
        console.log(fineData.videoId,'iddddddddd');


    fineData.vidDuration=video[0].contentDetails.duration;
    //console.log(fineData.vidDuration);
    fineData.vidDuration=fineData.vidDuration.replace('PT','');
    fineData.vidDuration=fineData.vidDuration.replace('M',':');
    fineData.vidDuration=fineData.vidDuration.replace('H',':');
    fineData.vidDuration=fineData.vidDuration.replace('S','');
    if (fineData.vidDuration.length<3){
        fineData.vidDuration='0:'+fineData.vidDuration;
    }
    // vidDuration=null;
    // console.log(vidDuration);
    
    fineData.views=video[0].statistics.viewCount;
    fineData.likes=video[0].statistics.likeCount;
    let M=1000000;
    let K=1000
    if(fineData.views>1000000){
        fineData.views=(fineData.views/M).toPrecision(2);
        fineData.views+='M';
    }
    else if(fineData.views>1000){
        fineData.views=(fineData.views/K).toPrecision(2);
        fineData.views+='K';
    }
    }
    catch (error){
        console.log(error);
    }
    function ItemClickHandler(item){
        console.log(item,'sending item to return ');
                props.returnValue(item);
        }
    
    var curDate= new Date();
    var uploadDate=new Date(fineData.timeFromUpload);
    function timeDifference(d, dd) {
        var hour = 60 * 60 * 1000,
            day = hour * 24,
            month = day * 30,
            ms = Math.abs(d - dd),
            months = parseInt(ms / month, 10);    
    
        ms = ms - months * month;    
        var days = parseInt(ms / day, 10); 
        ms -= days * day;
        var hours = parseInt(ms / hour, 10);   
        ms -= hours * hour;
    
        return [
            months ,
            days,
            hours
        ].join(", ");
    };
    try{
    fineData.timeFromUpload=timeDifference(curDate,uploadDate);}
    catch (error){

    }

    
    const listItemSearch={display: 'grid',
                        gridTemplateColumns: '345px',
                        gap: '5px'
                    }
    //console.log(props.status,'status');
    listItemSearch.gridTemplateColumns=props.status===true?'345px min(40vw)':'345px';
    

    return (
        <li style={listItemSearch} className='list-item-search' onClick={()=>ItemClickHandler(fineData)}>
            <div className='vid-preview-search'><img src={fineData.thumbnail} alt="img"  />
                <div className="duration-search">{fineData.vidDuration}</div>
            </div>
            <div style={{marginBottom:'10px'}}>
                <div className="title-search">{fineData.title}</div>
                <div style={{display:'flex'}}>
                    <div className="views-list-search">{fineData.views} views</div>
                    <div className="time-upload-list-search">{fineData.timeFromUpload} </div>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className='channel-icon-search'></div>
                    <div className="channel-name-list-search">{fineData.channelTitle}</div>
                </div>
            </div>
        </li>
    )
}

export default SearchList
