import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = '2726c76c6575381f695437d9319dec9e';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2726c76c6575381f695437d9319dec9e';

//https://api.themoviedb.org/3/trending/movie/day?api_key=2726c76c6575381f695437d9319dec9e
const getTrendingVideos = async () => {
  const response = await axios.get(API_URL+"/trending/movie/day?api_key="+API_KEY);
  return response.data.results;
}

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}