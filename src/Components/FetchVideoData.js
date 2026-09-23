import React, { useEffect } from 'react'
import App from '../App';
import APIKEY from './API';

function Search(props){
    var url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&maxResults=25&q=${props.inputContent}`;
    const fetchData =async (url)=>{
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            return(data);
        }
        catch (error){
            console.log(error);
            return( <h1 style={{backgroundColor:'black',color:'red'}}>Unknown Error Encountered</h1>)
        }
    }

    useEffect(()=>{
        fetchData(url);
    },[]);


    // return(
    //     <>
    //     {isLoading?<h1>Loading...</h1>:<h1> Data Fetched successfully</h1>}
    //     </>
    // )

}
export default Search