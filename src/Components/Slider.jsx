import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef = useRef();
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

    const sliderLeft = (element) => {
        element.scrollLeft = element.scrollLeft - element.clientWidth + 110;
    }
    const sliderRight = (element) => {
        element.scrollLeft = element.scrollLeft + element.clientWidth - 110;
    }

  return (
    <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer " 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0' 
        onClick={()=>sliderRight(elementRef.current)}/>
   
    <div className='flex overflow-x-auto px-16 py-4 scrollbar-hide' ref={elementRef}> 
        {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>
    </div>
  )
}

export default Slider