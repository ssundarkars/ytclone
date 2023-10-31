import React from 'react'
import './vidListCss.css'



function vidList(props) {
    return (
        <div className='list-item'>
            <div className='vid-preview'>
                <div className="duration">3.44</div>
            </div>
            <div >
                <div className="title">Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ex, id! lorem30</div>
                <div className="channel-name-list">Lorem, ipsum dolor.</div>
                <div style={{display:'flex'}}>
                <div className="views-list">1.7M views</div>
                <div className="time-upload-list">6 months ago</div></div>
            </div>
        </div>
    )
}

export default vidList
