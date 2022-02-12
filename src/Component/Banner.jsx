import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Banner.css'
import axios from '../Axios';
import userreq from '../Request';

function Banner() {
    const [movie,setmovie]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(userreq.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
        }
        fetchData();
    },[])
  return(
      <>
    
   <div className="top">
   <div className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}}>
          <Navbar/>
          <div className="banner-body">
              <div className="banner-name">
<h1>{movie?.title||movie?.original_name||movie.name}</h1>
              </div>
              <div className="banner-button">
                  <button>PLAY</button>
                  <button>MY List</button>
              </div>
              <div className="banner-dis">
                 <p>{movie?.overview}</p>
              </div>
          </div>
      </div>
   </div>
      
      </>
  );
}

export default Banner;
