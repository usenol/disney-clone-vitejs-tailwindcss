import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Slider() {
    const [movieList,setMovieList]=useState([]);

    useEffect(() => {
        getTrendingMovies();
    },[])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos()
            .then((response) => {
                console.log(response);
                setMovieList(response);
            })
            .catch((error) => {
                console.error(error);
        })
    }

  return (
    <div className='flex overflow-x-auto w-full px-16 py-4 max-md:scrollbar-hide'>
        {movieList.map((item) => (
           <img src = {IMAGE_BASE_URL+item.backdrop_path}
           className='min-w-full h-[350px] object-cover object-left-top mr-5 rounded-md'/>
        ))}
    </div>
  )
}

export default Slider