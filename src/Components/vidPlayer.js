import React, { useRef, useState } from 'react'
import './vidplayercss.css'
import {FooterComp , PlaySymbol,Triangle,Horizontal, ToggleButton} from './miniComp'
import picture from '/home/mysudarshan/Documents/Web Development/React/ytclone/src/Images/sample.mp4'

import sound from '/home/mysudarshan/Documents/Web Development/React/ytclone/src/Images/clock-alarm-8761.mp3'
function VidPlayer() {
    var titleStyle={
        backgroundColor:'white',
        color:'grey',
        fontWeight:'700',
        width:'25px',
        height:'20px',
        borderRadius:'15%',
        textAlign:'center',
        
    }
    const [visibility,setVisibile]=useState('hidden');
    const [cursor,setCurserType]=useState('auto');
    // var seenType={
    //     visibility:visibility,
    //     cursor:cursor,
    // }

    // function handleMouseCapture(){
    //     setVisibile('visible')
    //     setCurserType('pointer');
    //     setTimeout(change,2000);
    //     function change(){
    //         setCurserType('none');
    //             setVisibile('hidden');

    //     }
    // }
    // const [status,changePlayerStatus]= useState('pause');
    // // const [control,changeControl] =useState('play')
    // const vid= document.getElementById('video-background');
    // function playerClickHandler(){
    //     if (status==='play'){
    //         changePlayerStatus('pause');
    //         // changeControl('pause')
    //         vid.pause();
    //         // console.log(vid.currentTime());
    //     }
    //     else{
    //         changePlayerStatus('play');
    //         // changeControl('play')
    //         console.log(vid);
    //         vid.play();
    //         // console.log(vid.currentTime());
    //     }
    //     handleMouseCapture()
    // }

    // function nextClickHandler(){
    //     console.log('Next Clicked');
    // }
    // const [autoPlay,changeAutoPlay] = useState(false)
    // function autoPlayClickHandler(){
    //     if (autoPlay===true){
    //         changeAutoPlay(false);
    //     }
    //     else{
    //         changeAutoPlay(true);
    //     }
    // }
    // const [style,setStyle]=useState('dashed')
    // const fullIcon={
    //     borderWidth: '3px',
    //     borderColor: 'white',
    //     borderStyle: style
    // }
    // function fullScreenClickHandler(){

    //     if(fullIcon.borderStyle==='dashed'){
    //         setStyle('solid');
    //     }
    //     else{
    //         setStyle('dashed');
    //         }
    //     console.log(window.screen.width , window.screen.height,fullIcon);
    //     // window.resizeTo(190,108);
    //     vid.requestFullscreen();
    // }
    // const [subtitle,turnTitles]=useState(false)
    // function setSubtitle(){
    //     if (subtitle===false){
    //     turnTitles(true);}
    //     else{
    //         turnTitles(false);
    //     }
    //     console.log('title turned', subtitle);
    // }
    function fetchVid(){
        const [data,updateData]= useState([]);

    }

    return (
        <>
        <div className='vid container' onMouseMove={handleMouseCapture} >
            <div className='Video-player'>
                {/* <video  style={{maxWidth:'100%',maxHeight:'100%'}}  id="video-background">
                    <source src={'https://www.youtube.com/embed/8YWrmZoUYGs?si=R9KnzVvRrW_EQYhq'} type="video/mp4"/>
                    <source src={sound} type='audio/mpeg'/>
                </video> */}
                {/* <iframe style={{width:'100%',height:'100%',borderRadius:'15px'}} src="https://www.youtube.com/embed/FHTbsZEJspU?si=L04ZCMpCX0F44z6n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <iframe style={{width:'100%',height:'100%',borderRadius:'15px'}} src="https://www.youtube.com/embed/FHTbsZEJspU?si=3fzyUgR-urLml4pX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* <iframe  style={{width:'100%',height:'100%',borderRadius:'15px'}} src="https://www.youtube.com/embed/8YWrmZoUYGs?si=R9KnzVvRrW_EQYhq" id="video-background" title="YouTube video player" frameborder="0" allowfullscreen></iframe> */}
            </div>
            {/* <div style={seenType} className="vid1" onClick={playerClickHandler} >
                <FooterComp child2={<Horizontal  color='white' size={'large'} />} child1={<Triangle  size={'large'} color='white' borderType={'solid'} />} playstatus={status}></FooterComp>
                
                </div> */}
            {/* <div  style={seenType} className="vid-footer">
                <div className="progress-bar-holder"><div className="progress-bar"></div></div>
                <div className="left side"> 
                    <div className="control" onClick={playerClickHandler}><FooterComp child2={<Horizontal size={'smaller'} color='white' />} child1={<Triangle  size={'smaller'} color='white' borderType={'solid'}/>} playstatus={status}>     
                        </FooterComp></div>
                    <div className="next" onClick={nextClickHandler}><FooterComp child1={<Triangle  size={'smaller'} borderType={'solid'} color='white' />} child2={<Horizontal size={'smaller'} color='white' playstatus={'noneed'}/>}>
                        </FooterComp></div>
                    <div className="volume"><FooterComp child1={<p className='volume down'>-</p>} child2={<p className='volume up'>+</p>}>
                        </FooterComp></div>
                    <div className="time"><FooterComp child1={'2:12/'} child2={'9:12'}></FooterComp></div>
                </div>
                <div className="right side">
                    <div  className="autoplay" onClick={autoPlayClickHandler}><FooterComp child1={<ToggleButton radius={'10px'} autoStatus={autoPlay}/>}>
                        </FooterComp></div>
                    <div className="sub-title" onClick={setSubtitle}><FooterComp child1={<div style={titleStyle}>cc</div>} Title={subtitle}>
                        </FooterComp></div>
                    <div className="setting"><FooterComp child1={"sett"}>
                        </FooterComp></div>
                    <div className="pic-by-pic"><FooterComp child1={"pic"}>
                        </FooterComp></div>
                    <div className="full-Screen" onClick={fullScreenClickHandler}><FooterComp child1={<div  style={fullIcon} className='fullscreen'></div>} >
                        </FooterComp></div>
                </div>
            </div> */}

        </div>
        </>
    )
}

export default VidPlayer
