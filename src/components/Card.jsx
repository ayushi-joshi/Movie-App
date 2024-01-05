import React, { useContext, useState } from 'react'
import CardContext from '../context/CardContext'
import { BsClockHistory } from "react-icons/bs";
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import { Aos } from 'aos';
const Card = () => {
  const{movies,genres, cardDispatch}=useContext(CardContext)
const [selectgenre, setSelectGenre]=useState(null)
const [searchTerm, setSearchTerm] = useState('');
const { darkMode, toggleDarkMode } = useTheme();
const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

  let img_path="https://image.tmdb.org/t/p/w500"
 let api_url="https://api.themoviedb.org/3/discover/movie?api_key=ddd3b6981019e9e3dfd383c4504010e3"
 let genre_url="https://api.themoviedb.org/3/genre/movie/list?api_key=ddd3b6981019e9e3dfd383c4504010e3"
useEffect(() => {
  const fetchGenres=async()=>{
    try {
      const response=await fetch(genre_url);
      if (!response) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return;
      }
     
      const data = await response.json();
    
      cardDispatch({ type: "GET_GENRES", payload: data.genres });
    } catch (error) {
      console.log(error)
    }
  }
  fetchGenres();
    const fetchMovies = async () => {
      try {
        const response = await fetch(api_url);
       
        if (!response) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return;
        }
       
        const data = await response.json();
        cardDispatch({ type: "GET_MOVIES", payload: data.results });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [cardDispatch]);
  const handleGenre=(genreId)=>{
setSelectGenre(genreId);
  } ;
  useEffect(() => {
    AOS.init();
  }, []);
  const filterMovies=selectgenre ? movies.filter((movie)=>movie.genre_ids.includes(selectgenre)):movies;
  const searchResults = searchTerm
  ? filterMovies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : filterMovies;
  return (
   
    <div className={`p-3 max-auto mt-5   ${darkMode ? 'text-white' : 'text-black'}`}>
  <h1 className=' text-center font-bold text-2xl'>Filter by Genre</h1>
     <div className='mb-3flex flex-wrap space-x-4 space-y-5'>
     <span className='mr-2'></span>
      
     {
genres.map((genre)=>(
       <button key={genre.id} className='btn  text-white px-7 rounded-xl ' onClick={()=>handleGenre(genre.id)}>{genre.name}</button>
     ))}
     </div>
     <div className={`mt-10  flex items-center justify-center w-full  `}>
                <input type="text" placeholder="Search" onChange={handleSearch} value={searchTerm}  className={`rounded-md w-1/2  border   px-4 py-2 focus:outline-none bg-transparent focus:shadow-outline ${darkMode ? 'text-white' : 'border-2 border-black text-black'}`}/>
                <button className=" relative right-8 focus:outline-none">
                <FaSearch size={20} color='gray' />
   
                </button>
            </div>
       <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl  mx-auto">
{
 searchResults.map((movie)=>(
<Link key={movie.id} to={{ pathname: `/detail/${movie.id}`, state: { movie } }}>
   <div  className="rounded-xl  relative overflow-hidden mt-5" >
   <img className="w-full object-cover h-[70%] object-center" src={img_path+movie.poster_path} alt="" />
   <div className={`p-4 bg-transparent h-[30%] ${darkMode ? 'text-white' : 'text-black'}`}>
     <div className="font-bold text-xl mb-2">{movie.original_title}</div>
     <div className='flex items-center'><BsClockHistory size={18}  />  <p className="ms-2 text-base"> {new Date(movie.release_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year:"numeric" })}</p></div>
   
   </div>
  
   <div className="absolute top-2 right-2 w-8 h-8  bg-yellow-400 backdrop:opacity-0 rounded-2xl flex justify-center items-center">
     <p className='text-sm  '>{movie.vote_average}</p>
   </div>
 </div>
 </Link>
 ))}


</div>
       
   </div>
  )
}

export default Card
