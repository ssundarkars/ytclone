import React, { useRef ,useEffect} from 'react'
import './HeaderCss.css'
import { Triangle } from './miniComp'
import SearchPage from './searchPage';
// const APIKEY='AIzaSyCSB1qg-UP1DPgyxndaq3gSdrQrTiMf9T0';
function Header(props) {
    const queryField=useRef(null);
    function Search(event){
        console.log(queryField.current.value);
        event.preventDefault();
        props.inputText(queryField.current.value);
        console.log('12Header');
    }

    return (
        <>
            <div className='Header'>
                <div className="logo">
                    <div className="icon"><Triangle size='vsmall' color='white'></Triangle></div>
                    <div className="name">MysuDarshan</div>
                </div>
                <form action='searchvdsa'>
                    <input type="text" placeholder='Search' ref={queryField} />
                    <button className='searchBtn' type='submit' onClick={Search}>Search</button>
                </form>
                <div className="myProfile">S</div>
            </div>
            {/* <Search query={queryField.current.value}></Search> */}
        </>
    )
}

export default Header
