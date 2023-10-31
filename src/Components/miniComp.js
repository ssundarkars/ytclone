import React from 'react'
export function Triangle(props){
    var borderType=props.borderType===undefined?'solid':props.borderType;
    var borderColor=props.color===undefined?'black':props.color;
    var borderL,borderOther;
    // console.log(borderType,borderColor,props.color);
    const triangle={
        height: '0px',
        width: '0px',
        borderLeft: undefined,
        borderTop: undefined,
        borderRight: '0px solid transparent',
        borderBottom:undefined,
        alignSelf:'center',
        marginLeft:undefined

    }

    if( props.size==='smaller'){
        borderL='14px ' +borderType +' '+borderColor;
        borderOther='10px ' +borderType+ ' transparent';
    }
    else if (props.size==='vsmall') {
        borderL='7px ' +borderType +' '+borderColor;
        borderOther='5px ' +borderType+ ' transparent';
    }
    else{
        borderL='21px ' +borderType +' '+borderColor;
        borderOther='15px ' +borderType+ ' transparent';
        
    }
    triangle.borderLeft=borderL;
    triangle.borderBottom=borderOther;
    triangle.borderTop=borderOther;
    // console.log({borderL},',and,',borderOther)
    
    return (
        <div style={triangle}></div>
    )

}

export function Horizontal(props) {
    var width, height;
    if (props.size==='smaller'){
        height='70%';
    }
    else{
        height='100%';    
    }


    const horizontal = {
        height:null,
        width:'30%',
        alignSelf:'center',
        margin:'10%',
        backgroundColor:props.color
    }
    horizontal.height=height;


   
    return (
        <div style={horizontal}></div>
    )
}

export function PlaySymbol(props) {
    const symbol={
        display:'grid',
        width:undefined,
        height:undefined,
        borderRadius: '50%',
        backgroundColor:'#636363',
        opacity:undefined,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        marginLeft:undefined
        
    }

    symbol.marginLeft=props.left;
    symbol.width=props.radius;
    symbol.height=props.radius;
    symbol.opacity=props.opacity===undefined?'0.5':props.opacity;
    symbol.top=props.top;
    // console.log('opacity',symbol.opacity);
    return (
        <div style={symbol}>
            
            <div style={{width:'60%',height:'70%',display:'flex',justifyContent:'center'}}>
            {/* {props.playStatus==='play'? <div> <Horizontal size={props.size}/> <Horizontal size={props.size}/> </div>: <Triangle size={props.size}/> } */}
            { props.playstatus==='play'?<>{props.child2} {props.child2}</> : props.playstatus==='pause'? props.child1 : <>{props.child1} {props.child2}</>}
            
            </div>
        </div>
    )
}

export function ToggleButton(props){
    const slider={width:'27px', 
                height:'12px',
                borderRadius:'6px', 
                backgroundColor:'#c9c9c9',
                margin:'0px 5px',
                
    }
    const containerToggle={
        position:'relative',
    }
    var left=undefined;
    if (props.autoStatus===true){
        slider.backgroundColor='greenyellow';
        left='20px';
    }
    else{
        slider.backgroundColor='#c9c9c9';
        left='0px';   
    }
    return (
        <div style={containerToggle} className='container-toggle'>
            <PlaySymbol radius={'18px'} size={'vsmall'} color={'white'} opacity="1" top='-2px' left={left}/>
            <div style={slider} className='slider'></div>
        </div>
    )
}


export function FooterComp(props) {
    const outer={
        display:'flex',
        height: 'max(3vh,25px)',
        minWidth: '22px',
        // border:'2px solid black',
        margin:'10px 2px',
        justifyContent: 'center',
        alignItems:'center',
        // borderBottom:'none'
        opacity: '0.6'


    }
    if(props.Title===undefined){
        outer.opacity='1';
    }
    else if(props.Title===false){
        outer.opacity='0.6'
    }
    else{
        outer.opacity='1';
    }

    return (
    <div style={outer}>
        {/* { props.playstatus==='play'?<>{props.child2} {props.child2}</> :props.child1} */}
        { props.playstatus==='play'?<>{props.child2} {props.child2}</> : props.playstatus==='pause'? props.child1 : <>{props.child1} {props.child2}</>}
    </div>
  )
}

export default FooterComp
// 
