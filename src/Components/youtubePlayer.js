import React from 'react'
import './youtubePlayerCss.css'

function YoutubePlayer(props) {
    return (
    <div className='player'>
     <iframe width='100%' height="100%" src={`https://www.youtube.com/embed/${props.PvideoId}?si=GR46cKQ7FImBC-RI`} frameborder="0" allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"} allowFullScreen></iframe>
    </div>
    // {cmpnt}
  )
}


export default YoutubePlayer
