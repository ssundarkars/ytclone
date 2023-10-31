import './App.css';
import MainContainer from './Components/ytContainer'
import Header from './Components/Header';
import SearchPage from './Components/searchPage'
import { useEffect, useState } from 'react';
import commentContainer from './Components/commentContainer';


function App() {
    const [searchInput,setSearchInput] = useState('');
    const [video,setVideo]=useState();
    const [player,setPlayer]=useState(false);
    function updateSearchInput(input){
        console.log(input,'inputApp')
        setSearchInput(input);
    }
    function updatePlayer(data){
        console.log(data,'inAPPD');
        setVideo(data);
        console.log(video,'inAPPV');
    }
    useEffect(()=>{
        function callPlayer(){
            console.log(video,'videotoggler')
            if (video!=undefined){
            setPlayer(true);
            }

    }
    callPlayer();}
    ,[video]);
    useEffect(()=>{
        function callSearchPage(){
            setPlayer(false);
        }callSearchPage();
    },[searchInput]);
    return (
        <div className='Main'>
            {console.log(player,'player')}
            <Header inputText={updateSearchInput}></Header>
            {/* <MainContainer searchRequest={searchInput} /> */}
            {player===true?<MainContainer element={video}></MainContainer>:<SearchPage dataValue={updatePlayer} searchRequest={searchInput} />}
        </div>
    );


}

export default App;
