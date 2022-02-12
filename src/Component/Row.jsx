import axios from '../Axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';





function Row({title,isLargerow, fetchURL}) {




    const[movies,setmovies]=useState([]);
    const base_url='https://image.tmdb.org/t/p/original';

useEffect(()=>{

     async function fecthData(){
    const request= await axios.get(fetchURL);
    setmovies(request.data.results);
    return request
}
fecthData();
},[fetchURL])

const [trailerURL,settrailerURl]=useState("");
const opts={
    height:"390",
    width:'100%',
    playerVars:{
        autoplay:1,
    }
}
const handleClick=(movie)=>{
    if(trailerURL){
        settrailerURl("")
    }
    else
    {
        movieTrailer(movie?.name||"").then(
            url=>{
                const urlParams= new URLSearchParams(new URL(url).search);
                settrailerURl(urlParams.get(`v`));
            }
        ).catch(error=>{
            return console.log(error);
        })
    }
};


  return(
  <>
  
  <div className="row">
      <h2>{title}</h2>
      <div className="posters">
          {
              movies.map(movie=>{
                  return <img  src={`${base_url}${isLargerow?movie.poster_path:movie.backdrop_path}`} alt="" 
                  className={`ipost ${isLargerow && 'largeImage'}`} key={movie.id} onClick={()=>{handleClick(movie)}}/>
              
                })
          }
       
      </div>
           
{
    trailerURL && <YouTube 
    videoId={trailerURL}
    opts={opts}/>
}



  </div>
  
  
  
  </>);
}

export default Row;
