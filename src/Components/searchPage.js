import React, { useState, useEffect } from 'react'
import VidContainer from './vidSgnContainer'
import SearchResult from './searchResultVds'
// import FetchVideoData from './FetchVideoData'
import APIKEY from './API';
function SearchPage(props) {
    // const fetchData = 
    const [data, setData] = useState(undefined);
    // const [forReturn, setForReturn]=useState(undefined);
    function returnSetter(value){
        console.log(value,'valueinsearchPage');
        props.dataValue(value);
    }
    useEffect(() => {
        // fetchData(url);
        async function Fetch() {


            // const APIKEY = 'AIzaSyCSB1qg-UP1DPgyxndaq3gSdrQrTiMf9T0';
            // var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.searchRequest}&key=${APIKEY}`
            var url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&part=snippet&maxResults=25&q=${props.searchRequest}`;
            //console.log('Fetching called for', props.searchRequest)
            try {
                var result = await fetch(url);
                result = await result.json();
                //console.log('result', result.items);
                setData(result.items);
            }
            catch (error) {
                //console.log(error, 'encounter');
                return (<h1 style={{ backgroundColor: 'black', color: 'red' }}>Unknown Error Encountered</h1>)
            }
        }
        Fetch();
    }, [props.searchRequest]);

    // console.log(data[0],'data0');

    const resultContainer = {
        display: 'flex',
        justifyContent: 'center',
        margin: '0px auto',
        flexDirection:'column'
    }
    var component = [];
    var status=false;
    console.log(data,'data');
    if(props.searchRequest.length===0){status=false;}
    else{status=true;}
    if (data === undefined);
    else {
        for (let i = 0; i < 25; i++) {
            component.push(<SearchResult returnValue={returnSetter} element={data[i]} status={status}/>);
        }
    }

    return (
        <div style={resultContainer}>
                <div className="topics">
                    <li>All</li>
                    <li>Shorts</li>
                    <li>Mix</li>
                    <li>Songs</li>
                    <li>Dance</li>
                    <li>Top</li>
                    <li>Live</li>
                    <li>News</li>
                    <li>Recently Uploads</li>
                    <li>Game</li>
                </div>
            <ul style={{ justifyContent: 'center', width:'fit-content', margin: 'auto' ,display:'flex',flexFlow:`${status===true?'column nowrap':'row wrap'}`,}}>
                {component}
            </ul>
        </div>
    )
}
export default SearchPage
