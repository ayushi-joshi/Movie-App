import React, { useContext, useEffect, useState } from 'react';
import CardContext from '../context/CardContext';
import { useParams } from 'react-router-dom';
import { BsClockHistory } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext';
const MovieDetail = () => {
  const { movies } = useContext(CardContext);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const { darkMode, toggleDarkMode } = useTheme();
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [movieId]); 
  useEffect(() => {
    AOS.init();
  }, []);
  const img_path = "https://image.tmdb.org/t/p/w500";
  const movie = movies.find((movie) => movie.id === parseInt(movieId));

  if (loading) {
    return <div className='pt-52 text-white'>Loading...</div>
  }

  if (!movie) {
    return <div className='text-white pt-52'>Movie not found</div>
  }

  return (
    <div className={`lg:flex lg:flex-row  lg:h-[90vh]  lg:mt-16 mt-12 flex-wrap font-bold p-10 ${darkMode ? 'text-white' : 'text-black'}`} >
      <div className='relative h-full lg:w-2/5 p-2 flex justify-center' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img className='h-full' src={`${img_path}${movie.poster_path}`} alt='' />

        <div className="absolute lg:left-20 top-0 w-12 h-12 bg-yellow-400 text-black backdrop:opacity-0 rounded-full flex justify-center items-center">
          <p className='text-sm'>{movie.vote_average}</p>
        </div>
      </div>
      <div className='lg:w-1/2 space-y-2 h-full p-4 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>{movie.original_title}</h1>
        <p>{movie.overview}</p>
        <div className='flex items-center'><BsClockHistory size={18}  /><p className='ms-2'> {new Date(movie.release_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p></div>
      </div>
    </div>
  );
}

export default MovieDetail;
