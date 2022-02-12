import React from 'react';
import userreq from '../Request';
import Banner from './Banner';
import Row from './Row';


function Home() {
  return (
    <>
    <div className="home">

<Banner/>
<Row title="Netflix Originals" isLargerow fetchURL={userreq.fetchNetflixOriginals}/>
<Row title="Trending Now" fetchURL={userreq.fetchTrending}/>
<Row title="Top Rated" fetchURL={userreq.fetchTopRated}/>
<Row title="Action" fetchURL={userreq.fetchActionMovies}/>
<Row title="Comedy" fetchURL={userreq.fetchComedyMovies}/>
<Row title="Romance" fetchURL={userreq.fetchRomanceMovies}/>
<Row title="Horror" fetchURL={userreq.fetchHorrorMovies}/>
<Row title="Documentaries" fetchURL={userreq.fetchDocumentaries}/>
    </div>
    
    
    
    </>
  );
}

export default Home;
