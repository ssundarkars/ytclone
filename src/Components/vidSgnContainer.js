import React from 'react'
import VidList from './vidList';
import './vidSgnContainerCss.css'


function vidSgnContainer() {
  var component=[];
  for(let a=0;a<=10;a++){
    component.push(<VidList/>); 
  }
    return (
    <div className='vidContainer' >
      {component}
     
    </div>
  )
}

export default vidSgnContainer
