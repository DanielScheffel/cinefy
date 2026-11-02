
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  CardContainer,
  PosterContainer,
  Poster,
  Rating,
  FavoriteButton,
  MovieInfo,
  MovieTitle,
  MovieYear,
} from './MovieCard.style';

import { getImageUrl } from '../../services/tmdb';

function MovieCard({ movie, onFavoriteChange }) {
const [favorite, setFavorite] = useState(() => {
  const savedFavorites = JSON.parse(
    localStorage.getItem('cinefy-favorites')
  ) || [];

  return savedFavorites.some((item) => item.id === movie.id);
});

  function toggleFavorite() {
    const savedFavorites = JSON.parse(
      localStorage.getItem('cinefy-favorites')
    ) || [];

    let updatedFavorites;

    if (favorite) {
      updatedFavorites = savedFavorites.filter(
        (item) => item.id !== movie.id
      );
    } else {
      updatedFavorites = [...savedFavorites, movie];
    }

    localStorage.setItem(
      'cinefy-favorites',
      JSON.stringify(updatedFavorites)
    );

    setFavorite(!favorite);

    onFavoriteChange?.(updatedFavorites);
  }

  const poster = getImageUrl(movie.poster_path);

  const year = movie.release_date
    ? movie.release_date.slice(0, 4)
    : 'Ano desconhecido';

  return (
    <CardContainer>
      <PosterContainer>
        <Link to={`/filme/${movie.id}`}>
          <Poster
            src={poster || '/placeholder-movie.png'}
            alt={movie.title}
            loading="lazy"
          />
        </Link>

        <Rating>
          {movie.vote_average?.toFixed(1) || 'N/A'}
        </Rating>

        <FavoriteButton
          type="button"
          $favorite={favorite}
          onClick={toggleFavorite}
          aria-label={
            favorite
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'
          }
        >
          <FaHeart />
        </FavoriteButton>
      </PosterContainer>

      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYear>{year}</MovieYear>
      </MovieInfo>
    </CardContainer>
  );
}

export default MovieCard;
