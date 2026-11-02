
import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

function Favorites() {
const [favorites, setFavorites] = useState(() => {
  return JSON.parse(
    localStorage.getItem('cinefy-favorites')
  ) || [];
});

  return (
    <main className="container py-5">
      <h1 className="text-white mb-4">Meus Favoritos</h1>

      {favorites.length > 0 ? (
        <div className="row g-4">
          {favorites.map((movie) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={movie.id}
            >
              <MovieCard movie={movie} onFavoriteChange={setFavorites} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">
          Você ainda não adicionou nenhum filme aos favoritos.
        </p>
      )}
    </main>
  );
}

export default Favorites;
