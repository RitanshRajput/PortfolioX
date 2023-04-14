import React, { useEffect, useState } from "react";
import axios from "axios";

const ImgGallery = () => {

const [data, setData] = useState("") ;
const [search, setSearch] = useState([]) ;

useEffect(()=> {
 },[]) ;

 const changeHandler = (e) => {
    setSearch(e.target.value) ;
 } 

 const submitHandler = (e) => {
    e.preventDefault() ;

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {setData(response.data.photos.photo)})
        .catch(error => {console.log("Encountered an error with fetching and parsing data", error); }) ;
 };

    return(
    <>
    <div id="imgGallery">
      <center>
        <h2>Image Gallery</h2>
        <form onSubmit={submitHandler} >
          <input className="search" type="text" value={search} onChange={changeHandler} />
          <input className="submit" type="submit" name="search" />
        </form>
        
       { data.length >= 1 ? 
       <Gallery data={data} /> :
       <h4 className="No Data">Search Something Different..</h4>
       }
      </center>    
    </div>
    </>
    )
}
export default ImgGallery ;


const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const Gallery = ({data}) =>{
  return(
    <div className="gallery">
      {data.map((image) => 
        <div className="gallery-container" key={image.id}>
            <div className="photo">
              <img className="img" src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                alt={image.title} />
            </div>
        </div>
      )}
    </div>
  )
}



// apiKey =  "636e1481b4f3c446d26b8eb6ebfe7127";
// `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
// https"//farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg