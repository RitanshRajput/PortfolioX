import React, { useEffect, useState } from 'react'; 
import EmojiData from '../Emoji.json' ;

const EmojiSearch = () =>{

const [search, setSearch] = useState('') ;
const [data, setData] = useState([]) ;

useEffect(() => {
  const newData = EmojiData
  .filter(emoji => emoji.title.toLowerCase()
  .includes(search.toLowerCase())) ;

  setData(newData) ;

},[search]) ;

    return(
    <>
      <div id="emojiSearch">
        <center>
            <h2>Emoji Search</h2>
            <input type="text" name='search' value={search} placeholder='Search Emoji..' onChange={(e)=> setSearch(e.target.value)}/>
        </center>

      <div className="main-container">
      { data.map(emoji =>
        <div className='emojiContainer' key={emoji.title}>
          <div className="emojis">
            {emoji.symbol} {emoji.title}
          </div>
        </div>)} 
      </div>
      </div>
    </>
    ) 
} ;

export default EmojiSearch ;