import React, { useState } from 'react'; 
import EmojiData from '../Emoji.json' ;

const EmojiSearch = () =>{

const [search, setSearch] = useState('') ;

    return(
    <>
      <div id="emojiSearch">
        <center>
            <input type="text" name='search' value={search} placeholder='Search Emoji..' onChange={()=> setSearch()}/>
        </center>
      </div>
    </>
    ) 
}

export default EmojiSearch