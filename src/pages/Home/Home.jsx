import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";
import TrendingCarousel from "../../components/TrendingCarousel/TrendingCarousel";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/tmdb";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const [popularData, topRatedData, upcomingData] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies(),
        ]);

        setMovies(popularData.results);
        setTopRatedMovies(topRatedData.results);
        setUpcomingMovies(upcomingData.results);
      } catch (err) {
        console.error(err);
        setError(err.message || "Não foi possível carregar os filmes.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <main className="container py-5">
      <TrendingCarousel />

      <MovieCarousel
        id="topRatedCarousel"
        title="Mais bem avaliados"
        movies={topRatedMovies}
      />

      <MovieCarousel
        id="upcomingCarousel"
        title="Próximos lançamentos"
        movies={upcomingMovies}
      />

      <h1 className="mb-2">Descubra seu próximo filme</h1>

      <p className="text-secondary mb-4">
        Confira os filmes mais populares do momento.
      </p>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>

          <p className="mt-3 text-secondary">Carregando filmes...</p>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;
