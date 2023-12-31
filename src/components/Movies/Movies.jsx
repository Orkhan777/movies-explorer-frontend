import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Search from '../Search/Search';
import './Movies.css';
import { moviesApi } from '../../utils/MoviesApi';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') === null ? '' : localStorage.getItem('searchQuery'));
  const [shortActive, setShortActive] = useState(JSON.parse(localStorage.getItem('shortActive')) === null ? false : JSON.parse(localStorage.getItem('shortActive')));

  const handleSearch = (searchString) => setSearchQuery(searchString);
  const handleShortFilms = () => setShortActive(!shortActive)

  const searchMovieFilter = (allMovies, searchQueryStr, shortActive) => {
    const reg = new RegExp(`${searchQueryStr}`, 'i')
    let filteredMovies = allMovies.filter(function (movie) {
      return reg.test(movie.nameRU);
    })
    if (shortActive) {
      return filteredMovies.filter(function (movie) {
        return movie.duration <= 40;
      })
    }
    return filteredMovies;
  }

  useEffect(() => {
    localStorage.setItem('shortActive', shortActive)
    if (searchQuery) {
      setLoading(true)
      localStorage.setItem('searchQuery', searchQuery)
      moviesApi.getMovies()
        .then((res) => {
          setMovies(searchMovieFilter(res, searchQuery, shortActive));
          setLoading(false);
        })
        .catch(err => console.log(err))
    } 
  }, [searchQuery, shortActive]);



  return (
    <main className='movies'>
      <Search
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        shortFilmsActive={shortActive}
        handleShortFilms={handleShortFilms}
      />
      <MoviesCardList movies={movies} loading={loading} />
    </main>
  )
}

export default Movies;